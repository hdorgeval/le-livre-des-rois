import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const ArdeschirLeBonCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/fr/31-ardeschir-le-bon/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);
  return (
    <ReignCard
      data={data}
      lang="fr"
      reignSlug="regne-d-ardeschir-le-bon"
      reignTitle="Règne d'Ardeschir Le Bon"
      cardTitle="Ardeschir Le Bon"
      cardBody="Son règne dura 12 ans."
    />
  );
};
