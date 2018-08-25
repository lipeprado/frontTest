import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";

import {
  WrapperDetails,
  InfoCard,
  SymbolDetails,
  WelcomeScreen,
  WelcomeTitle
} from "./styled";

class Details extends Component {
  render() {
    const { latest_price, symbol_info, handleView } = this.props;
    const hasPrice = latest_price > 0;
    return (
      <Fragment>
        <WrapperDetails>
          {hasPrice ? (
            <Fragment>
              <InfoCard>
                <span>Latest Price:</span>
                <h3>
                  <FontAwesome name="usd" /> {latest_price}
                </h3>
              </InfoCard>
              <InfoCard>
                <span>Company Name:</span>
                <h3>{symbol_info.companyName}</h3>
              </InfoCard>
              <InfoCard>
                <span>Sector:</span>
                <h3>{symbol_info.sector}</h3>
              </InfoCard>
              <InfoCard>
                <span>Symbol:</span>
                <h3>{symbol_info.symbol}</h3>
              </InfoCard>
            </Fragment>
          ) : (
            <WelcomeScreen>
              <WelcomeTitle>
                Here you can find more about Company stocks
              </WelcomeTitle>
              <FontAwesome name="smile-o" />
            </WelcomeScreen>
          )}
        </WrapperDetails>
        {hasPrice && (
          <SymbolDetails>
            <a onClick={handleView}>Load All {symbol_info.companyName} Info</a>
          </SymbolDetails>
        )}
      </Fragment>
    );
  }
}

Details.propTypes = {
  latest_price: PropTypes.number.isRequired,
  symbol_info: PropTypes.object.isRequired,
  handleView: PropTypes.func.isRequired
};

export default Details;
