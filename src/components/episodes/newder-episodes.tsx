import { EpisodeCard } from '.';
import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const NewderEpisodes: React.FC = () => {
  // prettier-ignore
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___order, order: ASC}, filter: {fileAbsolutePath: {glob: "**/markdown/08-newder/**/*.md"}, frontmatter: {order: {}}}
      ) {
        ...Episodes
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.edges
        .map((nodeWrapper) => nodeWrapper.node)
        .map((node, index) => {
          return <EpisodeCard key={node.id} {...node} index={index} />;
        })}
    </>
  );
};
