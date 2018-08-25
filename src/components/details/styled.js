import styled from "styled-components";

export const WrapperDetails = styled.section`
  display: flex;
  justify-content: center;
  padding: 4rem 3rem;
`;

export const WelcomeScreen = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 6rem 3rem 3rem 3rem;
  span {
    font-size: 4rem;
    color: #4c00c0;
  }
`;

export const WelcomeTitle = styled.h2`
  color: #4c00c0;
  font-size: 2rem;
  font-family: inherit;
`;
export const InfoCard = styled.div`
  padding: 2rem 2.5rem;
  background-color: #fff;
  margin: 0 1rem;
  min-width: 10rem;
  min-height: 5rem;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    margin: 1rem 0 0 0;
  }
`;

export const SymbolDetails = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  a {
    padding: 0.5rem 1rem;
    border: 1px dotted #cccccc;
    color: black;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: #4c00c0;
      border: 1px dotted #4c00c0;
    }
  }
`;
