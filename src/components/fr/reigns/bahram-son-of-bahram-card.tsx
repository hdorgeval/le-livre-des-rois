import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const BahramSonOfBahramCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/fr/26-bahram-fils-de-bahram/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      lang="fr"
      reignSlug="regne-de-bahram-fils-de-bahram"
      reignTitle="Règne de Bahram fils de Bahram"
      cardTitle="Bahram fils de Bahram"
      cardBody="Son règne dura 19 ans."
    />
  );
};
