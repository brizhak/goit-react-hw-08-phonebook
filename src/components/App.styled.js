import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  @media (max-width: 767px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
  }
  padding: 5px;
  display: inline-block;
  transition: all 0.3s;
  text-decoration: none;
  color: white;
  cursor: pointer;
  border-color: transparent;
  border-radius: 25px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a525b5;
  }

  &.active {
    background-color: #a525b5;
  }
`;

export const NavContainer = styled.nav`
  @media (max-width: 767px) {
    padding: 10px 0;
  }
  @media (min-width: 768px) {
    padding: 15px 0;
  }
  @media (min-width: 1440px) {
    padding: 20px 0;
  }
  display: flex;
  gap: 15px;
  width: 100%;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  border-color: transparent;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #a525b5;
  }
`;

export const AuthContainer = styled.div`
  margin-left: auto;
`;
