import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const SchapourSonOfSchapourCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/fr/32-schapour-fils-de-schapour/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-schapour-fils-de-schapour"
      reignTitle="Règne de Schapour fils de Schapour"
      cardTitle="Schapour fils de Schapour"
      cardBody="Son règne dura 5 ans."
    />
  );
};
