import React from 'react';
import styles from './MenuItem.module.css';
import {NavLink, useParams} from 'react-router-dom';
import Icon from '../../Icon';
import classNames from 'classnames';
import {getPath} from '../../../utils/routing';
import {toString} from 'lodash';

const MenuItem = ({item}) => {
  const {tabId} = useParams();

  const menuItemClassName = classNames(styles.menuItem, {[styles.activeMenuItem]: tabId === toString(item.id)});

  return (<NavLink className={menuItemClassName} to={getPath(item.id)} key={item.id}><Icon name={item.icon}/>{item.short_name}</NavLink>);
};

export default MenuItem;
