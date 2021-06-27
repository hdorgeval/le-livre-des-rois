import { Layout, Title, SEO, HormuzdEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne d'HOrmuzd | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne d'Hormuzd"
    />

    <div>
      <Title text="Règne d'HOrmuzd" subtitle="Son règne dura 14 ans." />
      <Container>
        <HormuzdEpisodes />
      </Container>
    </div>
  </Layout>
);
