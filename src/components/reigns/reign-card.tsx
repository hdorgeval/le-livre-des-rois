import { AllMarkdownRemarkResponse } from '../../graphql';
import React, { CSSProperties } from 'react';
import { Link } from 'gatsby';

const cardStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(117, 19, 93, 0.30)), url('https://content.wdl.org/10610/thumbnail/1430174992/616x510.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '280px',
};

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
  const totalNumberOfEpisodes = data.allMarkdownRemark.totalCount;

  return (
    <Link className="nav-link mb-4 p-0" to={`/${reignSlug}/`} aria-label={reignTitle}>
      <div className="card text-light border-secondary" style={cardStyle}>
        <div className="card-body card-text text-light text-center d-flex flex-column align-items-center justify-content-center">
          <h4 className="card-title">{cardTitle}</h4>
          <p className="card-text">{cardBody}</p>
        </div>
        <div className="card-footer text-light border-0">
          {totalNumberOfEpisodes} épisode{totalNumberOfEpisodes > 1 ? 's' : ''}
        </div>
      </div>
    </Link>
  );
};
