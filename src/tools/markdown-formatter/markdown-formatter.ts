import { formatMarkdown } from './format';

const filepath = process.env['CURRENT_MD_FILEPATH'] || '';
formatMarkdown(filepath);
