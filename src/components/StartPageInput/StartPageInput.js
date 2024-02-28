import React, {useState} from "react";
import {Box, Flex, IconButton} from "@chakra-ui/react";
import {ArrowLeftIcon} from '@chakra-ui/icons'
import {useKeyboard} from "../../hooks/useKeyboard";
import styles from './StartPage.module.css'
const StartPageInput = ({onChange}) => {
const [inputValue, setInputValue] = useState(null)

    const handleClick = () => {
        inputValue && onChange(inputValue)
    }

    useKeyboard(handleClick)
    const handleChange = ({
        target: { name, value },
    }) => {
        setInputValue(value)
    }

    return(<Flex flexDirection={'column'}>
        <Box position='fixed' top={'40%'}>
            {inputValue && <IconButton
                onClick={handleClick}
                isRound={true}
                variant='solid'
                colorScheme='teal'
                aria-label='Done'
                fontSize='20px'
                transform='rotate(90deg)'
                icon={<ArrowLeftIcon />}/>}
        </Box>
        <Box>
        <p className={styles['start-input-text']}>{inputValue}</p>
         <input
             autoFocus={true}
             title={inputValue}
             type="text"
             className={styles['start-input']}
            value={inputValue}
            onChange={handleChange}
        />
    </Box>
    </Flex>)
}

export default StartPageInput