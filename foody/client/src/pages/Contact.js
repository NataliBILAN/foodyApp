import React from 'react';
import styled from 'styled-components';

import { PageTitle } from '../ui/PageTitle';

const ContactPage = () => (
  <ContactPageWrap>
    <PageTitle>Contact us</PageTitle>
  </ContactPageWrap>
);
const ContactPageWrap = styled.div`
  width: 80%;
  margin: 200px auto 0;
`;

export default ContactPage;
