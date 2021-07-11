import { Title, SEO } from '../../components';
import { Layout, PirouzEpisodes } from '../../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Pirouz | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Pirouz"
    />

    <div>
      <Title text="Règne de Pirouz" subtitle="Son règne dura 11 ans." />
      <div className="container">
        <PirouzEpisodes />
      </div>
    </div>
  </Layout>
);
