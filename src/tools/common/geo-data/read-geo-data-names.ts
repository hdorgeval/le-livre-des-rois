import { readAllLinesInFile } from '../fs';
import path from 'path';

export type CountryCode = 'IR' | 'SY';

export interface GeoNameData {
  geonameId: string;
  name: string;
  asciiName: string;
  alternateNames: string[];
  convenienceAttribute: string;
  latitude: number;
  longitude: number;
  featureClass: string;
  featureCode: string;
  countryCode: string;
  cc2: string;
  admin1Code: string;
  admin2Code: string;
  admin3Code: string;
  admin4Code: string;
  population: number;
  elevationInMeters: number;
  dem: number;
}

function sanitizedAlternateNamesAndConvenienceAttribute(line: string): string {
  const [geonameId, name, asciiName, alternateNames, convenienceAttribute, ...remainingColumns] =
    line.split('\t');

  const latitude = Number(convenienceAttribute);

  if (isNaN(latitude)) {
    return line;
  }

  const sanitizedColumns = [
    geonameId,
    name,
    asciiName,
    alternateNames,
    '',
    latitude,
    ...remainingColumns,
  ];
  return sanitizedColumns.join('\t');
}

/**
 * Get all geodata names from the geonames.org file.
 * Please read the README.md in docs/geonames.org folder before using that function.
 * @export
 * @param {CountryCode} name
 * @returns {AlternateNameData[]}
 */
export function getAllGeoDataNamesOfCountry(name: CountryCode): GeoNameData[] {
  const rawData = readAllLinesInFile(
    path.join(process.cwd(), 'docs', 'geonames.org', `${name}.txt`),
  );

  const result = rawData
    .map(sanitizedAlternateNamesAndConvenienceAttribute)
    .map((line) => line.split('\t'))
    .map((colums) => {
      const [
        geonameId,
        name,
        asciiName,
        alternateNames,
        convenienceAttribute,
        latitude,
        longitude,
        featureClass,
        featureCode,
        countryCode,
        cc2,
        admin1Code,
        admin2Code,
        admin3Code,
        admin4Code,
        population,
        elevationInMeters,
        dem,
      ] = colums;

      return {
        geonameId,
        name,
        asciiName,
        alternateNames,
        convenienceAttribute,
        latitude,
        longitude,
        featureClass,
        featureCode,
        countryCode,
        cc2,
        admin1Code,
        admin2Code,
        admin3Code,
        admin4Code,
        population,
        elevationInMeters,
        dem,
      };
    })
    .map((data) => {
      return {
        geonameId: data.geonameId,
        name: data.name,
        asciiName: data.asciiName,
        alternateNames: data.alternateNames?.split(',') || [],
        convenienceAttribute: data.convenienceAttribute,
        latitude: Number(data.latitude),
        longitude: Number(data.longitude),
        featureClass: data.featureClass,
        featureCode: data.featureCode,
        countryCode: data.countryCode,
        cc2: data.cc2,
        admin1Code: data.admin1Code,
        admin2Code: data.admin2Code,
        admin3Code: data.admin3Code,
        admin4Code: data.admin4Code,
        population: Number(data.population),
        elevationInMeters: Number(data.elevationInMeters),
        dem: Number(data.dem),
      };
    });

  return result;
}
