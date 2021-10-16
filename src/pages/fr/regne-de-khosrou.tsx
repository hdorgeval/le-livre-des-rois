import { Title, SEO } from '../../components';
import { KhosrouEpisodes, Layout } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Keï Khosrou | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Keï Khosrou"
    />

    <div>
      <Title text="Règne de Keï Khosrou" subtitle="Son règne dura 60 ans." />
      <div className="container">
        <KhosrouEpisodes />
      </div>
    </div>
  </Layout>
);
