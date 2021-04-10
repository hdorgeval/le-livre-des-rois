import React from 'react';

export interface TitleProps {
  text: string;
  subtitle: string;
}
export const Title: React.FC<TitleProps> = ({ text, subtitle }) => (
  <section>
    <h1>{text}</h1>
    {subtitle && subtitle.length > 0 && <div>{subtitle}</div>}
  </section>
);
