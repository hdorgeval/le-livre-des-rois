import { Layout, Title, SEO, HomaiEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO title="Le Livre des Rois - Shâhnâmeh" contentType="website" description="Règne de Homai" />

    <div>
      <Title text="Règne de Homai" subtitle="Son règne dura 32 ans." />
      <HomaiEpisodes />
    </div>
  </Layout>
);
