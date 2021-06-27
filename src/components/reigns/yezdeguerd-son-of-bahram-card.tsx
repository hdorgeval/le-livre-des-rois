import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ReignCard } from './reign-card';

export const YezdeguerdSonOfBahramCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/36-yezdeguerd-fils-de-bahram/**/*.md" } }
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
