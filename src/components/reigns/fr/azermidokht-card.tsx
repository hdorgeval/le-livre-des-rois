import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const AzermidokhtCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/48-azermidokht/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);
  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-azermidokht"
      reignTitle="Règne de Azermidokht"
      cardTitle="Azermidokht"
      cardBody="Son règne dura 4 mois."
    />
  );
};
