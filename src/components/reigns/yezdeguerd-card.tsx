import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ReignCard } from './reign-card';

export const YezdeguerdCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/34-yezdeguerd/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-yezdeguerd"
      reignTitle="Règne de Yezdeguerd le méchant"
      cardTitle="Yezdeguerd le méchant"
      cardBody="Son règne dura 21 ans."
    />
  );
};
