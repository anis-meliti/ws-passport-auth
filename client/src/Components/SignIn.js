import React, { Component } from 'react';
class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  changeHandler = e =>
    this.setState({ ...this.state, [e.target.name]: e.target.value });

  login = e => {
    e.preventDefault();
  };
  render() {
    return (
      <form className='container ml-auto' onSubmit={this.login}>
        <h1>Welcome to Our App </h1>

        <div className='row mt-2 justify-content-md-center'>
          <input
            className='form-control'
            type='text'
            name='email'
            placeholder='email'
            onChange={this.changeHandler}
          />
        </div>

        <div className='row mt-2 justify-content-md-center'>
          <input
            className='form-control'
            type='password'
            name='password'
            placeholder='password'
            onChange={this.changeHandler}
          />
        </div>

        <div className='row mt-2 justify-content-md-center'>
          <button className='btn btn-outline-primary' onClick={this.login}>
            Register
          </button>
          <button type='reset' className='btn btn-outline-danger'>
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default SignIn;
