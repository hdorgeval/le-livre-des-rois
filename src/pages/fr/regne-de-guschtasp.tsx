import { Title, SEO } from '../../components';
import { GuschtaspEpisodes, Layout } from '../../components/fr';
import React from 'react';
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Règne de Guschtasp | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Guschtasp"
    />

    <div>
      <Title text="Règne de Guschtasp" subtitle="Son règne dura 120 ans." />
      <div className="container">
        <GuschtaspEpisodes />
      </div>
    </div>
  </Layout>
);
