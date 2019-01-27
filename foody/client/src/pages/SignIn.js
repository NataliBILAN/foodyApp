import React from 'react';
import { PageTitle } from '../ui/PageTitle';
import SignInForm from '../modules/user/AuthForms/SignInForm';

const SignInPage = () => (
  <div>
    <PageTitle>Sign in</PageTitle>
    <SignInForm />
  </div>
);

export default SignInPage;
