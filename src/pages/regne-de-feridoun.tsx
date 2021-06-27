import { Layout, Title, SEO, FeridounEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Feridoun | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Feridoun"
    />

    <div>
      <Title text="Règne de Feridoun" subtitle="Son règne dura 500 ans." />
      <Container>
        <FeridounEpisodes />
      </Container>
    </div>
  </Layout>
);
