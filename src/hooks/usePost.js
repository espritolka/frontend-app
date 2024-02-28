import {useCallback} from 'react';
import axios from 'axios';
import {useAuth0} from '@auth0/auth0-react';

import {DOMAIN, API} from '../constants/api';
export default function usePost() {
  const {getIdTokenClaims} = useAuth0();

  const post = useCallback(async (url, body = {}, config = {}) => {
    const accessToken = await getIdTokenClaims();
    // set token in Authorization header
    config.headers = {
      Authorization: `Bearer ${accessToken.__raw}`,
    };

    try {
      const axiosResponse = await axios.post(API + url, body, config);
      return {response: axiosResponse.data, error: null};
    } catch (error) {
      return {response: null, error};
    }
  });

  return post;
}
