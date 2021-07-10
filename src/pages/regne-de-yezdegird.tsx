import { Layout, Title, SEO } from '../components';
import { YezdegirdEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
