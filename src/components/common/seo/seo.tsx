import React from 'react';
import { Helmet } from 'react-helmet';

export interface SEOProps {
  contentType: ContentType;
  description?: string;
  image?: string;
  lang: 'fr' | 'en';
  title: string;
  url?: string;
}

export type ContentType = 'article' | 'website';
export const SEO: React.FC<SEOProps> = ({ title, description, image, url, contentType, lang }) => (
  <Helmet>
    <html lang={lang} />
    <title>{title}</title>
    {url && <link rel="canonical" href={url} />}
    {description && <meta name="description" content={description} />}
    {image && <meta name="image" content={image} />}

    {url && <meta property="og:url" content={url} />}
    <meta property="og:type" content={contentType} />
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={image} />}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="" />
    <meta name="twitter:title" content={title} />
    {description && <meta name="twitter:description" content={description} />}
    {image && <meta name="twitter:image" content={image} />}
  </Helmet>
);
