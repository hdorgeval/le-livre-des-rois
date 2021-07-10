import { Layout, Title, SEO } from '../components';
import { YezdeguerdSonOfBahramEpisodes } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Yezdeguerd fils de Bahram Gour | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Yezdeguerd fils de Bahram Gour"
    />

    <div>
      <Title text="Règne de Yezdeguerd fils de Bahram Gour" subtitle="Son règne dura 18 ans." />
      <div className="container">
        <YezdeguerdSonOfBahramEpisodes />
      </div>
    </div>
  </Layout>
);
