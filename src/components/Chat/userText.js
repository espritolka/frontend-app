import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import styles from './Chat.module.css'
const UserText = ({value}) => {
    return(
        <Flex justifyContent={'flex-end'} marginBottom={'40px'}>
                <div className={styles.bubbleUser}><Text>{value}</Text></div>
        </Flex>)
}

export default UserText