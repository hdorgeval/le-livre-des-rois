import { Layout, Title, SEO, PirouzEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Pirouz | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Pirouz"
    />

    <div>
      <Title text="Règne de Pirouz" subtitle="Son règne dura 11 ans." />
      <PirouzEpisodes />
    </div>
  </Layout>
);
