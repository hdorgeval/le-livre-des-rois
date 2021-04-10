import React from 'react';
import { Link } from 'gatsby';
export const TagsButton: React.FC = () => (
  <Link to="/tags" aria-label="tags">
    <div>Lexique</div>
  </Link>
);
