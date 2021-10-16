import { Title, SEO } from '../../components';
import { BahramBahramianEpisodes, Layout } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Bahram Bahramian | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Bahram Bahramian"
    />

    <div>
      <Title text="Règne de Bahram Bahramian" subtitle="Son règne dura 4 mois." />
      <div className="container">
        <BahramBahramianEpisodes />
      </div>
    </div>
  </Layout>
);
