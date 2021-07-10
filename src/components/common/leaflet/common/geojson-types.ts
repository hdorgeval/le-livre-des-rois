export interface GeoJsonData {
  type: 'FeatureCollection';
  features: GeoDataFeature[];
}

export interface GeoDataFeature {
  type: 'Feature';
  geometry: GeometryPoint | GeometryPolygon;
  properties: GeoDataFeatureProperties;
}

export interface GeoDataFeatureProperties {
  name: {
    fr: string;
    ar: string;
  };
  options?: {
    clickable: boolean;
    color: string;
    dashArray: number;
    fill: boolean;
    fillColor: string | null;
    fillOpacity: number;
    opacity: number;
    stroke: boolean;
    weight: 1 | 2 | 3 | 4;
  };
}
export type LngLatTuple = [number, number];
export type GeometryType = 'Point' | 'Polygon';
// | 'MultiPoint'
// | 'LineString'
// | 'MultiLineString'
// | 'MultiPolygon'
// | 'GeometryCollection';

export interface GeometryPoint {
  type: 'Point';
  coordinates: LngLatTuple;
}

export interface GeometryPolygon {
  type: 'Polygon';
  coordinates: [LngLatTuple[]];
}
