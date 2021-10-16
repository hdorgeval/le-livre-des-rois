import { Title, SEO } from '../../components';
import { GuerschaspEpisodes, Layout } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Guerschasp | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Guerschasp"
    />

    <div>
      <Title text="Règne de Guerschasp" subtitle="Son règne dura 5 ans." />
      <div className="container">
        <GuerschaspEpisodes />
      </div>
    </div>
  </Layout>
);
