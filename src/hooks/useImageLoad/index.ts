import { useEffect, useState } from 'react';
import { errSrc } from './errImg';

const useImageLoad = ({ imgList }: { imgList: string[] }) => {
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

      if (index < imgList.length - 1) loopGetImgUrl(imgList[next], next, true);
      console.log(isfirst, 'isfirstisfirst');
    };

    imgInstance.onerror = () => {
      setImgFT((prev) => [...prev, errSrc]);

      if (next < imgList.length - 1) loopGetImgUrl(imgList[next], next);
    };
  };
  useEffect(() => {
    if (imgList?.length > 1) loopGetImgUrl(imgList?.[0], 0);
  }, []);
  console.log(img, imgFT, imgAllow);
  if (imgFT.length !== imgList.length) {
    return [];
  }
  return [img, imgFT, imgAllow];
};

export default useImageLoad;
