import styled from "styled-components";

export const WrapperSearch = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const TextInput = styled.input`
  padding: 1rem;
  border: 1px solid #4c00c0;
  min-width: 25rem;
  &:focus {
    border-color: #4c00c0;
  }
`;

export const OKButton = styled.div`
  padding: 1rem;
  background-color: ${props => (props.clear ? "#EC6A5C" : "#4c00c0")};
  color: white;
  cursor: pointer;
  margin-right: 0.4rem;
  &:hover {
    background-color: ${props => (props.clear ? "#EC6A6C " : "#4c00d3")};
  }
`;
