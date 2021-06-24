import { Layout, Title, SEO, ArdeschirSonOfSchirouiEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Ardeschir fils de Schirouï | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Ardeschir fils de Schirouï"
    />

    <div>
      <Title text="Règne de Ardeschir fils de Schirouï" subtitle="Son règne dura 6 mois." />
      <ArdeschirSonOfSchirouiEpisodes />
    </div>
  </Layout>
);
