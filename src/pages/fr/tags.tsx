import { Title, SEO } from '../../components';
import { Layout, Tags } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Lexique | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Lexique du livre des Rois"
    />
    <div>
      <Title text="Le Livre des Rois - Shâhnâmeh" subtitle="Lexique" />
      <p className="text-center text-small text-muted border-bottom border-bottom-1 border-secondary pb-3">
        Chaque mot est clickable
      </p>
      <div className="container">
        <Tags />
      </div>
    </div>
  </Layout>
);
