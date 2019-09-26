import styles from './about.module.scss';
import { Layout, Title, LohraspArticles } from '../components';
import React from 'react';

export default () => (
  <Layout>
    <div>
      <Title text="Le règne de Lohrasp" subtitle="Son règne dura 120 ans." />
      <div className={styles.content}>
        <br />
        <LohraspArticles />
      </div>
    </div>
  </Layout>
);
