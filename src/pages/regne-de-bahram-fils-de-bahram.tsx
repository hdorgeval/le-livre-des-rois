import { Layout, Title, SEO, BahramSonOfBahramEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Bahram fils de Bahram | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Bahram fils de Bahram"
    />

    <div>
      <Title text="Règne de Bahram fils de Bahram" subtitle="Son règne dura 19 ans." />
      <BahramSonOfBahramEpisodes />
    </div>
  </Layout>
);
