import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const GuschtaspCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 100
        filter: { fileAbsolutePath: { glob: "**/markdown/15-guschtasp/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-guschtasp"
      reignTitle="Règne de Guschtasp"
      cardTitle="Guschtasp"
      cardBody="Son règne dura 120 ans."
    />
  );
};
