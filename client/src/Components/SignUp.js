import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
    const { isLoading, user } = this.props;
    return isLoading ? (
      <div class='spinner-border justify-content-md-center' role='status'>
        <span class='sr-only'>Loading...</span>
      </div>
    ) : user ? (
      <Redirect to='/' />
    ) : (
      <form className='container ml-auto' onSubmit={this.register}>
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
            type='text'
            name='name'
            placeholder='name'
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
          <input
            className='form-control'
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
    );
  }
}
const mapsStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  user: state.authReducer.user
});
export default connect(mapsStateToProps, { register })(SignUp);
