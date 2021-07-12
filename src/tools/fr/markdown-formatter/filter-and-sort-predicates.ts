import { readAllLinesInFile } from '../../common/fs';
import { writeFileSync } from 'fs';
import path from 'path';

const allPredicates = readAllLinesInFile(path.join(__dirname, 'predicates.txt'));
const artifacts = new Set(allPredicates);
const allEntries = Array.from(artifacts);
const allSortedEntries = allEntries.sort((a, b) => b.length - a.length);

writeFileSync(path.join(__dirname, 'predicates-filtered.txt'), allSortedEntries.join('\n'));
