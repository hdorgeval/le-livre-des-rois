import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const BahramSonOfSchapourCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/33-bahram-fils-de-schapour/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-bahram-fils-de-schapour"
      reignTitle="Règne de Bahram fils de Schapour"
      cardTitle="Bahram fils de Schapour"
      cardBody="Son règne dura 14 ans."
    />
  );
};
