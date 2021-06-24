import { Layout, Title, SEO, GurazEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Guraz | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Guraz"
    />

    <div>
      <Title text="Règne de Guraz" subtitle="Son règne dura 50 jours." />
      <GurazEpisodes />
    </div>
  </Layout>
);
