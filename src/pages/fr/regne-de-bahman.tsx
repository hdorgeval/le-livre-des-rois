import { Title, SEO } from '../../components';
import { BahmanEpisodes, Layout } from '../../components/fr';
import React from 'react';
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
