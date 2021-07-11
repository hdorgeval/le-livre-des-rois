import { Title, SEO } from '../../components';
import { BahramGourEpisodes, Layout } from '../../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Bahram Gour | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Bahram Gour"
    />

    <div>
      <Title text="Règne de Bahram Gour" subtitle="Son règne dura 63 ans." />
      <div className="container">
        <BahramGourEpisodes />
      </div>
    </div>
  </Layout>
);
