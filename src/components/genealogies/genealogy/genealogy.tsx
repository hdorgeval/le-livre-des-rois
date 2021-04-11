import React from 'react';
import './genealogy.css';

export interface GenealogyProps {
  svgGraph: string;
  treeName: string;
}

export const Genealogy: React.FC<GenealogyProps> = ({ treeName, svgGraph }) => {
  const result = svgGraph.replace(/<style>/gi, '<foo>').replace(/<\/style>/gi, '</foo>');

  return (
    <div className="card text-center bg-dark text-white border-secondary mb-4 ms-4 me-4">
      <div className="card-header">
        <h5 className="card-title mb-0">{treeName}</h5>
      </div>
      <div className="card-body card-text">
        <div className="mermaid-graph" dangerouslySetInnerHTML={{ __html: result }}></div>
      </div>
      <div className="card-footer text-muted"></div>
    </div>
  );
};
