import { AllMarkdownRemarkResponse } from '../../graphql';
import { Article } from '../article/article';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const FirdousiArticles: React.FC = () => {
  // prettier-ignore
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___order, order: ASC}, filter: {fileAbsolutePath: {glob: "**/firdousi/*"}, frontmatter: {order: {}}}
      ) {
        edges {
          node {
            excerpt(truncate: true, pruneLength: 200)
            frontmatter {
              title
              image
              keywords
              date(formatString: "MMMM YYYY", locale: "fr")
            }
            id
            timeToRead
            headings {
              value
              depth
            }
            wordCount {
              words
              paragraphs
              sentences
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.edges
        .map((nodeWrapper) => nodeWrapper.node)
        .map((node) => (
          <Article {...node} key={node.id} />
        ))}
      ;
    </>
  );
};
