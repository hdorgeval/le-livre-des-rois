import { Title, SEO } from '../../components';
import { AzermidokhtEpisodes, Layout } from '../../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Azermidokht | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Azermidokht"
    />

    <div>
      <Title text="Règne de Azermidokht" subtitle="Son règne dura 4 mois." />
      <div className="container">
        <AzermidokhtEpisodes />
      </div>
    </div>
  </Layout>
);
