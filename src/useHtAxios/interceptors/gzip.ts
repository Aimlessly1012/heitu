import type { AxiosRequestConfig } from 'axios';
import { gzipSync, strToU8 } from 'fflate';
import { HEADER_CONTENT_TYPE_APPLICATION_JSON } from '../constants';

export function addGzipForConfig(
  config: Pick<AxiosRequestConfig, 'data' | 'headers' | 'method' | 'url'>,
  gzipThresholdSize = 8000,
) {
  // eslint-disable-next-line prefer-destructuring
  const originData = config.data;
  const originContentEncoding = config.headers['Content-Encoding'];
  try {
    // 触发条件为
    // 1. post / put 请求
    // 2. 没有指定 Content-Encoding
    // 3. content-type 为 json.
    // 4. data 不为空
    if (
      !(
        config.headers['Content-Encoding'] || config.headers['content-encoding']
      ) &&
      ['post', 'put'].includes((config.method || '').toLocaleLowerCase()) &&
      config.headers['Content-Type'] === HEADER_CONTENT_TYPE_APPLICATION_JSON &&
      originData
    ) {
      // 当大于这个大小时, 才会开启压缩
      const buf = strToU8(JSON.stringify(originData));
      if (buf.length > gzipThresholdSize) {
        config.headers['Content-Encoding'] = 'gzip';
        config.data = gzipSync(buf);
      }
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);

    // rollback
    config.data = originData;
    if (originContentEncoding) {
      config.headers['Content-Encoding'] = originContentEncoding;
    } else {
      delete config.headers['Content-Encoding'];
    }
  }
}
