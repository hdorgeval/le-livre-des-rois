import { GeoDataFeature, LngLatTuple } from './geojson-types';
import { LayerEvent } from './layer-events';

function toPolygonCoordinates(layerEvent: LayerEvent): [LngLatTuple[]] {
  const coordinates = layerEvent.layer.editing.latlngs[0][0];
  // eslint-disable-next-line no-console
  console.log('found coordinates', coordinates);
  const points = coordinates.map((c) => [c.lng, c.lat] as LngLatTuple);
  return [points];
}

export function toGeoJsonDataFeatureFromLayerEvent(layerEvent: LayerEvent): GeoDataFeature {
  switch (layerEvent.layerType) {
    case 'polygon':
      return {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: toPolygonCoordinates(layerEvent),
        },
        properties: {
          name: {
            fr: 'area name in french',
            ar: 'area name in arab',
          },
          options: { ...layerEvent?.layer?.options, weight: 2, dashArray: 3 },
        },
      };

    default:
      throw new Error(`not implemented`);
  }
}
