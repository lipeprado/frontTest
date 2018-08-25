import React, { Component } from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";

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
    const { onClear } = this.props;
    return (
      <WrapperSearch>
        <TextInput
          onChange={this.onInputChange}
          placeholder="Get Latest Company's Prices"
        />
        <OKButton onClick={this.onSubmit}>
          <FontAwesome style={{ marginRight: ".4rem" }} name="search" />
          Search
        </OKButton>
        <OKButton clear onClick={onClear}>
          <FontAwesome name="trash" /> Clear
        </OKButton>
      </WrapperSearch>
    );
  }
}

SearchCompany.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default SearchCompany;
