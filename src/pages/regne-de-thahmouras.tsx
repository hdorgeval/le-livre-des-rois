import { Layout, Title, SEO, ThahmourasEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Thahmouras | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Thahmouras"
    />

    <div>
      <Title text="Règne de Thahmouras" subtitle="Son règne dura 30 ans." />
      <Container>
        <ThahmourasEpisodes />
      </Container>
    </div>
  </Layout>
);
