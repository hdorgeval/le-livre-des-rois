import { Layout, Title, SEO, GuerschaspEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Guerschasp"
    />

    <div>
      <Title text="Règne de Guerschasp" subtitle="Son règne dura 5 ans." />
      <GuerschaspEpisodes />
    </div>
  </Layout>
);
