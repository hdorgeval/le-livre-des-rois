import styles from './layout.module.scss';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import React from 'react';

export const Layout: React.FunctionComponent = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer>Le livre des rois 2019</Footer>
  </div>
);
