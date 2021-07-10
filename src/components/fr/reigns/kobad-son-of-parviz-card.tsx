import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const KobadSonOfParvizCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/fr/44-kobad-fils-de-parviz/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-kobad-fils-de-parviz"
      reignTitle="Règne de Kobad fils de Khosrou Parviz"
      cardTitle="Kobad fils de Khosrou Parviz"
      cardBody="Son règne dura 7 mois."
    />
  );
};
