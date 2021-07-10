import { Title, SEO } from '../components';
import { Layout, NewderEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
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
