import { Layout, Title, SEO, MinoutchehrEpisodes } from '../components';
import React from 'react';
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
      <div className="container">
        <MinoutchehrEpisodes />
      </div>
    </div>
  </Layout>
);
