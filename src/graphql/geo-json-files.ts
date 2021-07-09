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
    geoData: string;
  };
}
