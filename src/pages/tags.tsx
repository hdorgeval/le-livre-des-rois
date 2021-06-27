import { Layout, Title, Tags, SEO } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Lexique | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Lexique du livre des Rois"
    />
    <div>
      <Title text="Le Livre des Rois - Shâhnâmeh" subtitle="Lexique" />
      <p className="text-center text-small text-muted border-bottom border-bottom-1 border-secondary pb-3">
        Chaque mot est clickable
      </p>
      <Container>
        <Tags />
      </Container>
    </div>
  </Layout>
);
