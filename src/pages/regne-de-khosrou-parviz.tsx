import { Layout, Title, SEO, KhosrouParvizEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Khosrou Parviz | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Khosrou Parviz"
    />

    <div>
      <Title text="Règne de Khosrou Parviz" subtitle="Son règne dura 38 ans." />
      <KhosrouParvizEpisodes />
    </div>
  </Layout>
);
