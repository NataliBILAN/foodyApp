import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const baseStyle = createGlobalStyle`
${reset}

body {
  font-family: 'Patrick Hand';
  font-size: 18px;
}
`;

export default baseStyle;
