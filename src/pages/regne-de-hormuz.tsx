import { Layout, Title, SEO, HormuzEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Règne de Hormuz fils de Yesdeguerd"
    />

    <div>
      <Title text="Règne de Hormuz fils de Yezdeguerd" subtitle="Son règne dura 1 ans" />
      <HormuzEpisodes />
    </div>
  </Layout>
);
