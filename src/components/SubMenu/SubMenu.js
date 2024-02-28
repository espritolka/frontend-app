import React, {useEffect, useMemo} from 'react';
import {Box, Flex} from '@chakra-ui/react';
import styles from './SubMenu.module.css';
import SubMenuItem from './SubMenuItem';
import SubMenuItemWrapper from './SubMenuItemWrapper';
import {useParams, useNavigate} from 'react-router-dom';
import {getPath} from '../../utils/routing';
import Loader from '../Loader';
import Button from '../Button';
import {excludeTodayYesterdayItems,
  getTodayItems, getYesterdayItems} from '../../utils/common';
const SubMenu = ({activeMenu, menuItems}) => {
  const navigate = useNavigate();
  const {chatId, tabId} = useParams();

  useEffect(() => {
    if (!chatId && tabId) {
      navigate(getPath(tabId, 'new'));
    }
  }, [tabId, chatId]);

  const todayItems = useMemo(() => {
    if (!menuItems.length) return [];
    return getTodayItems(menuItems);
  }, [menuItems]);

  const yesterdayItems = useMemo(() => {
    if (!menuItems.length) return [];
    return getYesterdayItems(menuItems);
  }, [menuItems]);

  const previouslyItems = useMemo(() => {
    if (!menuItems.length) return [];
    return excludeTodayYesterdayItems(menuItems);
  }, [menuItems]);

  if (!tabId || !chatId) {
    return <Loader/>;
  }


  return (
    <div className={styles.sunMenu}>
      <Box w='100%' h={'100%'}>
        <Flex flexDirection={'column'} h={'100%'} justifyContent={'space-between'}>
          <div className={styles.content}>
            <span className={styles.header}>{activeMenu?.name}</span>

            <SubMenuItemWrapper title={'Сегодня'}>
              {todayItems?.map((el) => {
                return <SubMenuItem item={el}/>;
              })}
            </SubMenuItemWrapper>

            <SubMenuItemWrapper title={'Вчера'}>
              {yesterdayItems?.map((el) => {
                return <SubMenuItem item={el}/>;
              })}
            </SubMenuItemWrapper>

            <SubMenuItemWrapper title={'Ранее'}>
              {previouslyItems?.map((el) => {
                return <SubMenuItem item={el}/>;
              })}
            </SubMenuItemWrapper>

          </div>
          <Button.AddChatButton
            title={'Новый чат'}
            onClick={() => navigate(getPath(tabId, 'new'))}/>
        </Flex>
      </Box>
    </div>);
};

export default SubMenu;
