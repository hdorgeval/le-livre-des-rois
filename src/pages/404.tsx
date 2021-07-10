import { SEO } from '../components';
import { Layout } from '../components/fr';
import React from 'react';
import { Link } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Page inconnue | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="La page que vous cherchez n'existe pas"
    />
    <Link className="nav-link" to="/" aria-label="Le livre des rois">
      <div className="card text-center bg-dark text-white border-secondary">
        <div className="card-header pb-0">
          <h5 className="card-title text-truncate">Oops !</h5>
        </div>
        <div className="card-body card-text">
          <blockquote className="blockquote mb-0">
            <p className="text-secondary fs-6">La page que vous cherchez n&apos;existe pas</p>
          </blockquote>
        </div>
        <div className="card-footer text-muted">
          <small>{``}</small>
        </div>
      </div>
    </Link>
  </Layout>
);
