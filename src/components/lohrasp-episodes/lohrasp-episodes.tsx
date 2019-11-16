import { AllMarkdownRemarkResponse } from '../../graphql';
import { EpisodeLink } from '../episode-link/episode-link';
import { toMinutes } from '../../tools';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const LohraspEpisodes: React.FC = () => {
  // prettier-ignore
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___order, order: ASC}, filter: {fileAbsolutePath: {glob: "**/markdown/lohrasp/**/*.md"}, frontmatter: {order: {}}}
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
        .map((node) => {
          return {
            ...node,
            timeToRead: toMinutes(node.timeToRead * 2),
          };
        })
        .map((node) => (
          <EpisodeLink {...node} key={node.id} timeUnit="minute" />
        ))}
    </>
  );
};
