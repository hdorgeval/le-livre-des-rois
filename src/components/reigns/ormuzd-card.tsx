import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ReignCard } from './reign-card';

export const OrmuzdCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/24-ormuzd/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-d-ormuzd"
      reignTitle="Règne d'Ormuzd"
      cardTitle="Ormuzd"
      cardBody="Son règne dura 1 an."
    />
  );
};
