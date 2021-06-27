import { Layout, Title, SEO, HouschengEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Houscheng | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Houscheng"
    />

    <div>
      <Title text="Règne de Houscheng" subtitle="Son règne dura 30 ans." />
      <Container>
        <HouschengEpisodes />
      </Container>
    </div>
  </Layout>
);
