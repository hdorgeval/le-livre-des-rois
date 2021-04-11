import { Layout, Title, SEO, GuschtaspEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Guschtasp"
    />

    <div>
      <Title text="Règne de Guschtasp" subtitle="Son règne dura 120 ans." />
      <GuschtaspEpisodes />
    </div>
  </Layout>
);
