import { ReignCard } from './reign-card';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const OrmuzdSonOfNersiCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/fr/29-ormuzd-fils-de-nersi/**/*.md" } }
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
