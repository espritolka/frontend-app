import React from "react";
import {Flex, Heading} from "@chakra-ui/react";

const SubMenuItemWrapper = (props) => {
    const {children, title} = props

    if(!children.length) {
        return null
    }
    return <Flex flexDirection='column' w={'100%'} marginBottom={'40px'}>
        <Heading size={'sm'} marginLeft={'28px'} marginBottom={'10px'} color={'var(--main-text-color)'}>{title}</Heading>
        {children}
    </Flex>
}

export default SubMenuItemWrapper