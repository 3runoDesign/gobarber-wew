import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: #fff;
    background-color: #312e38;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
