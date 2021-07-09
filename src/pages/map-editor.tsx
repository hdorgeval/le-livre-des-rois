import { Layout, Title, SEO, LeafletEditor } from '../components';
import React from 'react';
const Index: React.FC = () => (
  <Layout>
    <SEO
      lang="fr"
      title=" Map Editor| Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Outil de création de données geoJSON"
    />
    <div>
      <Title text="Le Livre des Rois - Shâhnâmeh" subtitle="Map Editor" />
      <div className="container">
        <LeafletEditor />
      </div>
    </div>
  </Layout>
);

export default Index;
