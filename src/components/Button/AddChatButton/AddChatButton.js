import React from "react";
import styles from './AddChatButton.module.css'
import classNames from "classnames";
import {ReactComponent as Plus} from './plus.svg';

const AddChatButton = (props) => {
    const { className, title, ...btnProps} = props

    const buttonClass = classNames(styles.button, className)
    return(<button className={buttonClass} {...btnProps}>
        <span>{title}</span>
        <Plus/>
    </button>)
}

export default AddChatButton