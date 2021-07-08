import { Layout, Title, SEO, HomaiEpisodes } from '../components';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Homai | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Homai"
    />

    <div>
      <Title text="Règne de Homai" subtitle="Son règne dura 32 ans." />
      <div className="container">
        <HomaiEpisodes />
      </div>
    </div>
  </Layout>
);
