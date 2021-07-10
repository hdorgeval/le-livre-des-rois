import { Title, SEO } from '../components';
import { KhosrouParvizEpisodes, Layout } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Khosrou Parviz | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Khosrou Parviz"
    />

    <div>
      <Title text="Règne de Khosrou Parviz" subtitle="Son règne dura 38 ans." />
      <div className="container">
        <KhosrouParvizEpisodes />
      </div>
    </div>
  </Layout>
);
