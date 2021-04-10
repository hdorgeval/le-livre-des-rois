import React from 'react';
import { Link } from 'gatsby';
export const HomeButton: React.FC = () => (
  <Link to="/" aria-label="Accueil">
    <div>Accueil</div>
  </Link>
);
