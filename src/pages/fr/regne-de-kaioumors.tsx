import { Title, SEO } from '../../components';
import { KaioumorsEpisodes, Layout } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Kaïoumors | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Kaïoumors"
    />

    <div>
      <Title text="Règne de Kaïoumors" subtitle="Son règne dura 30 ans." />
      <div className="container">
        <KaioumorsEpisodes />
      </div>
    </div>
  </Layout>
);
