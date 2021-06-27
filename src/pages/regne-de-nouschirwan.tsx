import { Layout, Title, SEO, NouschirwanEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Kesra Nouschirwan | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Kesra Nouschirwan"
    />

    <div>
      <Title text="Règne de Kesra Nouschirwan" subtitle="Son règne dura 48 ans." />
      <Container>
        <NouschirwanEpisodes />
      </Container>
    </div>
  </Layout>
);
