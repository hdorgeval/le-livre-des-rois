import { Layout, Title, SEO, KobadEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Keï Kobad | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Keï Kobad"
    />

    <div>
      <Title text="Règne de Keï Kobad" subtitle="Son règne dura 100 ans." />
      <Container>
        <KobadEpisodes />
      </Container>
    </div>
  </Layout>
);
