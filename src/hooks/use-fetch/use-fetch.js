import {useCallback, useEffect, useState} from 'react';

export const useFetch = url => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const result = await fetch(url);
      if (result.ok) {
        const json = await result.json();
        setData(json);
      } else {
        setData(null);
      }
    } catch (e) {
      setError(e);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [setLoading]);

  return {loading, data, error, refetch: fetchData};
};
