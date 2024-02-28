import React from "react";
import * as Icons from './icons'

const Icon = ({icon, name}) => {
        const srcValue = icon || Icons[name]
    return( <img src={srcValue} alt={name}/>)
}

export default Icon