import { Genealogy } from '../../../common';
import { AllFileResponse } from '../../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
export const GenealogyIsfendiar: React.FC = () => {
  const data = useStaticQuery<AllFileResponse>(graphql`
    {
      allFile(filter: { absolutePath: { glob: "**/fr/**/isfendiar.svg" } }) {
        edges {
          node {
            id
            relativePath
            internal {
              mediaType
              type
            }
            fields {
              svgContent
            }
          }
        }
      }
    }
  `);

  const isfendiarGraph = data.allFile.edges[0].node.fields.svgContent;

  return <Genealogy treeName="Isfendiar" svgGraph={isfendiarGraph} />;
};
