import { MarkdownNode } from '../../../graphql';
import React from 'react';
import { Link } from 'gatsby';

export type EpisodeCardProps = MarkdownNode & { index: number };
export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  id,
  excerpt,
  fields,
  frontmatter,
  headings,
  index,
}) => {
  const firstHeading = headings[0].value;
  const sanitizedExcerpt = excerpt.replace(firstHeading, '');

  const slug = React.useMemo(() => {
    if (frontmatter && frontmatter.reign_slug && frontmatter.episode_slug) {
      return `/${frontmatter.lang}/${frontmatter.reign_slug}/${frontmatter.episode_slug}`;
    }
    return fields.slug;
  }, [fields.slug, frontmatter]);

  return (
    <Link key={id} className="nav-link" to={slug} aria-label={firstHeading}>
      <div className="card text-center bg-dark text-white border-secondary">
        <div className="card-header pb-0">
          <h5 className="card-title text-truncate">{firstHeading}</h5>
        </div>
        <div className="card-body card-text">
          <blockquote className="blockquote mb-0">
            <p className="text-secondary text-truncate fs-6">{sanitizedExcerpt}</p>
          </blockquote>
        </div>
        <div className="card-footer text-muted">
          <small>{`épisode n°${index + 1}`}</small>
        </div>
      </div>
    </Link>
  );
};
