import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ReignCard } from './reign-card';

export const LohraspCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 100
        filter: { fileAbsolutePath: { glob: "**/markdown/14-lohrasp/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-lohrasp"
      reignTitle="Règne de Lohrasp"
      cardTitle="Lohrasp"
      cardBody="Son règne dura 120 ans."
    />
  );
};
