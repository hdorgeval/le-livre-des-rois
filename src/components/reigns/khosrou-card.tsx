import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

export const KhosrouCard: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        limit: 200
        filter: { fileAbsolutePath: { glob: "**/markdown/13-khosrou/**/*.md" } }
      ) {
        totalCount
      }
    }
  `);

  const totalNumberOfEpsiodes = data.allMarkdownRemark.totalCount;

  return (
    <Link className="nav-link" to="/regne-de-khosrou/" aria-label="Règne de Keï Khosrou">
      <div className="card text-center bg-dark text-white border-secondary">
        <div className="card-header pb-0">
          <h5 className="card-title">Keï Khosrou</h5>
        </div>
        <div className="card-body card-text">
          <blockquote className="blockquote mb-0">
            <p className="text-secondary">Son règne dura 60 ans.</p>
          </blockquote>
        </div>
        <div className="card-footer text-muted">
          <span>{`${totalNumberOfEpsiodes} épisode${totalNumberOfEpsiodes > 1 ? 's' : ''}`}</span>
        </div>
      </div>
    </Link>
  );
};
