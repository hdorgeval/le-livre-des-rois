import { GeoDataFeature, GeoDataFeatureProperties, LngLatTuple } from './geojson-types';
import { LayerEvent } from './layer-events';

function toPolygonCoordinates(layerEvent: LayerEvent): [LngLatTuple[]] {
  const coordinates = layerEvent.layer.editing.latlngs[0][0];
  // eslint-disable-next-line no-console
  console.log('found coordinates', coordinates);
  const points = coordinates.map((c) => [c.lng, c.lat] as LngLatTuple);
  return [points];
}

export function toLatLngCoordinates(layerEvent: LayerEvent): [LngLatTuple[]] {
  const coordinates = layerEvent.layer.editing.latlngs[0][0];
  // eslint-disable-next-line no-console
  console.log('found coordinates', coordinates);
  const points = coordinates.map((c) => [c.lat, c.lng] as LngLatTuple);
  return [points];
}

export function reverseCoordinates(coordinates: [LngLatTuple[]]): [LngLatTuple[]] {
  const points = coordinates[0];
  const reversedPoints = points.map((point) => [point[1], point[0]] as LngLatTuple);
  return [reversedPoints];
}

export const defaultGeoDataFeatureProperties: GeoDataFeatureProperties = {
  name: { fr: 'area name in french', ar: 'area name in arab' },
  options: {
    clickable: true,
    color: '#3388ff',
    dashArray: 3,
    fill: true,
    fillColor: null,
    fillOpacity: 0.2,
    opacity: 0.5,
    stroke: true,
    weight: 2,
  },
};
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
