import React, {useState} from 'react';
import styles from './initChatForm.module.css';
import Input from '../Input';
import Field from '../Field';
import {Tag, TagLabel, TagCloseButton, HStack} from '@chakra-ui/react';
import Button from '../Button/Button';
import Textarea from '../Textarea';
import ApiDirectory from '../../api/API';
import {useNavigate, useParams} from 'react-router-dom';
import {getPath} from '../../utils/routing';
import Loader from '../Loader';
import classNames from 'classnames';
import usePost from '../../hooks/usePost';
import {API_KEYS_BY_TAB} from '../../constants/api';


const NAME = 'topic';

const DESCRIPTION = 'prompt';

const KEYS = 'keywords';
const InitChatForm = () => {
  const [loading, setLoading] = useState(false);
  const [keyWords, setKeyWords] = useState([]);
  const [keysInput, setKeysInput] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const {tabId} = useParams();
  const [error, setError] = useState([]);
  const post = usePost();
  const onChangeName = ({
    target: {name, value},
  }) => setName(value);

  const onChangeDescription = ({
    target: {name, value},
  }) => setDescription(value);

  const onChangeKeys = ({
    target: {name, value},
  }) => {
    const val = value.trimStart();
    if (value.trim().length < val.length) {
      setKeyWords((arr) => [...arr, val.trim()]);
      setKeysInput('');
    } else {
      setKeysInput(val);
    }
  };

  const onBlurKeys = ({
    target: {name, value},
  }) => {
    value && setKeyWords((arr) => [...arr, value.trim()]);
    setKeysInput('');
  };
  const onDeleteKey = (val) => {
    setKeyWords((arr) => [...arr.filter((i) => i !== val)]);
  };

  const handleSubmit = async () => {
    if (!name || !description || !keyWords.length) {
      // TODO validation
      setError([]);
      return null;
    }

    setLoading(true);

    const params = {
      [NAME]: name,
      [DESCRIPTION]: description,
      [KEYS]: keyWords,
    };
    const {error, response} = await post(`/${tabId}`, params);

    if (error) {
      navigate('/500');
    } else {
      navigate(getPath(tabId, response[API_KEYS_BY_TAB[tabId].id]));
    }
  };


  if (loading) {
    return (<div className={styles.formWrapper}>
      <div className={classNames(styles.form, styles.loader)}>
        <span>Подождите, идет инициализация чата...</span>
        <Loader/>
      </div>
    </div>
    );
  }
  return (<div className={styles.formWrapper}>
    <div className={styles.form}>
      <span className={styles.formHeader}>Новый чат</span>
      <Field label={'Название'} required>
        <Input value={name} onChange={onChangeName}/>
      </Field>
      <Field label={'Ключевые слова'} required>
        <Input value={keysInput} onChange={onChangeKeys} onBlur={onBlurKeys}>
          <HStack spacing={1}>
            {keyWords.map((i, ind) => {
              return (<Tag
                size={'md'}
                key={i + ind}
                borderRadius='full'
                variant='solid'
                bg={'var(--gradient-color-first)'}
              >
                <TagLabel>{i}</TagLabel>
                <TagCloseButton onClick={() => onDeleteKey(i)}/>
              </Tag>);
            })}
          </HStack>
        </Input>
      </Field>
      <Field label={'Описание'} required>
        <Textarea value={description} onChange={onChangeDescription} mminRows={'2'}
          className={styles.textarea}/>
      </Field>
      <div className={styles.formFooter}><Button onClick={handleSubmit} title={'Продолжить'}
        disable={loading}/>
      </div>
    </div>
  </div>);
};

export default InitChatForm;
