import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser, selectUserData } from 'redux/authReducer';
import {
  Container,
  UserName,
  Button,
  ButtonText,
  LogOutIcon,
} from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutUser());
  };
  return (
    <Container>
      <UserName>{userData.email}</UserName>
      <Button onClick={handleLogOut}>
        <ButtonText>Log out</ButtonText>
        <LogOutIcon />
      </Button>
    </Container>
  );
};

export default UserMenu;
