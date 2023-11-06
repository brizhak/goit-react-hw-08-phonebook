import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 80vh;
`;

export const Title = styled.h1`
  @media (min-width: 375px) {
    font-size: 50px;
  }
  @media (min-width: 768px) {
    font-size: 70px;
  }
  @media (min-width: 1440px) {
    font-size: 90px;
  }
  font-size: 30px;
  font-weight: 400;
  color: #fff;
`;
