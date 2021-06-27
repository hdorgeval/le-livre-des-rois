import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ReignCard } from './reign-card';

export const OrmuzdSonOfNersiCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/29-ormuzd-fils-de-nersi/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  return (
    <ReignCard
      data={data}
      reignSlug="regne-d-ormuzd-fils-de-nersi"
      reignTitle="Règne d'Ormuzd fils de Nersi"
      cardTitle="Ormuzd"
      cardBody="Son règne dura 9 ans."
    />
  );
};
