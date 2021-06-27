import { Layout, Title, SEO, KhosrouEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Keï Khosrou | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Keï Khosrou"
    />

    <div>
      <Title text="Règne de Keï Khosrou" subtitle="Son règne dura 60 ans." />
      <Container>
        <KhosrouEpisodes />
      </Container>
    </div>
  </Layout>
);
