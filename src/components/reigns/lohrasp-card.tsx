import { MarkdownNode, AllMarkdownRemarkResponse, emptyHtmlAst } from '../../graphql';
import { toHours } from '../../tools';
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

export const LohraspCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 100
        filter: { fileAbsolutePath: { glob: "**/markdown/05-lohrasp/**/*.md" } }
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
      order: '2',
    },
    headings: [{ depth: 1, value: 'Règne de Lohrasp' }],
    html: '<h1>Règne de Lohrasp</h1>Son règne dura 120 ans.',
    htmlAst: emptyHtmlAst,
    fields: {
      slug: '/regne-de-lohrasp/',
    },
    timeToRead: toHours(timeToRead * 2),
    wordCount: { words: 0, paragraphs: 0, sentences: 0 },
  };
  return (
    <Link className="nav-link" to={lohraspNode.fields.slug} aria-label="Règne de Lohrasp">
      <div className="card text-center bg-dark text-white border-secondary">
        <div className="card-header pb-0">
          <h5 className="card-title">Lohrasp</h5>
        </div>
        <div className="card-body card-text">
          <blockquote className="blockquote mb-0">
            <p className="text-secondary">Son règne dura 120 ans.</p>
          </blockquote>
        </div>
        <div className="card-footer text-muted">
          <span>{`${totalNumberOfEpsiodes} épisode${totalNumberOfEpsiodes > 1 ? 's' : ''}`}</span>
        </div>
      </div>
    </Link>
  );
};
