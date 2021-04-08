import { useEffect, useState } from "react";

const useLocalStorage = <T,>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const data = window.localStorage.getItem(key);
  const initialValue = data ? (JSON.parse(data) as T) : defaultValue;

  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export { useLocalStorage };
