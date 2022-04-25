import emotionReset from 'emotion-reset';
import { Global, css, keyframes } from '@emotion/react';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        body {
          font-family: EightBitDragon, sans-serif;
        }

        a {
          text-decoration: none;
        }

        @font-face {
          font-family: 'EightBitDragon';
          src: url('/fonts/EightBitDragon-anqx.ttf') format('truetype');
        }
      `}
    />
  );
}

type ColorToken = 'navy' | 'gray';

type ColorTheme = {
  scheme: Record<ColorToken, string>;
};

const pallete: Readonly<ColorTheme> = {
  scheme: {
    navy: '#252a4a',
    gray: '#abbbd2',
  },
};

export default pallete;
