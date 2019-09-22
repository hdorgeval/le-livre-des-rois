import styles from '../header.module.scss';
import React from 'react';
import { Link } from 'gatsby';
export const HomeButton: React.FC = () => (
  <Link to="/">
    <div className={styles.buttonHome}>Accueil</div>
  </Link>
);
