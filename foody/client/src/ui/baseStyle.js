import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const baseStyle = createGlobalStyle`
${reset}

body {
  font-family: 'Patrick Hand';
  font-size: 20px;
}

a {
    text-decoration: none;
}
`;

export default baseStyle;
