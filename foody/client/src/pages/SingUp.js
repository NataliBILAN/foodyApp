import React from 'react';
import styled from 'styled-components';

import { PageTitle } from '../ui/PageTitle';
import SingUpForm from '../modules/user/AuthForms/SingUpForm';
import WithAuth from '../components/hoc/WithAuth';

const SignUpPage = () => (
  <SignUpPageWrap>
    <PageTitle>Sign up</PageTitle>
    <SingUpForm />
  </SignUpPageWrap>
);

const SignUpPageWrap = styled.div`
  width: 80%;
  margin: 200px auto 0;
`;

export default WithAuth(SignUpPage);
