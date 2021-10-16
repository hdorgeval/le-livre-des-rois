import { Title, SEO } from '../../components';
import { KaousEpisodes, Layout } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Keï Kaous | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Keï Kaous"
    />

    <div>
      <Title text="Règne de Keï Kaous" subtitle="Son règne dura 150 ans." />
      <div className="container">
        <KaousEpisodes />
      </div>
    </div>
  </Layout>
);
