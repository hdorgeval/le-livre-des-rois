import { Title, SEO } from '../../components';
import { ArdeschirBabekanEpisodes, Layout } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Ardeschir Babekan | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Ardeschir Babekan"
    />

    <div>
      <Title text="Règne de Ardeschir Babekan" subtitle="Son règne dura 40 ans." />
      <div className="container">
        <ArdeschirBabekanEpisodes />
      </div>
    </div>
  </Layout>
);
