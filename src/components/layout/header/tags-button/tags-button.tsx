import styles from '../header.module.scss';
import React from 'react';
import { Link } from 'gatsby';
export const TagsButton: React.FC = () => (
  <Link to="/tags">
    <div className={styles.buttonTags}>Tags</div>
  </Link>
);
