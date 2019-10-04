import styles from './article.module.scss';
import { MarkdownNode } from '../../graphql';
import React from 'react';
import { Link } from 'gatsby';

export type ArticleProps = MarkdownNode & { key: string } & { totalCount?: number };
export const Article: React.FC<ArticleProps> = ({
  excerpt,
  fields,
  frontmatter,
  headings,
  timeToRead,
  totalCount,
}) => {
  const firstHeading = headings[0].value;
  const sanitizedExcerpt = excerpt.replace(firstHeading, '');

  return (
    <Link to={fields.slug} aria-label={firstHeading}>
      <article className={styles.articleBox}>
        <div className={styles.left}>
          <img src={`${frontmatter.image}/150x150`} alt={firstHeading} />
        </div>
        <div className={styles.right}>
          <h3>{firstHeading}</h3>
          <div className={styles.details}>
            <span>{`durée de lecture: ${timeToRead * 2} mn`}</span>
            {totalCount && <span>{`, ${totalCount} episode${totalCount > 1 ? 's' : ''}`}</span>}
          </div>
          <div>{sanitizedExcerpt}</div>
        </div>
      </article>
    </Link>
  );
};
