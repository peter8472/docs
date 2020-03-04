import {css} from "emotion";

/*
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0.5rem;
    background-color: rgba(0, 0, 0, 0.125);
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0.125);
    cursor: pointer;
  }
*/

export const normalizeStyle = css`
  html,
  body {
    scroll-behavior: auto;
    color: var(--font-color);
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border-width: 0;
    border-radius: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  }

  *:focus {
    outline: none;
  }
`;
