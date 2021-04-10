import { Layout, Title, LohraspEpisodes, SEO } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Le règne de Lohrasp"
    />

    <div>
      <Title text="Le règne de Lohrasp" subtitle="Son règne dura 120 ans." />
      <div>
        <br />
        <LohraspEpisodes />
      </div>
    </div>
  </Layout>
);
