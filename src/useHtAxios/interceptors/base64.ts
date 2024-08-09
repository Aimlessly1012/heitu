import type { AxiosRequestConfig } from 'axios';
import { HEADER_CONTENT_TYPE_APPLICATION_JSON } from '../constants';
import { bytesToBase64 } from '../utils';

export function addBase64ForConfig(
  config: Pick<AxiosRequestConfig, 'data' | 'headers' | 'method' | 'url'>,
) {
  // eslint-disable-next-line prefer-destructuring
  const originData = config.data;
  const originContentTransferEncoding =
    config.headers['Content-Transfer-Encoding'];
  try {
    // 触发条件为
    // 1. post / put 请求
    // 2. 没有指定 Content-Encoding
    // 3. content-type 为 json.
    // 4. data 不为空
    if (
      !(
        config.headers['Content-Transfer-Encoding'] ||
        config.headers['content-transfer-encoding']
      ) &&
      ['post', 'put'].includes((config.method || '').toLocaleLowerCase()) &&
      config.headers['Content-Type'] === HEADER_CONTENT_TYPE_APPLICATION_JSON &&
      originData
    ) {
      config.headers['Content-Transfer-Encoding'] = 'base64';
      // console.log(config.data);
      // const start = Date.now();
      // console.log(buf.length, start);
      if (config.headers['Content-Encoding'] === 'gzip') {
        config.data = bytesToBase64(originData as Uint8Array);
      } else {
        config.data = bytesToBase64(
          new TextEncoder().encode(JSON.stringify(originData as JSON)),
        );
      }
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);

    // rollback
    config.data = originData;
    if (originContentTransferEncoding) {
      config.headers['Content-Transfer-Encoding'] =
        originContentTransferEncoding;
    } else {
      delete config.headers['Content-Transfer-Encoding'];
    }
  }
}
