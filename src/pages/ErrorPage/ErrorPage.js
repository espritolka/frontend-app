import React from 'react';

import styles from './ErrorPage.module.css';
const ErrorPage = ({code}) => {
  if (code) {
    return <div className={styles.wrapper}><n2>Ошибка сервера</n2><span>Попробуйте позже</span></div>;
  }
  return (<div className={styles.wrapper}>PAGE NOT FOUND</div>);
};

export default ErrorPage;
