import React from 'react';
import styles from './SubMenuItem.module.css';
import {useParams, NavLink} from 'react-router-dom';
import classNames from 'classnames';
import {getPath} from '../../../utils/routing';
import {API_KEYS_BY_TAB} from '../../../constants/api';


const SubMenuItem = ({item}) => {
  const {chatId, tabId} = useParams();
  const {topic} = item;
  const itemId = item[API_KEYS_BY_TAB[tabId].id];

  const subItemClassName = classNames(styles.item, {[styles.active]: chatId === itemId});
  return (<NavLink className={subItemClassName} to={getPath(tabId, itemId)} key={itemId}>
    <span>{topic}</span>
  </NavLink>);
};

export default SubMenuItem;
