import { Title, SEO } from '../../components';
import { Layout, ZohakEpisodes } from '../../components/fr';
import React from 'react';
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
