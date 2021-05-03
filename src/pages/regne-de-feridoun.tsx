import { Layout, Title, SEO, FeridounEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Feridoun"
    />

    <div>
      <Title text="Règne de Feridoun" subtitle="Son règne dura 500 ans." />
      <FeridounEpisodes />
    </div>
  </Layout>
);
