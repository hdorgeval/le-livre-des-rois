import { Layout, Title, SEO, BahramBahramianEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Bahram Bahramian"
    />

    <div>
      <Title text="Règne de Bahram Bahramian" subtitle="Son règne dura 4 mois." />
      <BahramBahramianEpisodes />
    </div>
  </Layout>
);
