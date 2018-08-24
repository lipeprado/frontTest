import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import MainChart from "./MainChart";

import {
  Wrapper,
  WrapperInfo,
  InfoItem,
  CompanyTitle,
  WrapperTag,
  Tag
} from "./styled";

class InfoView extends Component {
  render() {
    const { info } = this.props;
    return (
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
            <WrapperTag>
              {info.tags.map((tag, i) => {
                return <Tag key={i}>{tag}</Tag>;
              })}
            </WrapperTag>
          </InfoItem>
          <InfoItem>
            <a href={info.website} target="_blank">
              {info.website}
            </a>
          </InfoItem>
        </WrapperInfo>
        <MainChart symbol={info.symbol} />
      </Wrapper>
    );
  }
}

InfoView.propTypes = {
  info: PropTypes.object.isRequired
};

export default InfoView;
