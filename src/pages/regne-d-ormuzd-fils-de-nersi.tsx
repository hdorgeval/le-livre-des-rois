import { Layout, Title, SEO } from '../components';
import { OrmuzdSonOfNersiEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne d'Ormuzd | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne d'Ormuzd fils de Nersi"
    />

    <div>
      <Title text="Règne d'Ormuzd" subtitle="Son règne dura 9 ans." />
      <div className="container">
        <OrmuzdSonOfNersiEpisodes />
      </div>
    </div>
  </Layout>
);
