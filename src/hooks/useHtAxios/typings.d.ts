interface Window {
  skynet: any;
  __debug__?: boolean;
  __env__: {
    debug?: boolean;
    localDeploy: {
      transformMethod: boolean;
    };
    request?: {
      gzip?: boolean;
      gzipThresholdSize?: number;
      base64?: boolean;
    };
  };
}
