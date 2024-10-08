import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background-color: #1a1a1a;
    --primary-text-color: #ffffff;
    --secondary-text-color: #cccccc;

    --button-background-color: #333333; /* nicht aktive  */
    --button-text-color: #ffffff; /* nicht aktive  */
    --button-active-text-color: #333333;
    --button-active-color: #e0e0e0; /* aktive  */
    --button-hover-color: #444444; /* hover */
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: system-ui;
    background-color: var(--background-color);
    color: var(--primary-text-color);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--primary-text-color);
  }

  p {
    color: var(--secondary-text-color);
  }
`;
