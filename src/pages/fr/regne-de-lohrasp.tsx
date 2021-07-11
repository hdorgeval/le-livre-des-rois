import { Title, SEO } from '../../components';
import { Layout, LohraspEpisodes } from '../../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
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
