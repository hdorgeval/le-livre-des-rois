import { Title, SEO } from '../../components';
import { Layout, NersiEpisodes } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Nersi | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Nersi"
    />

    <div>
      <Title text="Règne de Nersi" subtitle="Son règne dura 9 ans." />
      <div className="container">
        <NersiEpisodes />
      </div>
    </div>
  </Layout>
);
