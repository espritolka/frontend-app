import React, {useEffect, useRef, useState} from 'react';
import {Box, Divider, Flex, Heading} from '@chakra-ui/react';
import UserText from './userText';
import ResponseText from './responseText';
import {useKeyboard} from '../../hooks/useKeyboard';
import styles from './Chat.module.css';
import {useParams} from 'react-router-dom';
import Loader from '../Loader';
import Textarea from '../Textarea';
import {get} from 'lodash';
import useGet from '../../hooks/useGet';
import usePut from '../../hooks/usePut';

const isOwner = (mess) => mess.type === 'human';
const Chat = ({title}) => {
  const {chatId, tabId} = useParams();
  const bottomRef = useRef(null);
  const [message, setMessage] = useState([]);
  const [loader, setLoader] = useState(false);
  const update = usePut();

  const {response: chatMessagesItems, loading, refetch} = useGet(`/${tabId}/${chatId}`);

  useEffect(() => {
    chatMessagesItems && setMessage([...get(chatMessagesItems, 'chat_message_history', [])]);
    setLoader(false);
  }, [chatMessagesItems]);

  useEffect(() => {
    refetch();
  }, [chatId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
  }, [message]);

  const [inputText, setInputText] = useState('');
  const handleChange = ({
    target: {name, value},
  }) => setInputText(value);

  const getMessages = () => {
    return message.map((m) => isOwner(m) ? <UserText value={m.content}/> : <ResponseText value={m.content}/>);
  };

  const postMessage = async () => {
    const params = {prompt: inputText};

    const {response, error} = await update(`/${tabId}/${chatId}`, params);

    if (response || error) {
      refetch();
    }
  };
  const sendMessage = () => {
    if (!inputText) return;
    setMessage((prev) => [...prev, {type: 'human', content: inputText}]);
    setLoader(true);
    setInputText('');
    postMessage();
  };

  useKeyboard(sendMessage);

  if (!tabId || !chatId) {
    return <Loader/>;
  }

  return (
    <Box marginRight={'24px'} borderRadius={'0px 31px 0px 0px'}
      w={'100%'} h={'100%'} p={5} bg={'white'}>
      <Heading p={'12px'} size='md' color={'var(--main-text-color)'}>{title}</Heading>
      <Divider m={'5px'}/>
      <Box height={'calc(100% - 59px)'} p={'9px 0'}>
        <Flex flexDirection={'column'} justifyContent={'space-between'} h={'100%'}>
          <div className={styles.chatBody}>
            {getMessages()}
            {loader && <ResponseText load={loader}/>}
            <div ref={bottomRef} style={{'height': '0'}}/>
          </div>
          <Flex w={'100%'} h={'60px'} marginTop={'20px'} alignItems='center'>
            <Textarea value={inputText} onChange={handleChange} onClickBtn={sendMessage} sendBtn />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Chat;
