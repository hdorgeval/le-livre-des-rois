import { Title, SEO } from '../../components';
import { AschkanidesEpisodes, Layout } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Dynastie des Aschkanides | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Dynastie des Aschkanides"
    />

    <div>
      <Title text="Dynastie des Aschkanides" subtitle="Sa durée a été de 120 ans." />
      <div className="container">
        <AschkanidesEpisodes />
      </div>
    </div>
  </Layout>
);
