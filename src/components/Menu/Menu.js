import React from 'react';
import styles from './Menu.module.css';
import MenuItem from './MenuItem';
import {useParams} from 'react-router-dom';


const Menu = ({items}) => {
  const {tabId} = useParams();

  if (!tabId) {
    return null;
  }

  return (<div className={styles.menu}>{items.map((i) => {
    return (<MenuItem item={i}/>);
  })}</div>);
};

export default Menu;
