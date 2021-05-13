import { Layout, Title, SEO, SchapourEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Schapour"
    />

    <div>
      <Title text="Règne de Schapour" subtitle="Son règne dura 31 ans." />
      <SchapourEpisodes />
    </div>
  </Layout>
);
