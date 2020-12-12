import styles from './regne-de-khosrou.module.scss';
import { Layout, Title, SEO, KhosrouEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois - Shâhnâmeh"
      contentType="website"
      description="Le règne de Keï Khosrou"
    />

    <div>
      <Title text="Le règne de Keï Khosrou" subtitle="Son règne dura 60 ans." />
      <div className={styles.content}>
        <br />
        <KhosrouEpisodes />
      </div>
    </div>
  </Layout>
);
