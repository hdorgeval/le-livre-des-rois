import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const YezdeguerdSonOfBahramCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/fr/36-yezdeguerd-fils-de-bahram/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-yezdeguerd-fils-de-bahram"
      reignTitle="Règne de Yezdeguerd fils de Bahram Gour"
      cardTitle="Yezdeguerd fils de Bahram Gour"
      cardBody="Son règne dura 18 ans."
    />
  );
};
