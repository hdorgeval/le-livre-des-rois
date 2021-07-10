import React from 'react';

export interface TitleProps {
  text: string;
  subtitle: string;
}
export const Title: React.FC<TitleProps> = ({ text, subtitle }) => (
  <section className="text-light text-center text-uppercase border-bottom border-bottom-1 border-secondary pb-1 pt-2 mb-3">
    {text && <h1>{text}</h1>}
    {subtitle && subtitle.length > 0 && <h2 className="text-muted fs-4">{subtitle}</h2>}
  </section>
);
