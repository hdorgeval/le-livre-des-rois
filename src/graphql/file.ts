export interface AllFileResponse {
  allFile: AllFile;
}

export interface AllFile {
  totalCount: number;
  edges: FileNodeWrapper[];
}

export interface FileNodeWrapper {
  node: FileNode;
}

export interface FileNode {
  fields: FileNodeFields;
  id: string;
  name: string;
}

export interface FileNodeFields {
  svgContent: string;
}
