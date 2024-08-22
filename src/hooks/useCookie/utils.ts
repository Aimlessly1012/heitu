import { isBrowser } from "heitu/utils/is";
import Cookies from 'js-cookie'

function getInitialState(key: string, defaultValue?: string) {
  // Prevent a React hydration mismatch when a default value is provided.
  if (defaultValue !== undefined) {
    return defaultValue;
  }

  if (isBrowser) {
    return Cookies.get(key);
  }

  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      '`useCookie` When server side rendering, defaultValue should be defined to prevent a hydration mismatches.',
    );
  }

  return '';
}

export { getInitialState };
