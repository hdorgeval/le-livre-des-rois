import styles from './epidode-link.module.scss';
import { MarkdownNode } from '../../graphql';
import React from 'react';
import { Link } from 'gatsby';

export type EpisodeLinkProps = MarkdownNode & { key: string } & {
  totalCount?: number;
  timeUnit: 'hour' | 'minute';
  workInProgress?: boolean;
};
export const EpisodeLink: React.FC<EpisodeLinkProps> = ({
  excerpt,
  fields,
  frontmatter,
  headings,
  timeToRead,
  totalCount,
  timeUnit,
  workInProgress,
}) => {
  const firstHeading = headings[0].value;
  const sanitizedExcerpt = excerpt.replace(firstHeading, '');

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
            {workInProgress && <div className={styles.wipRibbon} data-ribbon="in progress"></div>}
          </div>
          <div>{sanitizedExcerpt}</div>
        </div>
      </article>
    </Link>
  );
};
