import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 75%;
  }

  @media (min-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (min-width: 992px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (min-width: 1200px) {
    html {
      font-size: 100%;
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['secondary-500']};
  }

  body {
    background: ${pros => pros.theme['primary-100']};
    color: ${pros => pros.theme['gray-300']};
		-webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, select, button {
    font: 400 1rem 'Roboto', sans-serif;
    color: ${props => props.theme['gray-300']};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;