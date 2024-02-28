import {useEffect, useState} from 'react';
import axios from 'axios';
import {useAuth0} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';

import {DOMAIN, API} from '../constants/api';

export default function useGet(url, config = {}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [refetch, setRefetch] = useState(false);

  const {getAccessTokenSilently, getIdTokenClaims} = useAuth0();

  const navigate = useNavigate();
  const handleRefetch = () => {
    setRefetch(!refetch);
  };


  useEffect(() => {
    async function performGet() {
      setLoading(true);

      // const accessToken = await getAccessTokenSilently();
      const user = await getIdTokenClaims();

      // set token in Authorization header
      config.headers = {
        Authorization: `Bearer ${user.__raw}`,
      };

      try {
        const axiosResponse = await axios.get(API + url, config);
        setResponse(axiosResponse.data);
        setError(null);
      } catch (error) {
        setError(error);
        setResponse(null);
        navigate('/500');
      }
      setLoading(false);
    }
    performGet();
  }, [refetch]);

  return {response, error, loading, refetch: handleRefetch};
}
