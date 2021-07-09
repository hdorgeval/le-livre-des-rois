import { GeoDataFeature, GeoJsonData } from '../../components/leaflet/common';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

interface FeatureProperty {
  name: string;
  name2: string;
  wikilink: string;
}

function filenameFromPlacename(name: string): string {
  let filename = name
    .toLocaleLowerCase()
    .replace(/ /g, '-')
    .replace(/ā/g, 'a')
    .replace(/ī/g, 'i')
    .replace(/‘/g, '-')
    .replace(/ū/g, 'u')
    .replace(/'/g, '-');

  if (filename.endsWith('-')) {
    filename = filename.substr(0, filename.length - 1);
  }
  if (filename.startsWith('-')) {
    filename = filename.substr(1, filename.length - 1);
  }

  return filename;
}
export function splitAllPlaces(): void {
  const rawData = readFileSync(path.join(__dirname, 'all-places.geojson')).toString();
  const geoData = JSON.parse(rawData) as GeoJsonData;
  geoData.features.forEach((feature) => {
    const singleFeature: GeoDataFeature = {
      type: feature.type,
      geometry: feature.geometry,
      properties: {
        name: {
          fr: (feature.properties as unknown as FeatureProperty).name,
          ar: (feature.properties as unknown as FeatureProperty).name2,
        },
      },
    };
    const singlePlace: GeoJsonData = {
      type: 'FeatureCollection',
      features: [singleFeature],
    };

    const filename = `${filenameFromPlacename(singleFeature.properties.name.fr)}.geojson`;
    writeFileSync(path.join('src', 'gis', filename), JSON.stringify(singlePlace, null, 2));
  });
}

splitAllPlaces();
