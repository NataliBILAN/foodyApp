import React from 'react';
import styled from 'styled-components';

import { PageTitle } from '../ui/PageTitle';
import SignInForm from '../modules/user/AuthForms/SignInForm';
import WithAuth from '../components/hoc/WithAuth';

const SignInPage = () => (
  <SignInPageWrap>
    <PageTitle>Sign in</PageTitle>
    <SignInForm />
  </SignInPageWrap>
);

const SignInPageWrap = styled.div`
  width: 80%;
  margin: 200px auto 0;
`;

export default WithAuth(SignInPage);
