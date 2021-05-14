import { Layout, Title, SEO, OrmuzdEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne d'Ormuzd fils de Schapour"
    />

    <div>
      <Title text="Règne d'Ormuzd" subtitle="Son règne dura 1 an." />
      <OrmuzdEpisodes />
    </div>
  </Layout>
);
