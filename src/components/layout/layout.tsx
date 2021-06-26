import { Footer, Header } from '.';
import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export const Layout: React.FunctionComponent = ({ children }) => (
  <div className="bg-dark">
    <Helmet>
      <body className="bg-dark"></body>
    </Helmet>
    <Header />
    <div>{children}</div>
    <Footer>
      <Link className="nav-link text-light" to="/about" aria-label="A propos">
        A propos du livre des rois 2019-2021
      </Link>
    </Footer>
  </div>
);
