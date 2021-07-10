import { Layout, Title, SEO } from '../components';
import { FarrukhzadEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Farrukhzad | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Farrukhzad"
    />

    <div>
      <Title text="Règne de Farrukhzad" subtitle="Son règne dura 1 mois." />
      <div className="container">
        <FarrukhzadEpisodes />
      </div>
    </div>
  </Layout>
);
