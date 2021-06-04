import { Layout, Title, SEO, FarrukhzadEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Farrukhzad"
    />

    <div>
      <Title text="Règne de Farrukhzad" subtitle="Son règne dura 1 mois." />
      <FarrukhzadEpisodes />
    </div>
  </Layout>
);
