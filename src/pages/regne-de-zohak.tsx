import { Layout, Title, SEO } from '../components';
import { ZohakEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Zohak | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Zohak"
    />

    <div>
      <Title text="Règne de Zohak" subtitle="Son règne dura 1000 ans." />
      <div className="container">
        <ZohakEpisodes />
      </div>
    </div>
  </Layout>
);
