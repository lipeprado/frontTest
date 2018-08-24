import styled from "styled-components";

export const WrapperSearch = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const TextInput = styled.input`
  padding: 1rem;
  border: 1px solid #4c00c0;
  min-width: 15rem;
  &:focus {
    border-color: #4c00c0;
  }
`;

export const OKButton = styled.div`
  padding: 1rem;
  background-color: #4c00c0;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #4c00d3;
  }
`;
