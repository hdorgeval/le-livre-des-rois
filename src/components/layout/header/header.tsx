import React from 'react';
import { Link } from 'gatsby';

export const Header: React.FC = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-expand-md sticky-top">
    <div className="container-fluid text-right">
      <button
        className="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#responsiveNavBar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="responsiveNavBar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item ms-auto">
            <Link className="nav-link" to="/" aria-label="Accueil">
              Couverture
            </Link>
          </li>
          <li className="nav-item ms-auto">
            <Link className="nav-link" to="/tags" aria-label="tags">
              <div>Lexique</div>
            </Link>
          </li>
          <li className="nav-item ms-auto">
            <Link className="nav-link" to="/genealogies" aria-label="généalogies">
              <div>Généalogies</div>
            </Link>
          </li>
          <li className="nav-item ms-auto">
            <Link className="nav-link" to="/about" aria-label="généalogies">
              <div>A propos</div>
            </Link>
          </li>
          <li className="nav-item ms-auto">
            <a
              className="nav-link"
              href="https://github.com/hdorgeval/le-livre-des-rois/discussions/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>GitHub</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
