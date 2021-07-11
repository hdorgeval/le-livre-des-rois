import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const BahramBahramianCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/fr/27-bahram-bahramian/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      lang="fr"
      reignSlug="regne-de-bahram-bahramian"
      reignTitle="Règne de Bahram Bahramian"
      cardTitle="Bahram Bahramian"
      cardBody="Son règne dura 4 mois."
    />
  );
};
