import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState('');
  const [loading, setLoading] = React.useState('');
  const [error, setError] = React.useState('');

  const response = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) throw new Error(`Error ${json.textMessage}`);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
