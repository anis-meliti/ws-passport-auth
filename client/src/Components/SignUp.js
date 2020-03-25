import React, { Component } from 'react';
import { connect } from 'react-redux';

import { register } from '../JS/actions/actions';
class SignUp extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    phoneNumber: ''
  };
  changeHandler = e =>
    this.setState({ ...this.state, [e.target.name]: e.target.value });

  register = e => {
    e.preventDefault();
    this.props.register(this.state);
  };
  render() {
    return (
      <form className='container ml-auto' onSubmit={this.register}>
        <h1>Welcome to Our App </h1>
        <form>
          <div className='row mt-2 justify-content-md-center'>
            <input
              class='form-control'
              type='text'
              name='email'
              placeholder='email'
              onChange={this.changeHandler}
            />
          </div>
          <div className='row mt-2 justify-content-md-center'>
            <input
              class='form-control'
              type='text'
              name='name'
              placeholder='name'
              onChange={this.changeHandler}
            />
          </div>
          <div className='row mt-2 justify-content-md-center'>
            <input
              class='form-control'
              type='password'
              name='password'
              placeholder='password'
              onChange={this.changeHandler}
            />
          </div>
          <div className='row mt-2 justify-content-md-center'>
            <input
              class='form-control'
              type='text'
              name='phoneNumber'
              placeholder='Phone Number'
              onChange={this.changeHandler}
            />
          </div>
          <div className='row mt-2 justify-content-md-center'>
            <button className='btn btn-outline-primary' onClick={this.register}>
              Register
            </button>
            <button type='reset' className='btn btn-outline-danger'>
              Reset
            </button>
          </div>
        </form>
      </form>
    );
  }
}

export default connect(null, { register })(SignUp);
