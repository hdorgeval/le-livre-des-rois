import { Layout, Title, SEO, YezdegirdEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Yezdegird"
    />

    <div>
      <Title text="Règne de Yezdegird" subtitle="Son règne dura 16 ans." />
      <YezdegirdEpisodes />
    </div>
  </Layout>
);
