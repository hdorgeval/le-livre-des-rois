import { Title, SEO } from '../components';
import { HouschengEpisodes, Layout } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Houscheng | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Houscheng"
    />

    <div>
      <Title text="Règne de Houscheng" subtitle="Son règne dura 30 ans." />
      <div className="container">
        <HouschengEpisodes />
      </div>
    </div>
  </Layout>
);
