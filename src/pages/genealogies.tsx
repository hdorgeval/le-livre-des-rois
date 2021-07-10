import { Title, SEO } from '../components';
import { Genealogies, Layout } from '../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="Généalogies | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="généalogies"
    />
    <div>
      <Title text="Le Livre des Rois - Shâhnâmeh" subtitle="Généalogies" />
      <div className="container">
        <Genealogies />
      </div>
    </div>
  </Layout>
);
