import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const baseStyle = createGlobalStyle`
${reset}

body {
  font-family: 'Patrick Hand';
}
`;

export default baseStyle;
