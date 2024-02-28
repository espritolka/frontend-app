import React from 'react';
import {Box, Flex, Heading, Spacer} from '@chakra-ui/react';
import logo from '../../logo.svg';
import styles from './Layout.module.css';
import User from './User';
import {useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate('/');
  };

  return (<Flex p={4} color="white" h='72px' alignItems={'center'}>
    <Box>
      <Heading size="m">
        <Flex alignItems='center' onClick={onClickLogo}>
          <img src={logo} alt="logo" className={styles.logo}/>
          <span className={styles.logoName}>aellow</span>
        </Flex></Heading>
    </Box>
    <Spacer/>
    <Box>
      <User/>
    </Box>
  </Flex>);
};

export default Header;
