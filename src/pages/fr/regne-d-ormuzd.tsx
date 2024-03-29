import { Title, SEO } from '../../components';
import { Layout, OrmuzdEpisodes } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne d'Ormuzd | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne d'Ormuzd fils de Schapour"
    />

    <div>
      <Title text="Règne d'Ormuzd" subtitle="Son règne dura 1 an." />
      <div className="container">
        <OrmuzdEpisodes />
      </div>
    </div>
  </Layout>
);
