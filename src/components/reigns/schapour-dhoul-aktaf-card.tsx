import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ReignCard } from './reign-card';

export const SchapourDhoulAktafCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/30-schapour-dhoul-aktaf/**/*.md" } }
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
