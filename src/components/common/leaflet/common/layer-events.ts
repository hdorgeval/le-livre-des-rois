import { LatLngLiteral, Layer } from 'leaflet';
export interface ExtendedLayer {
  editing: {
    latlngs: LatLngLiteral[][][];
  };
  options: {
    clickable: boolean;
    color: string;
    fill: boolean;
    fillColor: string | null;
    fillOpacity: number;
    opacity: number;
    stroke: boolean;
    weight: 1 | 2 | 3 | 4;
  };
}

export type LeafletLayer = Layer & ExtendedLayer;
export interface LayerEvent {
  layer: LeafletLayer;
  layerType: 'polygon';
}
