export const leafletTileProvider = {
  openstreetmap: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  openRailwayMap: 'https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png',
  stamenTerrain: 'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
  stamenToner: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
  stamenTonerLines: 'https://stamen-tiles.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}.png',
  stamenTonerLabels: 'https://stamen-tiles.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.png',
  stamenWatercolor: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
  stadiaOutdoors: 'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png',
  thunderforestPioneer: 'https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png',
  esriWorldImagery:
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  esriDelorme:
    'https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}',
};

export type LayersType = 'Toner' | 'Ancient' | 'Terrain';
