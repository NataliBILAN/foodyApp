import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Form, Input, Label } from './Common';
import { Button } from '../../../ui/Button';

const INITIAL_STATE = { name: '', email: '', password: '' };

export default class SingUpForm extends Component {
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
    const { name, email, password } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </Label>

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
        <Button>Sign up</Button>
      </Form>
    );
  }
}
