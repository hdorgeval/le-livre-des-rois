import { setMarkdownFilenameWithOrderAndTitleInDirectory } from '.';

const directory = process.env['CURRENT_MD_FOLDER'] || '';
// eslint-disable-next-line no-console
console.log(`Renaming markdow files in current directory: '${directory}' ... `);
setMarkdownFilenameWithOrderAndTitleInDirectory(directory);
