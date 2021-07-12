import { setTagsIn } from '.';

const filepath = process.env['CURRENT_MD_FILEPATH'] || '';
setTagsIn(filepath);
