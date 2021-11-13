import {useCallback, useState} from 'react';
import {useFetch} from '../use-fetch';

const REFRESH_TIMEOUT = 500;

export const useRefresh = url => {
  const [isRefreshing, setRefreshing] = useState(false);
  const {loading, refetch} = useFetch(url);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    await refetch().then(() => {
      if (!loading) {
        // set a timer so that we can see the indicator longer
        // we can remove the timer function once the network response is bigger
        setTimeout(() => setRefreshing(false), REFRESH_TIMEOUT);
      }
    });
  }, []);

  return {isRefreshing, refresh};
};
