import { Layout, Title, SEO } from '../components';
import { YezdeguerdEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Yezdeguerd le méchant | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Yezdeguerd le méchant"
    />

    <div>
      <Title text="Règne de Yezdeguerd le méchant" subtitle="Son règne dura 21 ans." />
      <div className="container">
        <YezdeguerdEpisodes />
      </div>
    </div>
  </Layout>
);
