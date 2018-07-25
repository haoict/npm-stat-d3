import { normalize } from 'polished';
import { generateMedia } from 'styled-media-query';

export const font = {
  base: `BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif`,
  monospace: `"Inconsolata", "Consolas", "Monaco", monospace`
};

export const media = generateMedia({
  tablet: '769px',
  desktop: '1024px',
  widescreen: '1216px',
  fullhd: '1408px'
});

export const spacing = {
  small: '0.5rem',
  medium: '1rem',
  big: '1.5rem',
  large: '2rem'
};

export const colors = {
  white: ' #fff',
  dark: '#484848',
  gray: '#bec4c8',
  blue: '#4a9eda',
  indigo: '#6872e0',
  violet: '#9966e0',
  fuschia: '#d665e0',
  pink: '#e066ad',
  red: '#e16973',
  orange: '#da864a',
  yellow: '#d7c938',
  lime: '#96d73b',
  green: '#54da48',
  teal: '#46da84',
  cyan: '#44d9cd'
};

export const sizes = {
  base: '1rem',
  size1: '3.5rem',
  size2: '2.75rem',
  size3: '2rem',
  size4: '1.5rem',
  size5: '1.25rem',
  size6: '0.875rem',
  size7: '0.75rem'
};

export const fontWeight = {
  light: 300,
  normal: 400,
  semibold: 500,
  bold: 700
};

export const globalStyles = `
  html,
  body {
    background-color: ${colors.white};
    font-family: ${font.base};
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }

  ${normalize()}
`;
