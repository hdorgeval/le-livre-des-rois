import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const ArdeschirBabekanCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/22-ardeschir-babekan/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);
  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-ardeschir-babekan"
      reignTitle="Règne de Ardeschir Babekan"
      cardTitle="Ardeschir Babekan"
      cardBody="Son règne dura 40 ans."
    />
  );
};
