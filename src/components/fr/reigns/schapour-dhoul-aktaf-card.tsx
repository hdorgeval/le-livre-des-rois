import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const SchapourDhoulAktafCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/fr/30-schapour-dhoul-aktaf/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-schapour-dhoul-aktaf"
      reignTitle="Règne de Schapour Dhou'l Aktaf"
      cardTitle="Schapour Dhou'l Aktaf"
      cardBody="Son règne dura 72 ans."
    />
  );
};
