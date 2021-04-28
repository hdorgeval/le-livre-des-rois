import { Layout, Title, SEO, KaioumorsEpisodes, HouschengEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Houscheng"
    />

    <div>
      <Title text="Règne de Houscheng" subtitle="Son règne dura 30 ans." />
      <HouschengEpisodes />
    </div>
  </Layout>
);
