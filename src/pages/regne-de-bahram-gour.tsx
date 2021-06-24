import { Layout, Title, SEO, BahramGourEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Bahram Gour | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Bahram Gour"
    />

    <div>
      <Title text="Règne de Bahram Gour" subtitle="Son règne dura 63 ans." />
      <BahramGourEpisodes />
    </div>
  </Layout>
);
