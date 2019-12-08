import { MarkdownNode, AllMarkdownRemarkResponse, emptyHtmlAst } from '../../../graphql';
import { EpisodeLink } from '../..';
import { toHours, toMinutes } from '../../../tools';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const KhosrouReignLink: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 100
        filter: { fileAbsolutePath: { glob: "**/markdown/01-khosrou/**/*.md" } }
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

  const khosrouNode: MarkdownNode = {
    id: 'khosrou',
    excerpt: 'Règne de Keï Khosrou Son règne dura 60 ans',
    frontmatter: {
      tags: [],
      date: '',
      image: 'https://source.unsplash.com/JpbtAb-f3JA',
      landscape: 'https://source.unsplash.com/j1HU-Oll7KI',
    },
    headings: [{ depth: 1, value: 'Règne de Keï Khosrou' }],
    html: '<h1>Règne de Keï Koshrou</h1>Son règne dura 60 ans.',
    htmlAst: emptyHtmlAst,
    fields: {
      slug: '/regne-de-khosrou/',
    },
    timeToRead: toMinutes(timeToRead),
    wordCount: { words: 0, paragraphs: 0, sentences: 0 },
  };
  return (
    <EpisodeLink
      {...khosrouNode}
      key="khosrou"
      totalCount={totalNumberOfEpsiodes}
      timeUnit="minute"
    />
  );
};
