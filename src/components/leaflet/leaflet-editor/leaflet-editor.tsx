import {
  LayersType,
  overrideLeafletMarkers,
  TileLayers,
  LayerEvent,
  toGeoJsonDataFeatureFromLayerEvent,
} from '../common';
import React from 'react';
import { FeatureGroup, MapContainer } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';
import { EditControl } from 'react-leaflet-draw';

export const LeafletEditor: React.FC = () => {
  const [layersType, setLayersType] = React.useState<LayersType>('Toner');
  const center = React.useMemo(() => {
    const iranCenter: LatLngLiteral = { lat: 32, lng: 53 };
    return iranCenter;
  }, []);

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

  const handleOnCreated = React.useCallback((event: LayerEvent) => {
    // eslint-disable-next-line no-console
    console.log(`onCreated:`, event);
    const geodataFeature = toGeoJsonDataFeatureFromLayerEvent(event);
    event.layer.bindPopup(JSON.stringify(geodataFeature, null, 2));
  }, []);

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
          zoom={5}
          scrollWheelZoom={false}
        >
          <TileLayers layersType={layersType} />
          <FeatureGroup>
            <EditControl
              position="topleft"
              draw={{
                rectangle: true,
                polygon: true,
                polyline: true,
                circle: true,
                circlemarker: true,
                marker: true,
              }}
              onCreated={handleOnCreated}
            />
          </FeatureGroup>
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
LeafletEditor.displayName = 'LeafletEditor';
