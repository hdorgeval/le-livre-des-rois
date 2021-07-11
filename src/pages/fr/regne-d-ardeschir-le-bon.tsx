import { Title, SEO } from '../../components';
import { ArdeschirLeBonEpisodes, Layout } from '../../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne d'Ardeschir Le Bon | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne d'Ardeschir Le Bon"
    />

    <div>
      <Title text="Règne d'Ardeschir Le Bon" subtitle="Son règne dura 12 ans." />
      <div className="container">
        <ArdeschirLeBonEpisodes />
      </div>
    </div>
  </Layout>
);
