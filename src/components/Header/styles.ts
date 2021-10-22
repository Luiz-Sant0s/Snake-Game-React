import styled from "styled-components";

export const HeaderContainer = styled.div`
  border-bottom: 4px solid #000;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1024px) {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.2rem;
    }
  }
`;

export const PointScreenContainer = styled.div`
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;
