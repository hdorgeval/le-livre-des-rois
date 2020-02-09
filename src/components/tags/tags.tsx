import styles from './tags.module.scss';
import { Tag } from './tag/tag';
import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Tags: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  return (
    <div className={styles.content}>
      {data.allMarkdownRemark.group
        .sort((a, b) =>
          a.fieldValue.replace('â', 'a').toLowerCase() >=
          b.fieldValue.replace('â', 'a').toLowerCase()
            ? 1
            : -1,
        )
        .map((group, index) => {
          return (
            <Tag
              index={index}
              key={group.fieldValue}
              size={group.totalCount}
              text={group.fieldValue}
            />
          );
        })}
    </div>
  );
};
