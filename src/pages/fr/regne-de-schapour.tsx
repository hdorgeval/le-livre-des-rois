import { Title, SEO } from '../../components';
import { Layout, SchapourEpisodes } from '../../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Schapour | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Schapour"
    />

    <div>
      <Title text="Règne de Schapour" subtitle="Son règne dura 31 ans." />
      <div className="container">
        <SchapourEpisodes />
      </div>
    </div>
  </Layout>
);
