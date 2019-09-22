import styles from './404.module.scss';
import { Layout } from '../components';
import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <Layout>
    <div className={styles.content}>
      <h1 className={styles.header}>Oops</h1>
      <p className={styles.errorMessage}>La page que vous cherchez n&apos;existe pas</p>
      <Link to="/">Le Livre des Rois</Link>
    </div>
  </Layout>
);
