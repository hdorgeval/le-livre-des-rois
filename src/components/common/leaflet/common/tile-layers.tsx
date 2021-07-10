import { LayersType, leafletTileProvider } from './layer-types';
import React from 'react';
import { TileLayer } from 'react-leaflet';

export interface TileLayersProps {
  layersType: LayersType;
}

export const TileLayers: React.FC<TileLayersProps> = ({ layersType: layerType }) => {
  switch (layerType) {
    case 'Toner':
      return (
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={leafletTileProvider.stamenToner}
        />
      );
    case 'Ancient':
      return (
        <>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={leafletTileProvider.stamenWatercolor}
          />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={leafletTileProvider.stamenTonerLines}
          />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={leafletTileProvider.stamenTonerLabels}
          />
        </>
      );
    case 'Terrain':
      return (
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={leafletTileProvider.stamenTerrain}
        />
      );
    default:
      return (
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={leafletTileProvider.stamenToner}
        />
      );
  }
};

TileLayers.displayName = 'TileLayers';
