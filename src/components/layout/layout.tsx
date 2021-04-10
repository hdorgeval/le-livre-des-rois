import { Header } from './header/header';
import { Footer } from './footer/footer';
import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export const Layout: React.FunctionComponent = ({ children }) => (
  <div>
    <Helmet>
      <body className="dark"></body>
    </Helmet>
    <Header />
    <div>{children}</div>
    <Footer>
      {' '}
      <Link to="/about" aria-label="A propos">
        A propos
      </Link>{' '}
      du livre des rois 2019-2021
    </Footer>
  </div>
);
