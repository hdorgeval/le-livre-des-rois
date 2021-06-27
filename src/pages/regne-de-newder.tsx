import { Layout, Title, SEO, NewderEpisodes } from '../components';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Newder | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Newder"
    />

    <div>
      <Title text="Règne de Newder" subtitle="Son règne dura 7 ans." />
      <div className="container">
        <NewderEpisodes />
      </div>
    </div>
  </Layout>
);
