import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

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
          background-color: #f13d22;
        }
      `}
    />
  );
}
