import React from 'react';
import {Box} from '@chakra-ui/react';
import SelectAction from '../../components/Button/SelectAction/SelectAction';
import {useNavigate} from 'react-router-dom';
import {getPath} from '../../utils/routing';
import styles from './StartPage.module.css';
import {NEW_CHAT_PATH} from '../../constants/routing';

const StartPage = ({items}) => {
  const navigate = useNavigate();

  const onSelect = (id) => {
    navigate(getPath(id, NEW_CHAT_PATH));
  };

  return (<Box w='100%' h='100%'>
    <div className={styles.wrapper}>
      {items.map((i) => {
        return (<SelectAction title={i.name} icon={i.icon} onClick={() => onSelect(i.id)}/>);
      })}
    </div>
  </Box>);
};
export default StartPage;
