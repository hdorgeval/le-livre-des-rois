import { Title, SEO } from '../../components';
import { Layout, SchapourDhoulAktafEpisodes } from '../../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Schapour Dhou'l Aktaf | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Schapour Dhou'l Aktaf"
    />

    <div>
      <Title text="Règne de Schapour Dhou'l Aktaf" subtitle="Son règne dura 72 ans." />
      <div className="container">
        <SchapourDhoulAktafEpisodes />
      </div>
    </div>
  </Layout>
);
