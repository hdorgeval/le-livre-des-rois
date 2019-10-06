import { MarkdownNode, AllMarkdownRemarkResponse, emptyHtmlAst } from '../../../graphql';
import { Article } from '../..';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const Lohrasp: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(limit: 10, filter: { fileAbsolutePath: { glob: "**/lohrasp/*.md" } }) {
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
    timeToRead: timeToRead,
    wordCount: { words: 0, paragraphs: 0, sentences: 0 },
  };
  return <Article {...lohraspNode} key="lohrasp" totalCount={totalNumberOfEpsiodes} />;
};
