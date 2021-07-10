import { Title, SEO } from '../components';
import { HormuzEpisodes, Layout } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Hormuz fils de Yezdeguerd | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Hormuz fils de Yesdeguerd"
    />

    <div>
      <Title text="Règne de Hormuz fils de Yezdeguerd" subtitle="Son règne dura 1 ans" />
      <div className="container">
        <HormuzEpisodes />
      </div>
    </div>
  </Layout>
);
