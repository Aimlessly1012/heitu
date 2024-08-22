import { defaultOptions } from 'heitu-hook/utils/defaults';
import { isFunction, isString } from 'heitu-hook/utils/is';
import Cookies from 'js-cookie';
import { useCallback, useEffect, useState } from 'react';
import { UseCookieState } from './interface';
import { getInitialState } from './utils';

const useCookie = (
  key: string,
  options: Cookies.CookieAttributes = defaultOptions,
  defaultValue?: string,
) => {
  
  const [cookieValue, setCookieValue] = useState<UseCookieState>(
    getInitialState(key, defaultValue),
  );

  useEffect(() => {
    const getStoredValue = () => {
      const raw = Cookies.get(key);
      if (raw !== undefined && raw !== null) {
        return raw;
      } else {
        if (defaultValue === undefined) {
          Cookies.remove(key);
        } else {
          Cookies.set(key, defaultValue, options);
        }
        return defaultValue;
      }
    };

    setCookieValue(getStoredValue());
  }, [defaultValue, key, JSON.stringify(options)]);

  const updateCookie = useCallback(
    (
      newValue:
        | UseCookieState
        | ((prevState: UseCookieState) => UseCookieState),
    ) => {
      const value = isFunction(newValue) ? newValue(cookieValue) : newValue;

      if (value === undefined) {
        Cookies.remove(key);
      } else {
        Cookies.set(key, value, options);
      }

      setCookieValue(value);
    },

    [key, cookieValue, JSON.stringify(options)],
  );

  const refreshCookie = useCallback(() => {
    const cookieValue = Cookies.get(key);

    if (isString(cookieValue)) {
      setCookieValue(cookieValue);
    }
  }, [key]);

  return [cookieValue, updateCookie, refreshCookie];
};

export default useCookie;
