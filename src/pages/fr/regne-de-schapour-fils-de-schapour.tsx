import { Title, SEO } from '../../components';
import { Layout, SchapourSonOfSchapourEpisodes } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Schapour fils de Schapour | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Schapour fils de Schapour"
    />

    <div>
      <Title text="Règne de Schapour fils de Schapour" subtitle="Son règne dura 5 ans." />
      <div className="container">
        <SchapourSonOfSchapourEpisodes />
      </div>
    </div>
  </Layout>
);
