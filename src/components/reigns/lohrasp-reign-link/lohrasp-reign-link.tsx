import { MarkdownNode, AllMarkdownRemarkResponse, emptyHtmlAst } from '../../../graphql';
import { EpisodeLink } from '../..';
import { toHours } from '../../../tools';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const LohraspReignLink: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 100
        filter: { fileAbsolutePath: { glob: "**/markdown/01-lohrasp/**/*.md" } }
      ) {
        totalCount
        edges {
          node {
            id
            timeToRead
          }
        }
      }
    }
  `);

  const totalNumberOfEpsiodes = data.allMarkdownRemark.totalCount;
  const timeToRead = data.allMarkdownRemark.edges
    .map((edge) => edge.node)
    .map((node) => node.timeToRead)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

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
    htmlAst: emptyHtmlAst,
    fields: {
      slug: '/regne-de-lohrasp/',
    },
    timeToRead: toHours(timeToRead) * 2,
    wordCount: { words: 0, paragraphs: 0, sentences: 0 },
  };
  return (
    <EpisodeLink
      {...lohraspNode}
      key="lohrasp"
      totalCount={totalNumberOfEpsiodes}
      timeUnit="hour"
    />
  );
};
