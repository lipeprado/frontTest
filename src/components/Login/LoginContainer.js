import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/AuthActions';

import './styles.sass';

class LoginContainer extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  _onlogin = () => {
    const { actions } = this.props;
    const user = {
      username: 'creditopessoal',
      password: 'novasenha',
    };
    actions.login(user);

  };

  render() {
    return <div className="container" onClick={this._onlogin}>Login</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch),
  };
};
export default connect(
  null,
  mapDispatchToProps,
)(LoginContainer);
