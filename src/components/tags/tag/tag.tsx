import styles from './tag.module.scss';
import React from 'react';
// import randomColor from 'randomcolor';

export interface TagProps {
  text: string;
  size: number;
  index: number;
}
export const Tag: React.FC<TagProps> = ({ text, size, index }) => {
  const getStyleByIndex = (i: number) => {
    const konwnIndex = (i + 1) % 20;
    switch (konwnIndex) {
      case 1:
        return styles.color1;
      case 2:
        return styles.color2;
      case 3:
        return styles.color3;
      case 4:
        return styles.color4;
      case 5:
        return styles.color5;
      case 6:
        return styles.color6;
      case 7:
        return styles.color7;
      case 8:
        return styles.color8;
      case 9:
        return styles.color9;
      case 10:
        return styles.color10;
      case 11:
        return styles.color11;
      case 12:
        return styles.color12;
      case 13:
        return styles.color13;
      case 14:
        return styles.color14;
      case 15:
        return styles.color15;
      case 16:
        return styles.color16;
      case 17:
        return styles.color17;
      case 18:
        return styles.color18;
      case 19:
        return styles.color19;
      case 20:
        return styles.color20;

      default:
        return styles.color1;
    }
  };
  return (
    <div className={styles.tag}>
      <span
        className={getStyleByIndex(index)}
        style={{
          fontSize: 30 * (1 + Math.log10(size)),
          // color: randomColor({
          //   hue: 'gray',
          //   alpha: 0.9,
          //   luminosity: 'dark',
          //   format: 'rgba',
          // }),
        }}
      >
        {text}{' '}
      </span>
    </div>
  );
};
