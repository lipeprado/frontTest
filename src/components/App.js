import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Login from './Login/LoginContainer';
import Welcome from './github/search/SearchContainer';
//import Header from './common/Header';

// ROUTE TYPE
import AuthRoute from './routes/AuthRoute';
import GuestRoute from './routes/GuestRoute';

// Actions
import * as authActions from '../actions/AuthActions';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      current_user: {},
    };
  }

  render() {
    const { location } = this.props;
    return (
      <section>
        <Switch>
          <GuestRoute
            location={location}
            exact
            path="/login"
            component={Login}
          />
          <AuthRoute location={location} exact path="/" component={Welcome} />
          <AuthRoute
            location={location}
            exact
            path="/dashboard"
            component={() => <h3>Dashboard</h3>}
          />
          <Route component={() => <h3>404</h3>} />
        </Switch>
      </section>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isAuthenticating: PropTypes.bool.isRequired,
  current_user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log('s', state);

  return {
    isAuthenticated: state.auth.isAuthenticated,
    isAuthenticating: state.auth.isAuthenticating,
    current_user: state.auth.auth_user || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, authActions), dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
