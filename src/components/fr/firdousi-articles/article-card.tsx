import { MarkdownNode } from '../../../graphql';
import React from 'react';
import { Link } from 'gatsby';

export type ArticleCardProps = MarkdownNode;
export const ArticleCard: React.FC<ArticleCardProps> = ({ id, excerpt, fields, headings }) => {
  const firstHeading = headings[0].value;
  const sanitizedExcerpt = excerpt.replace(firstHeading, '');

  return (
    <Link key={id} className="nav-link" to={fields.slug} aria-label={firstHeading}>
      <div className="card text-center bg-dark text-white border-secondary">
        <div className="card-header ">
          <h5 className="card-title text-truncate">{firstHeading}</h5>
        </div>
        <div className="card-body card-text">
          <blockquote className="blockquote mb-0">
            <p className="text-secondary text-truncate">{sanitizedExcerpt}</p>
          </blockquote>
        </div>
      </div>
    </Link>
  );
};
