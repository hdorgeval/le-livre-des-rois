import styles from './genealogy.module.scss';
import React from 'react';

export interface GenealogyProps {
  svgGraph: string;
  treeName: string;
}

export const Genealogy: React.FC<GenealogyProps> = ({ treeName, svgGraph }) => {
  const result = svgGraph.replace(/<style>/gi, '<foo>').replace(/<\/style>/gi, '</foo>');

  return (
    <>
      <h2>{treeName}</h2>
      <div className={styles.mermaidGraph} dangerouslySetInnerHTML={{ __html: result }}></div>
    </>
  );
};
