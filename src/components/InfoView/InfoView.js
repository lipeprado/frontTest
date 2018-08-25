import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import FontAwesome from "react-fontawesome";
import MainChart from "./MainChart";

import {
  Wrapper,
  WrapperInfo,
  InfoItem,
  CompanyTitle,
  WrapperTag,
  Tag,
  WelcomeScreen,
  WelcomeTitle
} from "./styled";

class InfoView extends Component {
  render() {
    const { info } = this.props;
    return (
      <Fragment>
        {!_.isEmpty(info) ? (
          <Wrapper>
            <WrapperInfo>
              <CompanyTitle>{info.companyName}</CompanyTitle>
              <InfoItem>
                <h3>{info.CEO}</h3>
              </InfoItem>
              <InfoItem>
                <h3>industry</h3>
              </InfoItem>
              <InfoItem>
                {info !== {} && (
                  <WrapperTag>
                    {info.tags.map((tag, i) => {
                      return <Tag key={i}>{tag}</Tag>;
                    })}
                  </WrapperTag>
                )}
              </InfoItem>
              <InfoItem>
                <a href={info.website} target="_blank">
                  {info.website}
                </a>
              </InfoItem>
            </WrapperInfo>
            <MainChart symbol={info.symbol} />
          </Wrapper>
        ) : (
          <WelcomeScreen>
            <WelcomeTitle>
              Here you can find more about Company stocks
            </WelcomeTitle>
            <FontAwesome name="smile-o" />
          </WelcomeScreen>
        )}
      </Fragment>
    );
  }
}

InfoView.propTypes = {
  info: PropTypes.object.isRequired
};

export default InfoView;
