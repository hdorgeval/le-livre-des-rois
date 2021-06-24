import { Layout, Title, SEO, KobadSonOfParvizEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Kobad fils de Khosrou Parviz | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Kobad fils de Khosrou Parviz"
    />

    <div>
      <Title text="Règne de Kobad fils de Khosrou Parviz" subtitle="Son règne dura 7 mois." />
      <KobadSonOfParvizEpisodes />
    </div>
  </Layout>
);
