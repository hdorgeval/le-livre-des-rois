import { readAllLinesInFile } from '../fs';
import { writeFileSync } from 'fs';
import path from 'path';

interface FeatureCode {
  [key: string]: string;
}

export function featureCodesToJson(): void {
  const rawData = readAllLinesInFile(path.join(__dirname, 'feature-codes.en.txt'));

  const featureCode: FeatureCode = {};
  rawData.forEach((line) => {
    const [featureCodeName, featureCodeValue] = line.split('\t');
    featureCode[featureCodeName] = featureCodeValue;
  });

  writeFileSync(
    path.join('src', 'geonames', 'feature-codes.json'),
    JSON.stringify(featureCode, null, 2),
  );
}

featureCodesToJson();
