import { Layout, Title, SEO, AschkanidesEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Dynastie des Aschkanides | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Dynastie des Aschkanides"
    />

    <div>
      <Title text="Dynastie des Aschkanides" subtitle="Sa durée a été de 120 ans." />
      <AschkanidesEpisodes />
    </div>
  </Layout>
);
