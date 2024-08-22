import Cookies from 'js-cookie';
import { UseCookieState } from './interface';
declare const useCookie: (key: string, options?: Cookies.CookieAttributes, defaultValue?: string) => (UseCookieState | ((newValue: UseCookieState | ((prevState: UseCookieState) => UseCookieState)) => void))[];
export default useCookie;
