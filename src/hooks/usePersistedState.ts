import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, defaultValue: T): Response<T> {
  const [value, setValue] = useState(() => {
    const storageValue = window.localStorage.getItem(key);

    return storageValue !== null ? JSON.parse(storageValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default usePersistedState;
