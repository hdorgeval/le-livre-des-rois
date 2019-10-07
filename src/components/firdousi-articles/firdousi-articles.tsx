import { AllMarkdownRemarkResponse } from '../../graphql';
import { EpisodeLink } from '../episode-link/episode-link';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const FirdousiArticles: React.FC = () => {
  // prettier-ignore
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___order, order: ASC}, filter: {fileAbsolutePath: {glob: "**/markdown/firdousi/*"}, frontmatter: {order: {}}}
      ) {
        edges {
          node {
            excerpt(truncate: true, pruneLength: 120)
            frontmatter {
              date
              image
              tags
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
            fields {
              slug
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
          <EpisodeLink {...node} key={node.id} />
        ))}
    </>
  );
};
