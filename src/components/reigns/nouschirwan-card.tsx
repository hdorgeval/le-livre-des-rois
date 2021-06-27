import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const NouschirwanCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/41-nouschirwan/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-nouschirwan"
      reignTitle="Règne de Kesra Nouschirwan"
      cardTitle="Kesra Nouschirwan"
      cardBody="Son règne dura 48 ans."
    />
  );
};
