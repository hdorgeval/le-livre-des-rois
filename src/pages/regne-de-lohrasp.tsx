import styles from './about.module.scss';
import { Layout, Title, LohraspArticles, SEO } from '../components';
import React from 'react';

export default () => (
  <Layout>
    <SEO title="Le Livre des Rois" contentType="website" description="Le règne de Lohrasp" />

    <div>
      <Title text="Le règne de Lohrasp" subtitle="Son règne dura 120 ans." />
      <div className={styles.content}>
        <br />
        <LohraspArticles />
      </div>
    </div>
  </Layout>
);
