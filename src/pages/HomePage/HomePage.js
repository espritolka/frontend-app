import React, {useEffect, useState} from 'react';
import Chat from '../../components/Chat';
import SubMenu from '../../components/SubMenu';
import Menu from '../../components/Menu';
import Loader from '../../components/Loader';
import {useParams} from 'react-router-dom';
import {toString} from 'lodash';
import {MOCK_SUB_MENU} from '../../components/SubMenu/SubMenu.constants';
import useGet from '../../hooks/useGet';
import InitChatForm from '../../components/initChatForm';
import {NEW_CHAT_PATH} from '../../constants/routing';
const HomePage = ({menuItems}) => {
  const {tabId, chatId} = useParams();

  const activeMenuItem = menuItems.find((i) => toString(i.id) === tabId);

  const [templates, setTemplates] = useState(null);

  const activeSubMenuItem = templates?.find((i) => toString(i.id) === chatId);

  const {response: subMenuItems, loading, refetch} = useGet(`/${tabId}`);

  useEffect(() => {
    if (subMenuItems) {
      setTemplates([...subMenuItems]);
    }
  }, [subMenuItems]);

  useEffect(() => {
    refetch();
  }, [tabId, chatId]);


  if (!templates) {
    return (<Loader/>);
  }

  return (<>
    <Menu items={menuItems}/>
    <SubMenu menuItems={templates} activeMenu={activeMenuItem}/>
    {chatId === NEW_CHAT_PATH ? <InitChatForm/> : <Chat title={activeSubMenuItem?.topic}/>}
  </>);
};

export default HomePage;
