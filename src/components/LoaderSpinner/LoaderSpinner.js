import React from 'react';
import spinner from './spinner.svg';
import styles from './LoaderSpinner.module.css';

const LoaderSpinner = () => {
  return (<img src={spinner} className={styles.spinner} alt="spinner"/>);
};
export default LoaderSpinner;
