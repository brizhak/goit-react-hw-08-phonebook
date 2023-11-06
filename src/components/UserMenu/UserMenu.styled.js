import styled from 'styled-components';
import { ImArrowRight2 } from 'react-icons/im';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
`;

export const UserName = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    display: block;
    font-size: 22px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: white;
  display: flex;
  gap: 5px;
  font-weight: 300;
  width: 92px;
  padding: 7px 0;
  &:hover {
    color: #f9b2e8;
    background-color: transparent;
  }
  @media (min-width: 768px) {
    width: 100px;
  }
  @media (min-width: 1440px) {
    width: 110px;
  }
`;

export const ButtonText = styled.span`
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const LogOutIcon = styled(ImArrowRight2)`
  width: 18px;
  height: 18px;
  margin: auto;
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
  @media (min-width: 1440px) {
    width: 22px;
    height: 22px;
  }
`;
