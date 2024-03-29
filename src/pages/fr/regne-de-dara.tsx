import { Title, SEO } from '../../components';
import { DaraEpisodes, Layout } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Dara | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Dara"
    />

    <div>
      <Title text="Règne de Dara" subtitle="Son règne dura 14 ans." />
      <div className="container">
        <DaraEpisodes />
      </div>
    </div>
  </Layout>
);
