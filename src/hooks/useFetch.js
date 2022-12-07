import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState('');
  const [loading, setLoading] = React.useState('');
  const [error, setError] = React.useState('');

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
