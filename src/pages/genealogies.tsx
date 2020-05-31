import styles from './genealogies.module.scss';
import { Layout, Title, SEO, Genealogies } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO title="Le Livre des Rois" contentType="website" description="généalogies" />
    <div>
      <Title text="Le Livre des Rois" subtitle="Généalogies" />
      <div className={styles.content}>
        <Genealogies />
      </div>
    </div>
  </Layout>
);
