import { useEffect, useRef, useState } from 'react';

interface Options {
  reconnectLimit?: number;
  reconnectInterval?: number;
  manual?: boolean;
  onOpen?: (event: WebSocketEventMap['open']) => void;
  onClose?: (event: WebSocketEventMap['close']) => void;
  onMessage?: (message: WebSocketEventMap['message']) => void;
  onError?: (event: WebSocketEventMap['error']) => void;
  json?: boolean; // 是否自动序列化 JSON
  protocols?: string | string[];  // 添加 protocols 选项
}

const useWebSocket = (url: string, options: Options = {}) => {
  const {
    reconnectLimit = 3,
    reconnectInterval = 3000,
    manual = false,
    onOpen,
    onClose,
    onMessage,
    onError,
    protocols,
  } = options;

  const [readyState, setReadyState] = useState<number>(WebSocket.CONNECTING);
  const [latestMessage, setLatestMessage] = useState<WebSocketEventMap['message'] | null>(null);
  const reconnectTimesRef = useRef(0);
  const websocketRef = useRef<WebSocket>();
  const reconnectTimerRef = useRef<NodeJS.Timeout>();
  const [manualClose, setManualClose] = useState(false);

  const connect = () => {
    if (!url) {
      return;
    }

    setManualClose(false);  // 重置主动断开标记
    websocketRef.current = new WebSocket(url, protocols);

    websocketRef.current.onopen = (event) => {
      setReadyState(WebSocket.OPEN);
      onOpen?.(event);
      reconnectTimesRef.current = 0;
    };

    websocketRef.current.onclose = (event) => {
      setReadyState(WebSocket.CLOSED);
      onClose?.(event);

      // 只在非主动断开时进行重连
      if (!manualClose && reconnectTimesRef.current < reconnectLimit) {
        reconnectTimerRef.current = setTimeout(() => {
          reconnectTimesRef.current += 1;
          connect();
        }, reconnectInterval);
      }
    };

    websocketRef.current.onmessage = (event) => {
      let parsedMessage = event;
      if (options.json) {
        try {
          parsedMessage = JSON.parse(event.data);
        } catch (e) {
          console.error('JSON 解析失败:', e);
        }
      }
      setLatestMessage(parsedMessage);
      onMessage?.(parsedMessage);
    };

    websocketRef.current.onerror = (event) => {
      onError?.(event);
    };
  };

  const sendMessage = (message: string | ArrayBufferLike | Blob | ArrayBufferView) => {
    if (readyState === WebSocket.OPEN) {
      const finalData = options.json ? JSON.stringify(message) : message;
      websocketRef.current?.send(finalData);
    }
  };

  const disconnect = () => {
    setManualClose(true);  // 标记为主动断开
    websocketRef.current?.close();
    clearTimeout(reconnectTimerRef.current);
  };

  useEffect(() => {
    if (!manual) {
      connect();
    }
    return () => {
      disconnect();
    };
  }, [url, manual]);

  return {
    readyState,
    sendMessage,
    connect,
    disconnect,
    webSocketIns: websocketRef.current,
    latestMessage,
  };
};

export default useWebSocket;