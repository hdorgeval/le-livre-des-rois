import { Title, SEO } from '../components';
import { HormuzdEpisodes, Layout } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne d'HOrmuzd | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne d'Hormuzd"
    />

    <div>
      <Title text="Règne d'HOrmuzd" subtitle="Son règne dura 14 ans." />
      <div className="container">
        <HormuzdEpisodes />
      </div>
    </div>
  </Layout>
);
