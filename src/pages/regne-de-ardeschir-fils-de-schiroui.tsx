import { Layout, Title, SEO, ArdeschirSonOfSchirouiEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Ardeschir fils de Schirouï | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Ardeschir fils de Schirouï"
    />

    <div>
      <Title text="Règne de Ardeschir fils de Schirouï" subtitle="Son règne dura 6 mois." />
      <Container>
        <ArdeschirSonOfSchirouiEpisodes />
      </Container>
    </div>
  </Layout>
);
