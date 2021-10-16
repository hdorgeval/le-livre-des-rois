import { Title, SEO } from '../../components';
import { DjemschidEpisodes, Layout } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Djemschid | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Djemschid"
    />

    <div>
      <Title text="Règne de Djemschid" subtitle="Son règne dura 700 ans." />
      <div className="container">
        <DjemschidEpisodes />
      </div>
    </div>
  </Layout>
);
