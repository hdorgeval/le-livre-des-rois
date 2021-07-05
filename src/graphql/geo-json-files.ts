export interface AllGeoJsonFilesResponse {
  allFile: AllGeoJsonFiles;
}
export interface AllGeoJsonFiles {
  edges: GeoJsonFileNode[];
}

export interface GeoJsonFileNode {
  node: GeoJsonFile;
}

export interface GeoJsonFile {
  id: string;
  name: string;
  extension: string;
  fields: {
    geoData: GeoJsonData;
  };
}

export interface GeoJsonData {
  type: 'FeatureCollection';
  features: GeoDataFeature[];
}

export interface GeoDataFeature {
  type: 'Feature';
  geometry: Geometry;
  properties: unknown;
}

export interface Geometry {
  type: 'Point';
  coordinates: number[];
}
