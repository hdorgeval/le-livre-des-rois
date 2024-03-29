import { Title, SEO } from '../../components';
import { KobadEpisodes, Layout } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Keï Kobad | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Keï Kobad"
    />

    <div>
      <Title text="Règne de Keï Kobad" subtitle="Son règne dura 100 ans." />
      <div className="container">
        <KobadEpisodes />
      </div>
    </div>
  </Layout>
);
