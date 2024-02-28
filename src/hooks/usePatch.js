import {useCallback} from 'react';
import axios from 'axios';
import {useAuth0} from '@auth0/auth0-react';
import {API} from '../constants/api';

export default function usePatch() {
  const {getAccessTokenSilently} = useAuth0();

  const patch = useCallback(async (url, body = {}, config = {}) => {
    const accessToken = await getAccessTokenSilently();
    // set token in Authorization header
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const axiosResponse = await axios.patch(API + url, body, config);
      return {response: axiosResponse, error: null};
    } catch (error) {
      return {response: null, error};
    }
  });

  return patch;
}
