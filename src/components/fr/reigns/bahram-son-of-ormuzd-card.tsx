import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const BahramSonOfOrmuzdCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/fr/25-bahram-fils-d-ormuzd/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      lang="fr"
      reignSlug="regne-de-bahram-fils-d-ormuzd"
      reignTitle="Règne de Bahram fils d'Ormuzd"
      cardTitle="Bahram"
      cardBody="Son règne dura 3 ans."
    />
  );
};
