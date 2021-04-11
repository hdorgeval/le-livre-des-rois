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
    const konwnIndex = (i % 20) + 1;
    switch (konwnIndex) {
      case 1:
        return 'color1';
      case 2:
        return 'color2';
      case 3:
        return 'color3';
      case 4:
        return 'color4';
      case 5:
        return 'color5';
      case 6:
        return 'color6';
      case 7:
        return 'color7';
      case 8:
        return 'color8';
      case 9:
        return 'color9';
      case 10:
        return 'color10';
      case 11:
        return 'color11';
      case 12:
        return 'color12';
      case 13:
        return 'color13';
      case 14:
        return 'color14';
      case 15:
        return 'color15';
      case 16:
        return 'color16';
      case 17:
        return 'color17';
      case 18:
        return 'color18';
      case 19:
        return 'color19';
      case 20:
        return 'color20';

      default:
        return 'color1';
    }
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
