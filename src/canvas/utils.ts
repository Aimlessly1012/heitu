import { dpr } from './core/constant';

export const isStage = (obj: any) => {
  return obj.name === 'Stage';
  // return obj instanceof Stage.c;
};

// 合并数组并使用 filter 和 some 去重
export const mergedArray = (array1: any[], array2: any[]): any[] => {
  return Array.from(
    new Map([...array1, ...array2].map((item) => [item.name, item])).values(),
  );
};

export const isInTextShape = (mouseX: number, mouseY: number, data: any) => {
  // @ts-ignore
  if (data?.x && data?.width && data.y && data?.height) {
    return (
      mouseX > data?.x * dpr &&
      mouseX < ((data?.x || 0) + (data?.width || 0)) * dpr &&
      mouseY > data?.y * dpr &&
      mouseY < data.y * dpr + data.height * dpr
    );
  }
  return false;
};

export const isInShape = ({
  mouseX,
  mouseY,
  path2D,
  ctx,
}: {
  mouseX: number;
  mouseY: number;
  path2D?: Path2D;
  ctx?: CanvasRenderingContext2D;
}) => {
  return path2D && ctx && ctx?.isPointInPath(path2D, mouseX, mouseY);
};

export const easingFuncs = {
  linear: function (k: number) {
    return k;
  },
  quadraticIn: function (k: number) {
    return k * k;
  },
  quadraticOut: function (k: number) {
    return k * (2 - k);
  },
  quadraticInOut: function (k: number) {
    let k1 = k;
    if ((k1 *= 2) < 1) {
      return 0.5 * k1 * k1;
    }
    return -0.5 * (--k1 * (k1 - 2) - 1);
  },
  cubicIn: function (k: number) {
    let k1 = k;
    return k1 * k1 * k1;
  },
  cubicOut: function (k: number) {
    let k1 = k;
    return --k1 * k1 * k1 + 1;
  },
  cubicInOut: function (k: number) {
    let k1 = k;
    if ((k1 *= 2) < 1) {
      return 0.5 * k1 * k1 * k1;
    }
    return 0.5 * ((k1 -= 2) * k1 * k1 + 2);
  },
  quarticIn: function (k: number) {
    let k1 = k;
    return k1 * k1 * k1 * k1;
  },
  quarticOut: function (k: number) {
    let k1 = k;
    return 1 - --k1 * k1 * k1 * k1;
  },
  quarticInOut: function (k: number) {
    let k1 = k;
    if ((k1 *= 2) < 1) {
      return 0.5 * k1 * k1 * k1 * k1;
    }
    return -0.5 * ((k1 -= 2) * k1 * k1 * k1 - 2);
  },
  quinticIn: function (k: number) {
    return k * k * k * k * k;
  },
  quinticOut: function (k: number) {
    let k1 = k;
    return --k1 * k1 * k1 * k1 * k1 + 1;
  },
  quinticInOut: function (k: number) {
    let k1 = k;
    if ((k1 *= 2) < 1) {
      return 0.5 * k1 * k1 * k1 * k1 * k1;
    }
    return 0.5 * ((k1 -= 2) * k1 * k1 * k1 * k1 + 2);
  },
  sinusoidalIn: function (k: number) {
    return 1 - Math.cos((k * Math.PI) / 2);
  },
  sinusoidalOut: function (k: number) {
    return Math.sin((k * Math.PI) / 2);
  },
  sinusoidalInOut: function (k: number) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  },
  exponentialIn: function (k: number) {
    return k === 0 ? 0 : Math.pow(1024, k - 1);
  },
  exponentialOut: function (k: number) {
    return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
  },
  exponentialInOut: function (k: number) {
    let k1 = k;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if ((k1 *= 2) < 1) {
      return 0.5 * Math.pow(1024, k1 - 1);
    }
    return 0.5 * (-Math.pow(2, -10 * (k1 - 1)) + 2);
  },
  circularIn: function (k: number) {
    return 1 - Math.sqrt(1 - k * k);
  },
  circularOut: function (k: number) {
    let k1 = k;
    return Math.sqrt(1 - --k1 * k1);
  },
  circularInOut: function (k: number) {
    let k1 = k;
    if ((k1 *= 2) < 1) {
      return -0.5 * (Math.sqrt(1 - k1 * k1) - 1);
    }
    return 0.5 * (Math.sqrt(1 - (k1 -= 2) * k1) + 1);
  },
  elasticIn: function (k: number) {
    let s;
    let a = 0.1;
    let p = 0.4;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = (p * Math.asin(1 / a)) / (2 * Math.PI);
    }
    let k1 = k;
    return -(
      a *
      Math.pow(2, 10 * (k1 -= 1)) *
      Math.sin(((k1 - s) * (2 * Math.PI)) / p)
    );
  },
  elasticOut: function (k: number) {
    let s;
    let a = 0.1;
    let p = 0.4;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = (p * Math.asin(1 / a)) / (2 * Math.PI);
    }
    return (
      a * Math.pow(2, -10 * k) * Math.sin(((k - s) * (2 * Math.PI)) / p) + 1
    );
  },
  elasticInOut: function (k: number) {
    let s;
    let a = 0.1;
    let p = 0.4;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = (p * Math.asin(1 / a)) / (2 * Math.PI);
    }
    let k1 = k;
    if ((k1 *= 2) < 1) {
      return (
        -0.5 *
        (a *
          Math.pow(2, 10 * (k1 -= 1)) *
          Math.sin(((k1 - s) * (2 * Math.PI)) / p))
      );
    }
    return (
      a *
        Math.pow(2, -10 * (k1 -= 1)) *
        Math.sin(((k1 - s) * (2 * Math.PI)) / p) *
        0.5 +
      1
    );
  },

  // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
  backIn: function (k: number) {
    let s = 1.70158;
    return k * k * ((s + 1) * k - s);
  },
  backOut: function (k: number) {
    let k1 = k;
    let s = 1.70158;
    return --k1 * k1 * ((s + 1) * k1 + s) + 1;
  },
  backInOut: function (k: number) {
    let k1 = k;
    let s = 1.70158 * 1.525;
    if ((k1 *= 2) < 1) {
      return 0.5 * (k1 * k1 * ((s + 1) * k1 - s));
    }
    return 0.5 * ((k1 -= 2) * k1 * ((s + 1) * k1 + s) + 2);
  },

  // 创建弹跳效果
  bounceIn: function (k: number) {
    return 1 - easingFuncs.bounceOut(1 - k);
  },
  bounceOut: function (k: number) {
    let k1 = k;
    if (k1 < 1 / 2.75) {
      return 7.5625 * k1 * k1;
    } else if (k1 < 2 / 2.75) {
      return 7.5625 * (k1 -= 1.5 / 2.75) * k1 + 0.75;
    } else if (k1 < 2.5 / 2.75) {
      return 7.5625 * (k1 -= 2.25 / 2.75) * k1 + 0.9375;
    } else {
      return 7.5625 * (k1 -= 2.625 / 2.75) * k1 + 0.984375;
    }
  },
  bounceInOut: function (k: number) {
    if (k < 0.5) {
      return easingFuncs.bounceIn(k * 2) * 0.5;
    }
    return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
  },
};
function calcValue(
  startVal: number,
  targetVal: number,
  elapsedTimeRatio: number,
) {
  const totalChangedVal = targetVal - startVal;
  const per = elapsedTimeRatio * totalChangedVal;

  let cur = startVal + per;

  const min = startVal < targetVal ? startVal : targetVal;
  const max = startVal > targetVal ? startVal : targetVal;

  cur = Math.max(cur, min);
  cur = Math.min(cur, max);

  return cur;
}
export const calcTargetValue = (
  startCount: number | number[],
  targetCount: number | number[],
  elapsedTimeRatio: number,
) => {
  if (typeof startCount === 'number' && typeof targetCount === 'number') {
    return calcValue(startCount, targetCount, elapsedTimeRatio);
  } else if (Array.isArray(startCount) && Array.isArray(targetCount)) {
    return startCount.map((item, index) =>
      calcValue(item, targetCount[index], elapsedTimeRatio),
    );
  }
};
