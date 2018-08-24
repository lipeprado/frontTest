import styled from "styled-components";

export const WrapperLoader = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
`;

export const LoaderMessage = styled.span`
  margin: 0 1rem;
  color: white;
  font-size: 2rem;
`;
