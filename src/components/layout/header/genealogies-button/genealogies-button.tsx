import styles from '../header.module.scss';
import React from 'react';
import { Link } from 'gatsby';
export const GenealogiesButton: React.FC = () => (
  <Link to="/genealogies" aria-label="généalogies">
    <div className={styles.buttonTags}>Généalogies</div>
  </Link>
);
