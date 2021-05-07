import { Layout, Title, SEO, BahmanEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Bahman"
    />

    <div>
      <Title text="Règne de Bahman" subtitle="Son règne dura 99 ans." />
      <BahmanEpisodes />
    </div>
  </Layout>
);
