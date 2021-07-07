import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
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
  const totalNumberOfEpisodes = data.allMarkdownRemark.totalCount;

  return (
    <Link className="nav-link mb-4 p-0" to={`/${reignSlug}/`} aria-label={reignTitle}>
      <div
        className="card text-center bg-dark text-light border-secondary"
        style={{ minHeight: '150px' }}
      >
        <StaticImage
          src="../../../images/background-reign-card.jpg"
          placeholder="blurred"
          className="card-img"
          imgClassName="card-img"
          alt="..."
          objectFit="fill"
          objectPosition="50% 50%"
          aspectRatio={16 / 9}
          formats={['auto']}
          layout="fullWidth"
          style={{ position: 'revert' }}
        />
        <div
          className="card-img-overlay"
          style={{
            background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(117, 19, 93, 0.30))',
          }}
        >
          <div className="card-body card-text h-75">
            <h3 className="card-title fs-5">{cardTitle}</h3>
            <p className="card-text text-nowrap">{cardBody}</p>
          </div>
          <div className="card-footer text-light border-0 position-absolute start-0 bottom-0">
            <span>
              {totalNumberOfEpisodes} épisode{totalNumberOfEpisodes > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
