import { EpisodeCard } from '.';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const SchapourSonOfSchapourEpisodes: React.FC = () => {
  // prettier-ignore
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___order, order: ASC}, filter: {fileAbsolutePath: {glob: "**/markdown/fr/32-schapour-fils-de-schapour/**/*.md"}, frontmatter: {order: {}}}
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
