import { Title, SEO } from '../components';
import { BahramSonOfOrmuzdEpisodes, Layout } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Bahram fils d'Ormuzd | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Bahram fils d'Ormuzd"
    />

    <div>
      <Title text="Règne de Bahram fils d'Ormuzd" subtitle="Son règne dura 3 ans." />
      <div className="container">
        <BahramSonOfOrmuzdEpisodes />
      </div>
    </div>
  </Layout>
);
