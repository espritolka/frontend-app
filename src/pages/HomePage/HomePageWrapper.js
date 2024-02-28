import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getPath} from '../../utils/routing';
import {Box, Flex} from '@chakra-ui/react';
import HomePage from './HomePage';
import {NEW_CHAT_PATH} from '../../constants/routing';


const HomePageWrapper = ({menuItems}) => {
  const navigate = useNavigate();
  const {tabId, chatId} = useParams();

  useEffect(() => {
    if (!tabId) {
      navigate(getPath(menuItems[0].id, NEW_CHAT_PATH));
    }
  }, []);


  if (!tabId) {
    return null;
  }

  return (<Box w='100%' h='100%'>
    <Flex justifyContent={'flex-start'} h='100%' w='100%'>
      <HomePage menuItems={menuItems}/>
    </Flex>
  </Box>);
};


export default HomePageWrapper;
