import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const KobadSonOfPirouzCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/40-kobad-fils-de-pirouz/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-kobad-fils-de-pirouz"
      reignTitle="Règne de Kobad fils de Pirouz"
      cardTitle="Kobad fils de Pirouz"
      cardBody="Son règne dura 40 ans."
    />
  );
};
