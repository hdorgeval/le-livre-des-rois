import { Layout, Title, SEO, DjemschidEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Djemschid | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Djemschid"
    />

    <div>
      <Title text="Règne de Djemschid" subtitle="Son règne dura 700 ans." />
      <Container>
        <DjemschidEpisodes />
      </Container>
    </div>
  </Layout>
);
