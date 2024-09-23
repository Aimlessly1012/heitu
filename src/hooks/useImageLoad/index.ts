import { useEffect, useState } from 'react';
import { errSrc } from './errImg';

const useImageLoad = ({ imgList }: { imgList: string[] }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [img, setImg] = useState<string>('');
  const [imgFT, setImgFT] = useState<string[]>([]);
  const [imgAllow, setImgAllow] = useState<string[]>([]);

  const loopGetImgUrl = (url: string, index: number, isfirst?: boolean) => {
    const imgInstance = new Image();
    const next = index + 1;
    imgInstance.src = url;
    imgInstance.onload = () => {
      setImgFT((prev) => [...prev, url]);
      setImgAllow((prev) => [...prev, url]);

      if (!isfirst) setImg(url);
      if (index < imgList.length - 1) {
        loopGetImgUrl(imgList[next], next, true);
      } else {
        setLoading(false);
      }
    };

    imgInstance.onerror = () => {
      setImgFT((prev) => [...prev, errSrc]);

      if (next < imgList.length - 1) {
        loopGetImgUrl(imgList[next], next);
      } else {
        setLoading(false);
      }
    };
  };
  useEffect(() => {
    if (imgList?.length > 1) {
      setLoading(true);
      loopGetImgUrl(imgList?.[0], 0);
    }
  }, []);
  console.log([img, imgFT, imgAllow, loading]);
  if (imgFT.length !== imgList.length) {
    return ['', [], [], true];
  }
  return [img, imgFT, imgAllow, loading];
};

export default useImageLoad;
