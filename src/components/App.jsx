import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  appRoutes,
} from 'constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser, selectUserAuthentication } from 'redux/authReducer';
import { StyledNavLink, NavContainer, AuthContainer } from './App.styled';
import UserMenu from './UserMenu/UserMenu';
const NotFoundPage = lazy(() => import('pages/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserAuthentication);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <header>
        <NavContainer>
          <StyledNavLink to={HOME_ROUTE}>Home</StyledNavLink>
          {authenticated ? (
            <>
              <StyledNavLink to={CONTACTS_ROUTE}>Phonebook</StyledNavLink>
              <UserMenu />
            </>
          ) : (
            <AuthContainer>
              <StyledNavLink to={LOGIN_ROUTE}>Login</StyledNavLink>
              <StyledNavLink to={REGISTER_ROUTE}>Register</StyledNavLink>
            </AuthContainer>
          )}
        </NavContainer>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
