import { readAllLinesInFile } from '../fs';
import path from 'path';

export interface AlternateNameData {
  alternateNameId: string;
  geonameId: string;
  codeOrLink: string;
  nameOrLink: string;
}

export interface GeoNamesAndLinks {
  [key: string]: string | { [key: string]: string } | undefined;
  default: string;
  fa?: string;
  ru?: string;
  link?: {
    wikipedia?: string;
  };
}

/**
 * Get all alternate names from the alternate names file.
 * Please read the README.md in docs/geonames.org/alternate-names folder before using that function.
 * @export
 * @param {'IR'} name
 * @returns {AlternateNameData[]}
 */
export function getAllAlternateNamesOfCountry(name: 'IR'): AlternateNameData[] {
  const alternateNamesRawData = readAllLinesInFile(
    path.join(process.cwd(), 'docs', 'geonames.org', 'alternate-names', `${name}.txt`),
  );

  const result = alternateNamesRawData
    .map((line) => line.split('\t'))
    .map((colums) => {
      const [alternateNameId, geonameId, codeOrLink, nameOrLink] = colums;
      return {
        alternateNameId,
        geonameId,
        codeOrLink,
        nameOrLink,
      };
    });

  return result;
}
export function getNamesAndLinksByGeonameIdAndCountry(
  geonameId: string,
  countryCode: 'IR',
): GeoNamesAndLinks {
  const allNamesAndLinks = getAllAlternateNamesOfCountry(countryCode);
  const result: GeoNamesAndLinks = {
    default: '',
  };

  allNamesAndLinks
    .filter((data) => data.geonameId === geonameId)
    .forEach((data) => {
      const codeOrLink = data.codeOrLink;
      if (codeOrLink === 'link') {
        const link = data.nameOrLink;
        result.default = link.split('/').pop() || '';
        result.link = {
          wikipedia: link,
        };
        return;
      }

      if (codeOrLink.length === 2) {
        result[codeOrLink] = result[codeOrLink]
          ? (result[codeOrLink] += `, ${data.nameOrLink}`)
          : data.nameOrLink;
        return;
      }
    });

  return result;
}
