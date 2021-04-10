import { Layout, Title, SEO, Genealogies } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO title="Le Livre des Rois - Shâhnâmeh" contentType="website" description="généalogies" />
    <div>
      <Title text="Le Livre des Rois - Shâhnâmeh" subtitle="Généalogies" />
      <div>
        <Genealogies />
      </div>
    </div>
  </Layout>
);
