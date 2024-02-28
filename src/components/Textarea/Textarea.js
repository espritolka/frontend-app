import React from "react";

import styles from './Textarea.module.css'
import classNames from "classnames";
import AutoResizeTextarea from 'react-textarea-autosize'
import ChatButton from "../Button/ChatButton";

const TEXTAREA_MAX_ROWS = '3'
const Textarea = (props) => {
    const {handleChange, value, maxRows, minRows, placeholder, className, disabled, sendBtn, onClickBtn, ...rec} = props


    const textareaClassName = classNames(
        styles.textarea,
        className,
    )

    const textareaProps = Object.assign(
        {
            className: textareaClassName,
            maxRows: maxRows ? maxRows : TEXTAREA_MAX_ROWS,
            onChange: handleChange,
            value,
        },
        disabled ? { disabled } : undefined,
        minRows ? { minRows } : undefined,
        placeholder ? { placeholder } : undefined,
         {...rec}
    )


    return(
        <div className={styles.wrapper}>
            <AutoResizeTextarea {...textareaProps}/>
            {sendBtn && <ChatButton className={styles.btn} onClick={onClickBtn} disabled={!value}/>}
        </div>
    )
}

export default Textarea