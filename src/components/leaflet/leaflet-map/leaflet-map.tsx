import { AllGeoJsonFilesResponse, GeoDataFeature } from '../../../graphql';
import { LayersType, overrideLeafletMarkers, TileLayers } from '../common';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import L, { LatLngLiteral } from 'leaflet';

export interface LeafletMapProps {
  geoJsonFilename: string;
}

export const LeafletMap: React.FC<LeafletMapProps> = ({ geoJsonFilename }) => {
  const geoJsonData = useStaticQuery<AllGeoJsonFilesResponse>(graphql`
    {
      allFile(filter: { absolutePath: { glob: "**/gis/*.geojson" } }) {
        edges {
          node {
            id
            fields {
              geoData {
                features {
                  geometry {
                    coordinates
                    type
                  }
                  type
                  properties {
                    name {
                      ar
                      fr
                    }
                  }
                }
                type
              }
            }
            name
            extension
          }
        }
      }
    }
  `);

  const [layersType, setLayersType] = React.useState<LayersType>('Toner');

  const geoData = React.useMemo(() => {
    return geoJsonData.allFile.edges
      .map((edge) => edge.node)
      .filter((node) => `${node.name}.${node.extension}` === geoJsonFilename)
      .map((node) => node.fields.geoData)
      .pop();
  }, [geoJsonFilename, geoJsonData]);

  const center = React.useMemo(() => {
    const iranCenter: LatLngLiteral = { lat: 32, lng: 53 };
    if (!geoData) {
      return iranCenter;
    }
    const firstPoint = geoData.features
      .map((feature) => feature.geometry)
      .filter((geometry) => geometry.type === 'Point')
      .shift();

    if (firstPoint) {
      return {
        lat: firstPoint.coordinates[1],
        lng: firstPoint.coordinates[0],
      };
    }
    return iranCenter;
  }, [geoData]);

  const configureLeaflet = React.useCallback(() => overrideLeafletMarkers(), []);

  const selectToner = React.useCallback(() => {
    if (layersType === 'Toner') {
      return;
    }

    setLayersType('Toner');
  }, [layersType]);

  const selectAncient = React.useCallback(() => {
    if (layersType === 'Ancient') {
      return;
    }

    setLayersType('Ancient');
  }, [layersType]);

  const selectTerrain = React.useCallback(() => {
    if (layersType === 'Terrain') {
      return;
    }

    setLayersType('Terrain');
  }, [layersType]);

  const onEachFeature = (feature: GeoDataFeature, layer: L.Layer) => {
    const name = feature?.properties?.name?.fr;
    if (name) {
      const popupContent = name;
      layer.bindPopup(popupContent);
    }
  };

  if (!geoData) {
    return null;
  }

  if (typeof window === undefined) {
    return null;
  }

  configureLeaflet();

  return (
    <>
      <div className="text-light" style={{ height: '40vh' }}>
        <MapContainer
          key={layersType}
          className="h-100"
          center={center}
          zoom={7}
          scrollWheelZoom={false}
        >
          <TileLayers layersType={layersType} />
          <GeoJSON data={geoData} onEachFeature={onEachFeature} />
        </MapContainer>
      </div>
      <div
        className="btn-group d-flex flex-row"
        role="group"
        aria-label="Groupe de boutons pour selectionner un type de cartographie"
      >
        <button
          aria-label="Cartographie style Toner"
          type="button"
          className={
            layersType === 'Toner'
              ? 'btn btn-primary text-light'
              : 'btn btn-outline-secondary text-light bg-dark'
          }
          onClick={selectToner}
        >
          Toner
        </button>
        <button
          aria-label="Cartographie style Ancien"
          type="button"
          className={
            layersType === 'Ancient'
              ? 'btn btn-primary text-light'
              : 'btn btn-outline-secondary text-light bg-dark'
          }
          onClick={selectAncient}
        >
          Ancien
        </button>
        <button
          aria-label="Cartographie style Terrain"
          type="button"
          className={
            layersType === 'Terrain'
              ? 'btn btn-primary text-light'
              : 'btn btn-outline-secondary text-light bg-dark'
          }
          onClick={selectTerrain}
        >
          Terrain
        </button>
      </div>
    </>
  );
};
LeafletMap.displayName = 'LeafletMap';
