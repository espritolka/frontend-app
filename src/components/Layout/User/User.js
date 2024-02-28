import React from 'react';
import {Flex, Tooltip} from '@chakra-ui/react';
import styles from './User.module.css';
import {ReactComponent as LogOut} from '../logout.svg';


import {useAuth0} from '@auth0/auth0-react';
const User = () => {
  const {loginWithRedirect, logout, user, isAuthenticated, isLoading} = useAuth0();

  if (!isAuthenticated) {
    return <Flex alignItems='center'>
      <span className={styles.logIn} onClick={() => loginWithRedirect()}>Войти</span></Flex>;
  }

  const userNS = user.name.split(' ').map((i) => i[0]).join('');

  return (<Flex alignItems='center'>
    {user.picture ? <img className={styles.avatarPic} src={user.picture} alt=""/> :
        <div className={styles.avatar}>{userNS}</div>}
    <span>{user.name}</span>
    <Tooltip hasArrow label="Выйти" aria-label='tooltip'>
      <LogOut className={styles.logOut}
        onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}/>
    </Tooltip>
  </Flex>);
};

export default User;
