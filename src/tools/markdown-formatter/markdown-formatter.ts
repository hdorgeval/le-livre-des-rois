import { formatContent } from './format';
import { readFileSync, writeFileSync } from 'fs';

const filepath = process.env['CURRENT_MD_FILEPATH'] || '';

const content = readFileSync(filepath).toString();
const parts = content.split('#');
const markdown = parts[1];

const newMarkdown = formatContent(markdown);
const newContent = `${parts[0]}#${newMarkdown}`;
writeFileSync(filepath, newContent);
