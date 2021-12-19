import { updateFrontmatterFieldLastUpdate } from '../../common/markdown-frontmatter';
import path from 'path';

updateFrontmatterFieldLastUpdate(path.join(process.cwd(), 'src', 'markdown', 'fr'));
