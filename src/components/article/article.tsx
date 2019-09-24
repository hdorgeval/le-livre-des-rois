import styles from './article.module.scss';
import { MarkdownNode } from '../../graphql';
import React from 'react';
import { Link } from 'gatsby';

export type ArticleProps = MarkdownNode & { key: string };
export const Article: React.FC<ArticleProps> = ({
  frontmatter,
  excerpt,
  headings,
  timeToRead,
  fields,
}) => {
  const firstHeading = headings[0].value;
  const sanitizedExcerpt = excerpt.replace(firstHeading, '');

  return (
    <Link to={fields.slug}>
      <article className={styles.articleBox}>
        <div className={styles.left}>
          <img src={`${frontmatter.image}/150x150`} alt={firstHeading} />
        </div>
        <div className={styles.right}>
          <h3>{firstHeading}</h3>
          <div className={styles.timeToRead}>{`durée de lecture: ${timeToRead} mn`}</div>
          <div>{sanitizedExcerpt}</div>
        </div>
      </article>
    </Link>
  );
};
