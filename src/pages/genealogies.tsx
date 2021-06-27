import { Layout, Title, SEO, Genealogies } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Généalogies | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="généalogies"
    />
    <div>
      <Title text="Le Livre des Rois - Shâhnâmeh" subtitle="Généalogies" />
      <Container>
        <Genealogies />
      </Container>
    </div>
  </Layout>
);
