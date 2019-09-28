import { MarkdownNode } from '../../graphql';
import { Article } from '../article/article';
import React from 'react';

export const Episodes: React.FC = () => {
  const lohraspNode: MarkdownNode = {
    id: 'lohrasp',
    excerpt: 'Règne de Lohrasp Son règne dura 120 ans',
    frontmatter: {
      tags: [],
      date: '',
      image: 'https://source.unsplash.com/pKMFZmVHsNk',
      landscape: 'https://source.unsplash.com/j1HU-Oll7KI',
    },
    headings: [{ depth: 1, value: 'Règne de Lohrasp' }],
    html: '<h1>Règne de Lohrasp</h1>Son règne dura 120 ans.',
    fields: {
      slug: '/regne-de-lohrasp/',
    },
    timeToRead: 10,
    wordCount: { words: 0, paragraphs: 0, sentences: 0 },
  };
  return <Article {...lohraspNode} key="lohrasp" />;
};
