import styles from './regne-de-lohrasp.module.scss';
import { Layout, Title, SEO, GuschtaspEpisodes } from '../components';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO title="Le Livre des Rois" contentType="website" description="Le règne de Guschtasp" />

    <div>
      <Title text="Le règne de Guschtasp" subtitle="Son règne dura 100 ans." />
      <div className={styles.content}>
        <br />
        <GuschtaspEpisodes />
      </div>
    </div>
  </Layout>
);
