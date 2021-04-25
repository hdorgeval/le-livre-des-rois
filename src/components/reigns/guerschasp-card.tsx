import { MarkdownNode, AllMarkdownRemarkResponse, emptyHtmlAst } from '../../graphql';
import { toMinutes } from '../../tools';
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

export const GuerschaspCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/01-guerschasp/**/*.md" } }
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

  const guerschaspNode: MarkdownNode = {
    id: 'kaous',
    excerpt: 'Règne de Guerschasp Son règne dura 5 ans',
    frontmatter: {
      tags: [],
      date: '',
      image: 'https://source.unsplash.com/JpbtAb-f3JA',
      landscape: 'https://source.unsplash.com/j1HU-Oll7KI',
      order: '1',
    },
    headings: [{ depth: 1, value: 'Règne de Guerschasp' }],
    html: '<h1>Règne de Guerschasp</h1>Son règne dura 5 ans.',
    htmlAst: emptyHtmlAst,
    fields: {
      slug: '/regne-de-guerschasp/',
    },
    timeToRead: toMinutes(timeToRead),
    wordCount: { words: 0, paragraphs: 0, sentences: 0 },
  };

  return (
    <Link className="nav-link" to={guerschaspNode.fields.slug} aria-label="Règne de Guerschasp">
      <div className="card text-center bg-dark text-white border-secondary">
        <div className="card-header pb-0">
          <h5 className="card-title">Guerschasp</h5>
        </div>
        <div className="card-body card-text">
          <blockquote className="blockquote mb-0">
            <p className="text-secondary">Son règne dura 5 ans.</p>
          </blockquote>
        </div>
        <div className="card-footer text-muted">
          <span>{`${totalNumberOfEpsiodes} épisode${totalNumberOfEpsiodes > 1 ? 's' : ''}`}</span>
        </div>
      </div>
    </Link>
  );
};
