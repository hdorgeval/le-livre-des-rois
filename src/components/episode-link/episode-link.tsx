import styles from './epidode-link.module.scss';
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
  timeToRead,
  timeUnit,
  totalCount,
  workInProgress,
}) => {
  const firstHeading = headings[0].value;
  const sanitizedExcerpt = excerpt.replace(firstHeading, '');
  const progress = Math.floor((Number(totalCount) / Number(overallCount)) * 100);

  return (
    <Link to={fields.slug} aria-label={firstHeading}>
      <article className={styles.container}>
        <div className={styles.left}>
          <img src={`${frontmatter.image}/150x150`} alt={firstHeading} />
        </div>
        <div className={styles.right}>
          <h3>{firstHeading}</h3>
          <div className={styles.details}>
            <span>{`durée de lecture: ${timeToRead} ${timeUnit === 'hour' ? 'heure' : 'minute'}${
              timeToRead > 1 ? 's' : ''
            }`}</span>
            {totalCount && <span>{`, ${totalCount} épisode${totalCount > 1 ? 's' : ''}`}</span>}
            {workInProgress && (
              <div
                className={styles.wipRibbon}
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
