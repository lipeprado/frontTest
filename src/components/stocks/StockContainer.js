import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../common/Header/Header";
import Details from "../details/Details";
import InfoView from "../InfoView/InfoView";

import Loader from "../common/Loader/Loader";

import * as stockActions from "../../actions/stocks/actions";
import * as companyActions from "../../actions/company/actions";

class StockContainer extends Component {
  state = {
    setInfoView: false,
    symbol: ""
  };

  _handleSubmit = async symbol => {
    const { actions } = this.props;
    this.setState({
      symbol,
      setInfoView: false
    });
    await actions.getLatestPrice(symbol);
  };

  _handleView = () => {
    const { actions } = this.props;
    const { symbol } = this.state;
    this.setState({
      setInfoView: true
    });
    actions.getCompanyInfo(symbol);
  };

  _handleClear = () => {
    const { actions } = this.props;
    actions.clear();
    this.setState({
      setInfoView: false
    });
  };
  render() {
    const {
      latest_price,
      symbol_info,
      isFetching,
      info,
      isFetchingCompany
    } = this.props;
    const { setInfoView } = this.state;
    return (
      <div>
        <Header
          _handleSubmit={this._handleSubmit}
          onClear={this._handleClear}
        />
        {isFetching ? (
          <Loader />
        ) : !setInfoView ? (
          <Details
            handleView={this._handleView}
            latest_price={latest_price}
            symbol_info={symbol_info}
            isFetching={isFetching}
          />
        ) : isFetchingCompany ? (
          <Loader />
        ) : (
          <InfoView info={info} />
        )}
      </div>
    );
  }
}

StockContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  latest_price: PropTypes.number.isRequired,
  symbol_info: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchingCompany: PropTypes.bool.isRequired,
  info: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return {
    latest_price: state.stocks.latest_price,
    symbol_info: state.stocks.symbol_info,
    isFetching: state.stocks.isFetching,
    isFetchingCompany: state.company.isFetchingCompany,
    info: state.company.info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign({}, stockActions, companyActions),
      dispatch
    )
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockContainer);
