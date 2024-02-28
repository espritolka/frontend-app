import React from "react";
import classNames from "classnames";
import styles from './Button.module.css'


const Button = (props) => {
    const { className, icon, title, type = 'colored', ...btnProps} = props
    const buttonClass = classNames(styles.button, styles[type] , className)


    return(<button className={buttonClass} {...btnProps}>
        <span> {title} </span>
    </button>)
}

export default Button