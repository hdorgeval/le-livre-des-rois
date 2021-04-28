import { Layout, Title, SEO, ThahmourasEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Thahmouras"
    />

    <div>
      <Title text="Règne de Thahmouras" subtitle="Son règne dura 30 ans." />
      <ThahmourasEpisodes />
    </div>
  </Layout>
);
