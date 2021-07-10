import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const KhosrouParvizCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/fr/43-khosrou-parviz/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-khosrou-parviz"
      reignTitle="Règne de Khosrou Parviz"
      cardTitle="Khosrou Parviz"
      cardBody="Son règne dura 38 ans."
    />
  );
};
