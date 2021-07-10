import { Layout, Title, SEO } from '../components';
import { KobadEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Keï Kobad | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Keï Kobad"
    />

    <div>
      <Title text="Règne de Keï Kobad" subtitle="Son règne dura 100 ans." />
      <div className="container">
        <KobadEpisodes />
      </div>
    </div>
  </Layout>
);
