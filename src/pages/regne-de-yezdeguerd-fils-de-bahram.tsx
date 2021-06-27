import { Layout, Title, SEO, YezdeguerdSonOfBahramEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Yezdeguerd fils de Bahram Gour | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Yezdeguerd fils de Bahram Gour"
    />

    <div>
      <Title text="Règne de Yezdeguerd fils de Bahram Gour" subtitle="Son règne dura 18 ans." />
      <Container>
        <YezdeguerdSonOfBahramEpisodes />
      </Container>
    </div>
  </Layout>
);
