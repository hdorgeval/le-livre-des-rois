import styles from './tags.module.scss';
import { Layout, Title, Tags, SEO } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois"
      contentType="website"
      description="tous les tags du livre des Rois"
    />
    <div>
      <Title text="Le Livre des Rois" subtitle="Tags" />
      <div className={styles.content}>
        <Tags />
      </div>
    </div>
  </Layout>
);
