import { Genealogy } from '../../../common/genealogy';
import { AllFileResponse } from '../../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
export const GenealogyGouderz: React.FC = () => {
  const data = useStaticQuery<AllFileResponse>(graphql`
    {
      allFile(filter: { absolutePath: { glob: "**/gouderz.svg" } }) {
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

  const graph = data.allFile.edges[0].node.fields.svgContent;

  return <Genealogy treeName="Gouderz" svgGraph={graph} />;
};
