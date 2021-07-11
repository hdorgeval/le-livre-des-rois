import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const AschkanidesCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/fr/21-aschkanides/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);
  return (
    <ReignCard
      data={data}
      lang="fr"
      reignSlug="regne-des-aschkanides"
      reignTitle="Dynastie des Aschkanides"
      cardTitle="Aschkanides"
      cardBody="Leur règne a été de 120 ans."
    />
  );
};
