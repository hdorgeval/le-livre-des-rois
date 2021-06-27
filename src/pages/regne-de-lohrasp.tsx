import { Layout, Title, LohraspEpisodes, SEO } from '../components';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Lohrasp | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Lohrasp"
    />

    <div>
      <Title text="Règne de Lohrasp" subtitle="Son règne dura 120 ans." />
      <div className="container">
        <LohraspEpisodes />
      </div>
    </div>
  </Layout>
);
