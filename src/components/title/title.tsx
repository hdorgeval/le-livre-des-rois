import styles from './title.module.scss';
import React from 'react';

export interface TitleProps {
  text: string;
  subtitle: string;
}
export const Title: React.FC<TitleProps> = ({ text, subtitle }) => (
  <section className={styles.container}>
    <h1 className={styles.title}>{text}</h1>
    {subtitle && subtitle.length > 0 && <div className={styles.subtitle}>{subtitle}</div>}
  </section>
);
