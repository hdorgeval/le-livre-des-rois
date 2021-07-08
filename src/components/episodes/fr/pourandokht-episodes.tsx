import { EpisodeCard } from '.';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const PourandokhtEpisodes: React.FC = () => {
  // prettier-ignore
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___order, order: ASC}, filter: {fileAbsolutePath: {glob: "**/markdown/47-pourandokht/**/*.md"}, frontmatter: {order: {}}}
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
