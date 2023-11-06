import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  padding: 7px;
  display: inline-block;
  transition: all 0.3s;
  text-decoration: none;
  color: white;
  cursor: pointer;
  border-color: transparent;
  border-radius: 25px;
  transition: background-color 0.3s;

  &:hover {
    color: #f9b2e8;
  }

  &.active {
    background-color: #a525b5;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const NavContainer = styled.nav`
  padding: 20px 0;
  display: flex;
  gap: 15px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 30px 0;
  }
  @media (min-width: 1440px) {
    padding: 40px 0;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;
