import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const Profile = ({ isAuth, isLoading, user }) => {
  return isLoading ? (
    <div class='spinner-border justify-content-md-center' role='status'>
      <span class='sr-only'>Loading...</span>
    </div>
  ) : !isAuth ? (
    <Redirect to='/' />
  ) : (
    <div>
      <pre>
        <code>{JSON.stringify(user)}</code>
      </pre>
    </div>
  );
};
const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  isAuth: state.authReducer.isAuth,
  user: state.authReducer.user
});
export default connect(mapStateToProps)(Profile);
