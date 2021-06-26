import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const ArdeschirSonOfSchirouiCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/45-ardeschir-fils-de-schiroui/**/*.md" } }
      ) {
        totalCount
        edges {
          node {
            id
            timeToRead
          }
        }
      }
    }
  `);
  return (
    <ReignCard
      data={data}
      reignSlug="regne-de-ardeschir-fils-de-schiroui"
      reignTitle="Règne de Ardeschir fils de Schirouï"
      cardTitle="Ardeschir fils de Schirouï"
      cardBody="Son règne dura 6 mois."
    />
  );
};
