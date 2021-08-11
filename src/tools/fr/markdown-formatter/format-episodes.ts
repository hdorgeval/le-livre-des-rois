import { formatMarkdown } from '.';
import { getDirectoriesRecursivelyIn, getFilesInDirectory } from '../../common/fs';
import { isMarkdownFileInDraftMode } from '../markdown-frontmatter';
import path from 'path';
import { PathLike } from 'fs';

function formatAllEpisodesIn(rootDirectory: PathLike) {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());

  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];

      if (isMarkdownFileInDraftMode(file)) {
        // eslint-disable-next-line no-console
        console.log(`formatting '${file}'`);
        formatMarkdown(file);
      }
    }
  }
}

formatAllEpisodesIn(path.join(process.cwd(), 'src', 'markdown', 'fr'));
