import React from 'react';
import styles from './ChatButton.module.css';
import classNames from 'classnames';
import {ReactComponent as Arrow} from './arrow-icon.svg';
const ChatButton = (props) => {
  const {className, disabled, ...btnProps} = props;
  const buttonClass = classNames(styles.button, {[styles.active]: !disabled}, className);
  return (<button className={buttonClass} {...btnProps}>
    <Arrow />
  </button>);
};
export default ChatButton;
