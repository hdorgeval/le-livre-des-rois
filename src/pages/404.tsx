import styles from './404.module.scss';
import { Layout, SEO } from '../components';
import React from 'react';
import { Link } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      title="Le Livre des Rois"
      contentType="website"
      description="La page que vous cherchez n'existe pas"
    />
    <div className={styles.content}>
      <h1 className={styles.header}>Oops</h1>
      <p className={styles.errorMessage}>La page que vous cherchez n&apos;existe pas</p>
      <Link to="/" aria-label="Le livre des rois">
        Le Livre des Rois
      </Link>
    </div>
  </Layout>
);
