import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ReignCard } from './reign-card';

export const ThahmourasCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/03-thamouras/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-thahmouras"
      reignTitle="Règne de Thahmouras"
      cardTitle="Thahmouras"
      cardBody="Son règne dura 30 ans."
    />
  );
};
