import React from 'react';
import classNames from 'classnames';
import styles from './SelectAction.module.css';
import Icon from '../../Icon';

const SelectAction = (props) => {
  const {className, icon, title, ...btnProps} = props;
  const buttonClass = classNames(styles.button, className);
  return (<button className={buttonClass} {...btnProps}>
    <div className={styles.content}>
      {icon && <Icon name={icon}/>}
      {title}
    </div>
  </button>);
};

export default SelectAction;
