import React, { Component } from "react";
import PropTypes from "prop-types";

import { TextInput, OKButton, WrapperSearch } from "./styled";

class SearchCompany extends Component {
  state = {
    symbol: undefined
  };
  onInputChange = e => {
    this.setState({
      symbol: e.target.value
    });
  };

  onSubmit = () => {
    const { symbol } = this.state;
    const { onSubmit } = this.props;
    onSubmit(symbol);
  };

  render() {
    return (
      <WrapperSearch>
        <TextInput
          onChange={this.onInputChange}
          placeholder="Get Latest Company's Prices"
        />
        <OKButton onClick={this.onSubmit}>Search</OKButton>
      </WrapperSearch>
    );
  }
}

SearchCompany.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchCompany;
