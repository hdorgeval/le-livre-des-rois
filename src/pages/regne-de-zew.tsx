import { Layout, Title, SEO, ZewEpisodes } from '../components';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Zew | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Zew"
    />
    <div>
      <Title text="Règne de Zew" subtitle="Son règne dura 5 ans." />
      <div className="container">
        <ZewEpisodes />
      </div>
    </div>
  </Layout>
);
