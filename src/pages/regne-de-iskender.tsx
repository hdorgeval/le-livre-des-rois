import { Layout, Title, SEO, IskenderEpisodes } from '../components';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Iskender | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Iskender"
    />

    <div>
      <Title text="Règne de Iskender" subtitle="Son règne dura 14 ans." />
      <div className="container">
        <IskenderEpisodes />
      </div>
    </div>
  </Layout>
);
