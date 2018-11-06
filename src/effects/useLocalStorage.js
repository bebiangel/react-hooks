import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  //
  const [item, setInnerValue] = useState(() => {
    try {
      return window.localStorage.getItem(key)
        ? JSON.parse(window.localStorage.getItem(key))
        : initialValue;
    } catch (error) {
      // JSON 파싱에 실패하면 기본값을 반환한다.
      return initialValue;
    }
  });

  const setValue = value => {
    setInnerValue(value);
    window.localStorage.setItem(key, JSON.stringify(item));
  };

  return [item, setValue];
}
