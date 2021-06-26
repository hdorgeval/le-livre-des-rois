import { EpisodeCard } from '.';
import { AllMarkdownRemarkResponse } from '../../graphql';
import { toMinutes } from '../../tools';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const NersiEpisodes: React.FC = () => {
  // prettier-ignore
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___order, order: ASC}, filter: {fileAbsolutePath: {glob: "**/markdown/28-nersi/**/*.md"}, frontmatter: {order: {}}}
      ) {
        ...Episodes
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
        .map((node, index) => {
          return <EpisodeCard key={node.id} {...node} index={index} />;
        })}
    </>
  );
};
