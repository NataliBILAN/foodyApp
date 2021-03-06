import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Label } from './Common';
import { Button } from '../../../ui/Button';
import { signIn } from '../../../redux/auth/authOperations';

const INITIAL_STATE = { email: '', password: '' };

class SingInForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.setState({ ...INITIAL_STATE });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          E-mail
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="example@mail.com"
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
        </Label>
        <Button>Sign in</Button>
      </Form>
    );
  }
}

const mdts = { onSubmit: signIn };
export default connect(
  null,
  mdts,
)(SingInForm);