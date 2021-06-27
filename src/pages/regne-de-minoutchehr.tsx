import { Layout, Title, SEO, MinoutchehrEpisodes } from '../components';
import React from 'react';
import Container from 'react-bootstrap/Container';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Règne de Minoutchehr | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Règne de Minoutchehr"
    />

    <div>
      <Title text="Règne de Minoutchehr" subtitle="Son règne dura 120 ans." />
      <Container>
        <MinoutchehrEpisodes />
      </Container>
    </div>
  </Layout>
);
