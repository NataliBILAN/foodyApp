import React from 'react';
import { PageTitle } from '../ui/PageTitle';
import SignInForm from '../modules/user/AuthForms/SignInForm';
import WithAuth from '../components/hoc/WithAuth';

const SignInPage = () => (
  <div>
    <PageTitle>Sign in</PageTitle>
    <SignInForm />
  </div>
);

export default WithAuth(SignInPage);
