import { Genealogy } from '../../common/genealogy';
import { AllFileResponse } from '../../../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
export const GenealogyKhosrou: React.FC = () => {
  const data = useStaticQuery<AllFileResponse>(graphql`
    {
      allFile(filter: { absolutePath: { glob: "**/khosrou.svg" } }) {
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

  return <Genealogy treeName="Khosrou" svgGraph={graph} />;
};
