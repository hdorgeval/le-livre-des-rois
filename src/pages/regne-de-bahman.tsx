import { Layout, Title, SEO } from '../components';
import { BahmanEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Bahman | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Bahman"
    />

    <div>
      <Title text="Règne de Bahman" subtitle="Son règne dura 99 ans." />
      <div className="container">
        <BahmanEpisodes />
      </div>
    </div>
  </Layout>
);
