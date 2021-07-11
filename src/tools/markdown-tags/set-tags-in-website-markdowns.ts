import { setTagsOfMarkdownFilesIn } from './set-tags-in-markdown';
import path from 'path';

setTagsOfMarkdownFilesIn(path.join(process.cwd(), 'src', 'markdown', 'fr'));
