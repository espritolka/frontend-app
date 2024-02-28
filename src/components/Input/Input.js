import React from "react";

import styles from './Input.module.css'
import classNames from "classnames";

const Input = (props) => {
    const {children, className, inputClassName, ...rest} = props

    const wrapperClassName = classNames(styles.inputWrapper, className)

    return(<div className={wrapperClassName}>
        {children}
        <input className={inputClassName} {...rest}/>
    </div>)
}

export default Input