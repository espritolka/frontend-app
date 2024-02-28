import React, {useEffect} from 'react';
import {Box} from '@chakra-ui/react';
import {Route, Routes, useNavigate, useParams} from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ErrorPage from '../../pages/ErrorPage';
import {DEFAULT_MENU} from '../Menu/Menu.constants';
import Cookies from '../Cookies';
import {useAuth0} from '@auth0/auth0-react';
import Loader from '../Loader';
import LayoutWrapper from './LayoutWrapper';
import Header from './Header';
import HomePageWrapper from '../../pages/HomePage';
const Layout = () => {
  const {tabId} = useParams();
  const menuItems = DEFAULT_MENU;

  const {user, isLoading, isAuthenticated} = useAuth0();

  if (isLoading) {
    return (<LayoutWrapper><Loader/></LayoutWrapper>);
  }

  if (!isAuthenticated) {
    return (<LayoutWrapper><Header/></LayoutWrapper>);
  }

  return (
    <>
      {tabId && <Cookies/>}
      <LayoutWrapper>
        <Header/>
        <Box w='100%' h={'calc(100% - 72px)'} overflow={'hidden'}>
          <Routes>
            <Route path={'/'}>
              <Route path={'/auth'}/>
              <Route path={'/tab?/:tabId?/chat?/:chatId?'} element={<HomePageWrapper menuItems={menuItems}/>}/>
              {/* <Route path={'/tab?/:tabId?/create'} element={<HomePage menuItems={menuItems} create/>}/>*/}
              <Route path='/404' element={<ErrorPage/>}/>
              <Route path='/500' element={<ErrorPage code={'500'}/>}/>
              <Route path='*' element={<ErrorPage/>}/>
            </Route>
          </Routes>
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
