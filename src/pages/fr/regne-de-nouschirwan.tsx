import { Title, SEO } from '../../components';
import { Layout, NouschirwanEpisodes } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Kesra Nouschirwan | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Kesra Nouschirwan"
    />

    <div>
      <Title text="Règne de Kesra Nouschirwan" subtitle="Son règne dura 48 ans." />
      <div className="container">
        <NouschirwanEpisodes />
      </div>
    </div>
  </Layout>
);
