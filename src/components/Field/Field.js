import React from "react";
import styles from './Field.module.css'
const Field = ({children, label, required}) => {

    return(<div className={styles.wrapper}>
        <label className={styles.label}>{label} {required && <span className={styles.required}>*</span>}</label>
        {children}
    </div>)
}

export default Field