import { Layout, Title, SEO, KobadSonOfPirouzEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Kobad fils de Pirouz"
    />

    <div>
      <Title text="Règne de Kobad fils de Pirouz" subtitle="Son règne dura 40 ans." />
      <KobadSonOfPirouzEpisodes />
    </div>
  </Layout>
);
