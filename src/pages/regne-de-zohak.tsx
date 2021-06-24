import { Layout, Title, SEO, ZohakEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Zohak | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Zohak"
    />

    <div>
      <Title text="Règne de Zohak" subtitle="Son règne dura 1000 ans." />
      <ZohakEpisodes />
    </div>
  </Layout>
);
