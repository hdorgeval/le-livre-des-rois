import styles from './genealogies.module.scss';
import { Genealogy } from './genealogy/genealogy';
import { AllFileResponse } from '../../graphql';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
export const Genealogies: React.FC = () => {
  const data = useStaticQuery<AllFileResponse>(graphql`
    {
      allFile(filter: { absolutePath: { glob: "**/lohrasp.svg" } }) {
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

  return (
    <div className={styles.content}>
      <Genealogy treeName="Lohrasp" svgGraph={lohraspGraph} />
    </div>
  );
};
