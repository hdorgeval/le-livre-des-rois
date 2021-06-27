import { Layout, Title, SEO, ArdeschirBabekanEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Ardeschir Babekan | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Ardeschir Babekan"
    />

    <div>
      <Title text="Règne de Ardeschir Babekan" subtitle="Son règne dura 40 ans." />
      <Container>
        <ArdeschirBabekanEpisodes />
      </Container>
    </div>
  </Layout>
);
