import { MarkdownNode } from '../../graphql';
import React from 'react';
import { Link } from 'gatsby';

export type EpisodeLinkProps = MarkdownNode & { key: string } & {
  overallCount?: number;
  timeUnit: 'hour' | 'minute';
  totalCount?: number;
  workInProgress?: boolean;
};
export const EpisodeLink: React.FC<EpisodeLinkProps> = ({
  excerpt,
  fields,
  frontmatter,
  headings,
  overallCount,
  totalCount,
  workInProgress,
}) => {
  const firstHeading = headings[0].value;
  const sanitizedExcerpt = excerpt.replace(firstHeading, '');
  const progress = Math.floor((Number(totalCount) / Number(overallCount)) * 100);

  return (
    <Link to={fields.slug} aria-label={firstHeading}>
      <article>
        <div>
          <img src={`${frontmatter.image}/150x150`} alt={firstHeading} />
        </div>
        <div>
          <h3>{firstHeading}</h3>
          <div>
            {totalCount && <span>{`${totalCount} épisode${totalCount > 1 ? 's' : ''}`}</span>}
            {workInProgress && (
              <div
                data-ribbon={overallCount ? 'in progress (' + progress + '%)' : 'in progress'}
              ></div>
            )}
          </div>
          <div>{sanitizedExcerpt}</div>
        </div>
      </article>
    </Link>
  );
};
