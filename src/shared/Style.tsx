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

export const BounceInAnimation = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

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
