import {useState} from 'react';

import axios from 'axios';

import {useAuth0} from '@auth0/auth0-react';

export const DOMAIN = 'http://192.168.0.107:8000';
export const API = `${DOMAIN}/api/v1`;
export const useFetch = () => {
  const {getAccessTokenSilently} = useAuth0();

  const [loading, setLoading] = useState(false);

  const get = async (endpoint = '', headers = {}) => {
    setLoading(true);
    try {
      const {data, status} = await axios.get(API + endpoint, {
        headers: {
          ...headers,
          contentType: 'application/json',
          Authorization:
                        'Bearer ' +
                        (await getAccessTokenSilently({
                          authorizationParams: {
                            audience: API,
                          },
                        })),
        },
        validateStatus: () => true,
      });

      setLoading(false);

      return {data, status};
    } catch (err) {
      console.error(err);
      setLoading(false);
      return null;
    }
  };

  const post = async (endpoint = '', headers = {}, body = {}) => {
    setLoading(true);
    try {
      const {data, status} = await axios.post(API + endpoint, body, {
        headers: {
          ...headers,
          contentType: 'application/json',
          Authorization:
                        'Bearer ' +
                        (await getAccessTokenSilently({
                          authorizationParams: {
                            audience: API,
                          },
                        })),
        },
        validateStatus: () => true,
      });

      setLoading(false);

      return {data, status};
    } catch (err) {
      console.error(err);
      setLoading(false);
      return null;
    }
  };

  const put = async (endpoint = '', headers = {}, body = {}) => {
    setLoading(true);
    try {
      const {data, status} = await axios.put(API + endpoint, body, {
        headers: {
          ...headers,
          contentType: 'application/json',
          Authorization:
                        'Bearer ' +
                        (await getAccessTokenSilently({
                          authorizationParams: {
                            audience: API,
                          },
                        })),
        },
        validateStatus: () => true,
      });

      setLoading(false);

      return {data, status};
    } catch (err) {
      console.error(err);
      setLoading(false);
      return null;
    }
  };

  const del = async (endpoint = '', headers = {}) => {
    setLoading(true);
    try {
      const {data, status} = await axios.delete(API + endpoint, {
        headers: {
          ...headers,
          contentType: 'application/json',
          Authorization:
                        'Bearer ' +
                        (await getAccessTokenSilently({
                          authorizationParams: {
                            audience: API,
                          },
                        })),
        },
        validateStatus: () => true,
      });

      setLoading(false);

      return {data, status};
    } catch (err) {
      console.error(err);
      setLoading(false);
      return null;
    }
  };

  return {loading, get, post, put, del};
};
