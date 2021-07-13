import {
  LayersType,
  overrideLeafletMarkers,
  TileLayers,
  LayerEvent,
  toGeoJsonDataFeatureFromLayerEvent,
  ZoomAndPositionTracker,
  GeometryPolygon,
  GeoDataFeature,
  reverseCoordinates,
  GeoJsonData,
  defaultGeoDataFeatureProperties,
} from '../common';
import React from 'react';
import { FeatureGroup, MapContainer, Polygon, Popup } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';
import { EditControl } from 'react-leaflet-draw';

export const LeafletEditor: React.FC = () => {
  const [layersType, setLayersType] = React.useState<LayersType>('Toner');
  const initialCenter = React.useMemo(() => {
    const iranCenter: LatLngLiteral = { lat: 32, lng: 53 };
    return iranCenter;
  }, []);

  const [zoom, setZoom] = React.useState<number>(5);
  const handleZoomChanged = React.useCallback(
    (value) => {
      setZoom(value);
    },
    [setZoom],
  );

  const [center, setCenter] = React.useState<LatLngLiteral>(initialCenter);
  const handleCenterChanged = React.useCallback(
    (value) => {
      setCenter(value);
    },
    [setCenter],
  );

  const [polygon, setPolygon] = React.useState<GeoDataFeature | null>(null);

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

  const handleOnCreated = React.useCallback(
    (event: LayerEvent) => {
      const geodataFeature = toGeoJsonDataFeatureFromLayerEvent(event);
      event.layer.bindPopup(JSON.stringify(geodataFeature, null, 2));

      if (geodataFeature.geometry.type === 'Polygon') {
        setPolygon(geodataFeature);
      }
    },
    [setPolygon],
  );

  const handleOnEdited = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (event: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const geodata = (event.layers as any).toGeoJSON() as GeoJsonData;
      const feature = geodata.features[0];
      if (feature.geometry.type === 'Polygon') {
        const geodataFeature: GeoDataFeature = {
          type: 'Feature',
          geometry: feature.geometry,
          properties: {
            ...defaultGeoDataFeatureProperties,
          },
        };
        setPolygon(geodataFeature);
      }
    },
    [setPolygon],
  );

  if (typeof window === undefined) {
    return null;
  }

  configureLeaflet();

  return (
    <>
      <div className="text-light" style={{ height: '80vh' }}>
        <MapContainer
          key={layersType}
          className="h-100"
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
        >
          <TileLayers layersType={layersType} />
          <FeatureGroup>
            <EditControl
              position="topleft"
              draw={{
                rectangle: false,
                polygon: true,
                polyline: false,
                circle: false,
                circlemarker: false,
                marker: false,
              }}
              onCreated={handleOnCreated}
              onEdited={handleOnEdited}
            />
            {polygon && (
              <Polygon
                positions={reverseCoordinates((polygon.geometry as GeometryPolygon).coordinates)}
              >
                <Popup>{JSON.stringify(polygon, null, 2)}</Popup>
              </Polygon>
            )}
          </FeatureGroup>
          <ZoomAndPositionTracker
            onZoomChanged={handleZoomChanged}
            onCenterChanged={handleCenterChanged}
          />
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
      <p className="text-light mt-4">
        You can draw a polygon, then you can modify it by adding new points or moving existing ones.
        You can visualize/edit it at any zoom level and in any views (Toner/Ancien/Terrain). Once
        you are ready, click on the polygon to get the corresponding GeoJSON data.
      </p>
    </>
  );
};
LeafletEditor.displayName = 'LeafletEditor';
