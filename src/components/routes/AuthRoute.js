import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    </div>
  );
};

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(AuthRoute);
