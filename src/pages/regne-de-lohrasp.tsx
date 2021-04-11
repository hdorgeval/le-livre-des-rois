import { Layout, Title, LohraspEpisodes, SEO } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Lohrasp"
    />

    <div>
      <Title text="Règne de Lohrasp" subtitle="Son règne dura 120 ans." />
      <LohraspEpisodes />
    </div>
  </Layout>
);
