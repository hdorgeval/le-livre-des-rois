import { Layout, Title, SEO, KaioumorsEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Kaïoumors | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Kaïoumors"
    />

    <div>
      <Title text="Règne de Kaïoumors" subtitle="Son règne dura 30 ans." />
      <Container>
        <KaioumorsEpisodes />
      </Container>
    </div>
  </Layout>
);
