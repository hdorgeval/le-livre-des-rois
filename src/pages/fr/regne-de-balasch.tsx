import { Title, SEO } from '../../components';
import { BalaschEpisodes, Layout } from '../../components/fr';
import React from 'react';
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
