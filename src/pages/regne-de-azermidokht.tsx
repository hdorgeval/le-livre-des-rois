import { Layout, Title, SEO, AzermidokhtEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Azermidokht | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Azermidokht"
    />

    <div>
      <Title text="Règne de Azermidokht" subtitle="Son règne dura 4 mois." />
      <AzermidokhtEpisodes />
    </div>
  </Layout>
);
