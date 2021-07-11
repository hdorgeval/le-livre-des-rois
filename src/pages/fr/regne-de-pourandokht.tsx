import { Title, SEO } from '../../components';
import { Layout, PourandokhtEpisodes } from '../../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Pourandokht | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Pourandokht"
    />

    <div>
      <Title text="Règne de Pourandokht" subtitle="Son règne dura 6 mois." />
      <div className="container">
        <PourandokhtEpisodes />
      </div>
    </div>
  </Layout>
);
