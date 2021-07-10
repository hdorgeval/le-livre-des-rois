import { Layout, Title, SEO } from '../components';
import { ThahmourasEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Thahmouras | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Thahmouras"
    />

    <div>
      <Title text="Règne de Thahmouras" subtitle="Son règne dura 30 ans." />
      <div className="container">
        <ThahmourasEpisodes />
      </div>
    </div>
  </Layout>
);
