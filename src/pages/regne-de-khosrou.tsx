import { Layout, Title, SEO } from '../components';
import { KhosrouEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Keï Khosrou | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Keï Khosrou"
    />

    <div>
      <Title text="Règne de Keï Khosrou" subtitle="Son règne dura 60 ans." />
      <div className="container">
        <KhosrouEpisodes />
      </div>
    </div>
  </Layout>
);
