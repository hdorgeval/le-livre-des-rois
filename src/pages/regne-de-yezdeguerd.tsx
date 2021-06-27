import { Layout, Title, SEO, YezdeguerdEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Yezdeguerd le méchant | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Yezdeguerd le méchant"
    />

    <div>
      <Title text="Règne de Yezdeguerd le méchant" subtitle="Son règne dura 21 ans." />
      <Container>
        <YezdeguerdEpisodes />
      </Container>
    </div>
  </Layout>
);
