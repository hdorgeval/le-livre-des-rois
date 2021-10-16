import { Title, SEO } from '../../components';
import { Layout, YezdegirdEpisodes } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Yezdegird | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Yezdegird"
    />

    <div>
      <Title text="Règne de Yezdegird" subtitle="Son règne dura 16 ans." />
      <div className="container">
        <YezdegirdEpisodes />
      </div>
    </div>
  </Layout>
);
