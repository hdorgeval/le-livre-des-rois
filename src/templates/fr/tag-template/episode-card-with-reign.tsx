import { MarkdownNode } from '../../../graphql';
import React from 'react';
import { Link } from 'gatsby';

export type EpisodeCardProps = MarkdownNode & { index: number };
export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  id,
  excerpt,
  fields,
  headings,
  index,
  frontmatter,
}) => {
  const firstHeading = headings[0].value;
  const sanitizedExcerpt = excerpt.replace(firstHeading, '');

  return (
    <Link key={id} className="nav-link mb-4 p-0" to={fields.slug} aria-label={firstHeading}>
      <div className="card text-center bg-dark text-white border-secondary">
        <div className="card-header pb-0">
          <h3 className="card-title text-truncate fs-5">{firstHeading}</h3>
        </div>
        <div className="card-body card-text">
          <blockquote className="blockquote mb-0">
            <p className="text-secondary text-truncate fs-6">{sanitizedExcerpt}</p>
          </blockquote>
        </div>
        <div className="card-footer text-muted">
          <small>{` ${frontmatter.reign} / épisode n°${index + 1}`}</small>
        </div>
      </div>
    </Link>
  );
};
