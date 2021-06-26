import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { Link } from 'gatsby';

export interface ReignCardProps {
  data: AllMarkdownRemarkResponse;
  reignSlug: string;
  reignTitle: string;
  cardTitle: string;
  cardBody: string;
}
export const ReignCard: React.FC<ReignCardProps> = ({
  data,
  reignSlug,
  reignTitle,
  cardTitle,
  cardBody,
}) => {
  const totalNumberOfEpsiodes = data.allMarkdownRemark.totalCount;

  return (
    <Link className="nav-link" to={`/${reignSlug}/`} aria-label={reignTitle}>
      <div className="card text-center bg-dark text-white border-secondary">
        <div className="card-header pb-0">
          <h3 className="card-title fs-5">{cardTitle}</h3>
        </div>
        <div className="card-body card-text">
          <blockquote className="blockquote mb-0">
            <p className="text-secondary">{cardBody}</p>
          </blockquote>
        </div>
        <div className="card-footer text-muted">
          <span>{`${totalNumberOfEpsiodes} épisode${totalNumberOfEpsiodes > 1 ? 's' : ''}`}</span>
        </div>
      </div>
    </Link>
  );
};
