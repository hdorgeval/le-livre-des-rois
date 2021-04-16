import React from 'react';
import { Link } from 'gatsby';
import './tag.css';

export interface TagProps {
  text: string;
  size: number;
  index: number;
}
export const Tag: React.FC<TagProps> = ({ text, size, index }) => {
  const getStyleByIndex = (i: number) => {
    const konwnIndex = (i % 22) + 1;
    return `color${konwnIndex}`;
  };
  return (
    <span
      className={`tag ${getStyleByIndex(index)}`}
      style={{
        fontSize: 30 * (1 + Math.log10(size)),
      }}
    >
      <Link to={`/tag/${text}`} aria-label={`voir tous les articles liés à ${text}`}>
        {text}
      </Link>{' '}
      {''}
    </span>
  );
};
