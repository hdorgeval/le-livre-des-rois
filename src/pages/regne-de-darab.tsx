import { Title, SEO } from '../components';
import { DarabEpisodes, Layout } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Darab | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Darab"
    />

    <div>
      <Title text="Règne de Darab" subtitle="Son règne dura 12 ans." />
      <div className="container">
        <DarabEpisodes />
      </div>
    </div>
  </Layout>
);
