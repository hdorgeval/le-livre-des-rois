import { Layout, Title, SEO } from '../components';
import { GurazEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Guraz | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Guraz"
    />

    <div>
      <Title text="Règne de Guraz" subtitle="Son règne dura 50 jours." />
      <div className="container">
        <GurazEpisodes />
      </div>
    </div>
  </Layout>
);
