import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font-family: inherit;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

img,
picture,
svg {
max-width: 100%;
display: block;
}

body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
  background-color: #f5f5f9;;
}
`;

export default GlobalStyle;
