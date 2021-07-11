import { Title, SEO } from '../../components';
import { KobadSonOfPirouzEpisodes, Layout } from '../../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Kobad fils de Pirouz | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Kobad fils de Pirouz"
    />

    <div>
      <Title text="Règne de Kobad fils de Pirouz" subtitle="Son règne dura 40 ans." />
      <div className="container">
        <KobadSonOfPirouzEpisodes />
      </div>
    </div>
  </Layout>
);
