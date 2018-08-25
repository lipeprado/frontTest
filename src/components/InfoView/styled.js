import styled from "styled-components";

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

export const Wrapper = styled.section`
  display: flex;
  padding: 1rem 3rem;
  justify-content: space-between;
`;

export const WrapperInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
`;

export const InfoItem = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  padding: 0.8rem 1rem;
  max-width: 20rem;
  min-width: 20rem;
  margin-bottom: 0.4rem;
  a {
    text-decoration: none;
    color: #262626;
  }
`;

export const CompanyTitle = styled.h3`
  font-size: 2rem;
  color: #222626;
  position: relative;
  margin-left: 1rem;
  margin-bottom: 2rem;
  &:after {
    content: "";
    width: 4px;
    height: 100%;
    background-color: #4c00c0;
    position: absolute;
    top: 0;
    left: -1rem;
  }
`;

export const WrapperTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tag = styled.span`
  background-color: #4c00c0;
  margin-bottom: 0.4rem;
  padding: 0.4rem 1rem;
  font-size: 0.8rem;
  text-align: center;
  color: white;
`;

export const WrapperChart = styled.div`
  display: flex;
  padding: 4rem 3rem 0 3rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonLoadChart = styled.div`
  display: flex;
  padding: 1rem 2rem;
`;
