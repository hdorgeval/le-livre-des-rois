import React from 'react';

export interface TitleProps {
  text: string;
  subtitle: string;
}
export const Title: React.FC<TitleProps> = ({ text, subtitle }) => (
  <section className="text-light text-center text-uppercase border-bottom border-bottom-1 border-secondary pb-0">
    <h1>{text}</h1>
    {subtitle && subtitle.length > 0 && <h4 className="text-muted">{subtitle}</h4>}
  </section>
);
