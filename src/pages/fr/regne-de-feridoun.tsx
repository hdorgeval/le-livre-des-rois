import { Title, SEO } from '../../components';
import { FeridounEpisodes, Layout } from '../../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Feridoun | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Feridoun"
    />

    <div>
      <Title text="Règne de Feridoun" subtitle="Son règne dura 500 ans." />
      <div className="container">
        <FeridounEpisodes />
      </div>
    </div>
  </Layout>
);
