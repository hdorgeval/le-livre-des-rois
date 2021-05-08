import { Layout, Title, SEO, DarabEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO title="Le Livre des Rois - Shâhnâmeh" contentType="website" description="Règne de Darab" />

    <div>
      <Title text="Règne de Darab" subtitle="Son règne dura 12 ans." />
      <DarabEpisodes />
    </div>
  </Layout>
);
