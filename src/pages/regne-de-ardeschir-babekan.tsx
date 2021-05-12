import { Layout, Title, SEO, ArdeschirBabekanEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Ardeschir Babekan"
    />

    <div>
      <Title text="Règne de Ardeschir Babekan" subtitle="Son règne dura 40 ans." />
      <ArdeschirBabekanEpisodes />
    </div>
  </Layout>
);
