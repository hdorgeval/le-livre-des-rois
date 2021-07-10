import { Layout, Title, SEO } from '../components';
import { BalaschEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Balasch | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Balasch"
    />

    <div>
      <Title text="Règne de Balasch" subtitle="Son règne dura 5 ans." />
      <div className="container">
        <BalaschEpisodes />
      </div>
    </div>
  </Layout>
);
