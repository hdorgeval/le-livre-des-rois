import styles from './layout.module.scss';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export const Layout: React.FunctionComponent = ({ children }) => (
  <div className={styles.container}>
    <Helmet>
      <body className="dark"></body>
    </Helmet>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer>
      {' '}
      <Link to="/about" aria-label="A propos">
        A propos
      </Link>{' '}
      du livre des rois 2019-2020
    </Footer>
  </div>
);
