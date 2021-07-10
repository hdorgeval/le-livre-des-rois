import { Title, SEO } from '../components';
import { BahramSonOfBahramEpisodes, Layout } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Bahram fils de Bahram | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Bahram fils de Bahram"
    />

    <div>
      <Title text="Règne de Bahram fils de Bahram" subtitle="Son règne dura 19 ans." />
      <div className="container">
        <BahramSonOfBahramEpisodes />
      </div>
    </div>
  </Layout>
);
