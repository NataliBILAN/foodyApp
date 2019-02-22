import React from 'react';
import styled from 'styled-components';

import { PageTitle } from '../ui/PageTitle';

const AboutPage = () => (
  <AboutPageWrap>
    <PageTitle>About us</PageTitle>
  </AboutPageWrap>
);

const AboutPageWrap = styled.div`
  width: 80%;
  margin: 200px auto 0;
`;

export default AboutPage;
