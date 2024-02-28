import React from 'react';
import {Flex, Text, Tooltip} from '@chakra-ui/react';
import styles from './Chat.module.css';
import {ReactComponent as Copy} from './copy.svg';
import Markdown from 'react-markdown';
import LoaderDots from '../LoaderDots';
import classNames from 'classnames';

const ResponseText = ({value, load}) => {
  const LoaderBubbleClassName = classNames(styles.bubbleAI, styles.loader);
  return (
    <Flex justifyContent='flex-start' alignContent={'flex-end'} alignItems={'flex-end'} marginBottom={'40px'}>
      {load ? <div className={LoaderBubbleClassName}><LoaderDots/></div> :
                <>
                  <div className={styles.bubbleAI}><Text><Markdown className={styles.text}>{value}</Markdown></Text></div>
                  <Tooltip hasArrow label="Копировать" aria-label='tooltip'>
                    <Copy className={styles.icon} onClick={() => {
                      navigator.clipboard.writeText(value);
                    }}/>
                  </Tooltip>
                </>}
    </Flex>);
};

export default ResponseText;
