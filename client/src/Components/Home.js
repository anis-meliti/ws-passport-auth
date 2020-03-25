import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ isLoading }) => {
  return isLoading ? (
    <div className='spinner-border justify-content-md-center' role='status'>
      <span className='sr-only'>Loading...</span>
    </div>
  ) : (
    <div>
      <h1>HOME SWEET HOME </h1>
      <Link to='/profile'>Profile</Link>
    </div>
  );
};
const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading
});
export default connect(mapStateToProps)(Home);
