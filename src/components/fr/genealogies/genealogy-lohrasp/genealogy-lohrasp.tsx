import { Genealogy } from '../../../common';
import { AllFileResponse } from '../../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
export const GenealogyLohrasp: React.FC = () => {
  const data = useStaticQuery<AllFileResponse>(graphql`
    {
      allFile(filter: { absolutePath: { glob: "**/fr/**/lohrasp.svg" } }) {
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

  const lohraspGraph = data.allFile.edges[0].node.fields.svgContent;

  return <Genealogy treeName="Lohrasp" svgGraph={lohraspGraph} />;
};
