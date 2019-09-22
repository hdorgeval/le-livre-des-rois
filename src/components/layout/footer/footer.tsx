import styles from './footer.module.scss';
import React from 'react';

export const Footer: React.FC = ({ children }) => (
  <footer className={styles.container}>
    <div className={styles.footer}>{children}</div>
  </footer>
);
