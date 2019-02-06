import React from 'react';
import { PageTitle } from '../ui/PageTitle';
import SingUpForm from '../modules/user/AuthForms/SingUpForm';
import WithAuth from '../components/hoc/WithAuth';

const SignUpPage = () => (
  <div>
    <PageTitle>Sign up</PageTitle>
    <SingUpForm />
  </div>
);

export default WithAuth(SignUpPage);
