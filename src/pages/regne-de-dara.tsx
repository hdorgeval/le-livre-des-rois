import { Layout, Title, SEO, DaraEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO title="Le Livre des Rois - Shâhnâmeh" contentType="website" description="Règne de Dara" />

    <div>
      <Title text="Règne de Dara" subtitle="Son règne dura 14 ans." />
      <DaraEpisodes />
    </div>
  </Layout>
);
