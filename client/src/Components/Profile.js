import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { isAuthorized } from '../JS/actions/actions';
class Profile extends React.Component {
  componentDidMount() {
    this.props.isAuthorized();
  }
  render() {
    const { isAuth, profile } = this.props;
    return !isAuth ? (
      <Redirect to='/' />
    ) : (
      <div>
        <pre>
          <code>{JSON.stringify(profile)}</code>
        </pre>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  profile: state.authReducer.profile
});
export default connect(mapStateToProps, { isAuthorized })(Profile);
