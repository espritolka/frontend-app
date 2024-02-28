import React from 'react';
import {Box, Flex, Slide, useDisclosure} from '@chakra-ui/react';
import styles from './Cookies.module.css';
import Button from '../Button/Button';
const Cookies = () => {
  const {isOpen, onToggle} = useDisclosure({defaultIsOpen: true});

  if (!isOpen) {
    return null;
  }
  return ( <div className={styles.wrapper}>
    <Slide direction='bottom' in={isOpen} style={{zIndex: 10}}>
      <Box
        color='white'
        mt='4'
        m={'0 67px 14px 67px'}
        bg='var(--gradient-color-first)'
        rounded='45px'
        shadow='md'
        h={'70px'}
      >
        <Flex justifyContent={'space-between'} p={'13px'}>
          <span className={styles.message}>Принимаешь наши куки?</span>
          <Button onClick={onToggle} title={'Да'} type={'white'}/>
        </Flex>
      </Box>
    </Slide>
  </div>);
};

export default Cookies;
