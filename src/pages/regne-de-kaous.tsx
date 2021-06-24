import { Layout, Title, SEO, KaousEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Keï Kaous | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Keï Kaous"
    />

    <div>
      <Title text="Règne de Keï Kaous" subtitle="Son règne dura 150 ans." />
      <KaousEpisodes />
    </div>
  </Layout>
);
