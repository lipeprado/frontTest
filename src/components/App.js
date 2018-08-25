import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import Stock from "./stocks/StockContainer";

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <section>
        <Switch>
          <Route location={location} exact path="/" component={Stock} />
          <Route component={() => <h3>404</h3>} />
        </Switch>
      </section>
    );
  }
}

App.propTypes = {
  location: PropTypes.object
};

export default App;
