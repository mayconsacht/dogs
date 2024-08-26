import React from 'react';

type Response<T> = {
  data: T;
  loading: boolean;
  error: string;
  request: (
    url: RequestInfo,
    options: RequestInit
  ) => Promise<{ response: globalThis.Response | undefined; json: any }>;
};

export function useFetch<T = null>(): Response<T | null> {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const request = React.useCallback(
    async (url: RequestInfo, options: RequestInit) => {
      let response;
      let json;
      try {
        setLoading(true);
        response = await fetch(url, options);
        json = await response.json();
        if (response.ok === false) throw new Error(json.message);
      } catch (err: any) {
        json = null;
        setError(err.message);
      } finally {
        setData(json);
        setLoading(false);
        return { response, json };
      }
    },
    []
  );

  return {
    data,
    loading,
    error,
    request,
  };
}
