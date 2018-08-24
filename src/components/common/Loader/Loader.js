import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";

import { WrapperLoader, LoaderMessage } from "./styled";

const Loader = props => {
  return (
    <WrapperLoader>
      <FontAwesome style={{ color: "white" }} name="spinner" spin />
      <LoaderMessage>Carregando...</LoaderMessage>
    </WrapperLoader>
  );
};

Loader.propTypes = {};

export default Loader;
