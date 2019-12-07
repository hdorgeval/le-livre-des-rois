import { MarkdownNode, AllMarkdownRemarkResponse, emptyHtmlAst } from '../../../graphql';
import { EpisodeLink } from '../..';
import { toHours } from '../../../tools';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const GuschtaspReignLink: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 100
        filter: { fileAbsolutePath: { glob: "**/markdown/02-guschtasp/*.md" } }
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

  const guschtaspNode: MarkdownNode = {
    id: 'guschtasp',
    excerpt: 'Règne de Guschtasp Son règne dura 100 ans',
    frontmatter: {
      tags: [],
      date: '',
      image: 'https://source.unsplash.com/PvDFxBPc6Zw',
      landscape: 'https://source.unsplash.com/PvDFxBPc6Zw',
    },
    headings: [{ depth: 1, value: 'Règne de Guschtasp' }],
    html: '<h1>Règne de Guschtasp</h1>Son règne dura 100 ans.',
    htmlAst: emptyHtmlAst,
    fields: {
      slug: '/regne-de-guschtasp/',
    },
    timeToRead: toHours(timeToRead) * 2,
    wordCount: { words: 0, paragraphs: 0, sentences: 0 },
  };
  return (
    <EpisodeLink
      {...guschtaspNode}
      key="guschtasp"
      totalCount={totalNumberOfEpsiodes}
      timeUnit="hour"
    />
  );
};
