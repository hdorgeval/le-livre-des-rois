import React from 'react';
import { Link } from 'gatsby';

export const Header: React.FC = () => (
  <nav className="navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
    <div className="container-fluid">
      <button
        className="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#responsiveNavBar"
        aria-label="Ouvrir ou fermer la navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="responsiveNavBar">
        <ul className="navbar-nav">
          <li className="nav-item ms-auto">
            <Link className="nav-link" to="/" aria-label="Accueil">
              Couverture
            </Link>
          </li>
          <li className="nav-item ms-auto">
            <Link className="nav-link" to="/tags" aria-label="tags">
              Lexique
            </Link>
          </li>
          <li className="nav-item ms-auto">
            <Link className="nav-link" to="/genealogies" aria-label="généalogies">
              Généalogies
            </Link>
          </li>
          <li className="nav-item ms-auto">
            <Link className="nav-link" to="/about" aria-label="généalogies">
              A propos
            </Link>
          </li>
          <li className="nav-item ms-auto">
            <a
              className="nav-link"
              href="https://github.com/hdorgeval/le-livre-des-rois/discussions/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
