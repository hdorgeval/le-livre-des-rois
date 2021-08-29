import { filenameFromPlacename } from '.';
import {
  GeoNamesAndLinks,
  getAllAlternateNamesOfCountry,
  getNamesAndLinksByGeonameIdAndCountry,
} from './read-geo-data-alternate-names';
import { GeoNameData, getAllGeoDataNamesOfCountry } from './read-geo-data-names';
import { GeoDataFeature, GeoJsonData } from '../../../components/common';
import { writeFileSync } from 'fs';
import path from 'path';

export function tryExtractGeodataOf(name: string): {
  inCountry: (countryCode: 'IR') => [GeoNameData | null, GeoNamesAndLinks | null];
} {
  return {
    inCountry(countryCode: 'IR') {
      const alternateNamesData = getAllAlternateNamesOfCountry(countryCode);
      const geonamesData = getAllGeoDataNamesOfCountry(countryCode);

      const foundAlternateNames = alternateNamesData.filter((data) => {
        if (data.nameOrLink === name) {
          return true;
        }
        if (data.codeOrLink === 'link' && data.nameOrLink.endsWith(`/${name}`)) {
          return true;
        }

        return false;
      });

      if (foundAlternateNames.length === 0) {
        // eslint-disable-next-line no-console
        console.log(`No alternate name found for ${name}`);
        return [null, null];
      }

      if (foundAlternateNames.length > 1) {
        // eslint-disable-next-line no-console
        console.log(`Multiple alternate names found for ${name}`);
        return [null, null];
      }

      const foundAlternateName = foundAlternateNames[0];
      const geonameData = geonamesData.find(
        (data) => data.geonameId === foundAlternateName.geonameId,
      );

      if (!geonameData) {
        // eslint-disable-next-line no-console
        console.log(`No geoname data found for ${name}`);
        return [null, null];
      }

      const namesAndLinks = getNamesAndLinksByGeonameIdAndCountry(
        geonameData.geonameId,
        countryCode,
      );

      if (namesAndLinks && !namesAndLinks.default) {
        namesAndLinks.default = geonameData.asciiName;
      }

      return [geonameData, namesAndLinks];
    },
  };
}

export function addOrUpdateGeoJsonDataOf(name: string): {
  inCountry: (countryCode: 'IR') => void;
} {
  return {
    inCountry(countryCode: 'IR') {
      const [foundData, foundNames] = tryExtractGeodataOf(name).inCountry(countryCode);
      if (!foundData) {
        // eslint-disable-next-line no-console
        console.log(`No geo data found for ${name}`);
        return;
      }

      const singleFeature: GeoDataFeature = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [foundData.longitude, foundData.latitude],
        },
        properties: {
          name: {
            default: foundData.asciiName,
          },
        },
      };

      if (foundNames) {
        singleFeature.properties.name = {
          ...singleFeature.properties.name,
          ...foundNames,
        };
      }

      const singlePlace: GeoJsonData = {
        type: 'FeatureCollection',
        features: [singleFeature],
      };

      // TODO: inject existing options to the file
      const geojsonFilename = `${filenameFromPlacename(foundData.asciiName)}.geojson`;
      writeFileSync(path.join('src', 'gis', geojsonFilename), JSON.stringify(singlePlace, null, 2));
    },
  };
}

addOrUpdateGeoJsonDataOf('Amol').inCountry('IR');
