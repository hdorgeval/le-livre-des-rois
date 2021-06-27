import { Layout, Title, SEO, BahmanEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Bahman | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Bahman"
    />

    <div>
      <Title text="Règne de Bahman" subtitle="Son règne dura 99 ans." />
      <Container>
        <BahmanEpisodes />
      </Container>
    </div>
  </Layout>
);
