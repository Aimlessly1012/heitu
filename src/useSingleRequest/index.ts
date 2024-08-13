const useSingleRequest = () => {
  // const [cacheMap, setCacheMap] = useState({});
  // const [statusMap, setStatusMap] = useState({});
  // const getSourceData = ({
  //   url,
  //   params,
  //   method,
  // }: {
  //   url: string;
  //   params: Record<string, string>;
  //   method: 'post' | 'get' | 'put' | 'delete';
  // }) => {
  //   // 设置缓存key
  //   const cacheKey = `${url}_${JSON.stringify(params)}_${method}`;
  //   // 存在缓存数据时，直接返回缓存的数据
  //   const cacheData = cacheMap[cacheKey];
  //   if (cacheData) {
  //   }
  // };
  // const setCacheData = () => {};
  // const refresh = () => {};
  // useEffect(() => {
  //   console.log(url, params, method);
  //   const key = `${url}_${JSON.stringify(params)}_${method}`;
  //   // if (cache[key]) {
  //   // }
  //   // setCache((prev) => ({...prev,[key]:fetch[method](url, params)}));
  //   console.log(key);
  // }, [url, params, method]);
  // return { setCacheData, refresh, getSourceData };
};

export default useSingleRequest;
