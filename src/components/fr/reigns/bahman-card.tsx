import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const BahmanCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/fr/16-bahman/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);
  return (
    <ReignCard
      data={data}
      lang="fr"
      reignSlug="regne-de-bahman"
      reignTitle="Règne de Bahman"
      cardTitle="Bahman"
      cardBody="Son règne dura 99 ans."
    />
  );
};
