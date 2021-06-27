import { Layout, Title, SEO, SchapourSonOfSchapourEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Schapour fils de Schapour | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Schapour fils de Schapour"
    />

    <div>
      <Title text="Règne de Schapour fils de Schapour" subtitle="Son règne dura 5 ans." />
      <Container>
        <SchapourSonOfSchapourEpisodes />
      </Container>
    </div>
  </Layout>
);
