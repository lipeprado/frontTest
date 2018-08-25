import React from "react";
import FontAwesome from "react-fontawesome";

import { WrapperLoader, LoaderMessage } from "./styled";

const Loader = () => {
  return (
    <WrapperLoader>
      <FontAwesome style={{ color: "white" }} name="spinner" spin />
      <LoaderMessage>Carregando...</LoaderMessage>
    </WrapperLoader>
  );
};

export default Loader;
