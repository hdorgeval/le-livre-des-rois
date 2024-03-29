import { Title, SEO } from '../../components';
import { BahramSonOfSchapourEpisodes, Layout } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Bahram fils de Schapour | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Bahram fils de Schapour"
    />

    <div>
      <Title text="Règne de Bahram fils de Schapour" subtitle="Son règne dura 14 ans." />
      <div className="container">
        <BahramSonOfSchapourEpisodes />
      </div>
    </div>
  </Layout>
);
