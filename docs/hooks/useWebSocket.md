---
group:
  title: Request
  order: 3

toc: content
order: 2
---

# useWebSocket

## 描述

useWebSocket

- 用于某些项目前端多次请求相同浪费资源请求时间的问题

- 使用要求:
  1. 请求参数相同
  2. 接口返回也相同

## 演示

```tsx
import { useWebSocket } from 'heitu';
import { useState } from 'react';

const Index = () => {
  const [message, setMessage] = useState('');

  const { readyState, sendMessage, connect, disconnect, latestMessage } =
    useWebSocket('wss://ws.postman-echo.com/raw', {
      onOpen: (event) => {
        console.log('连接成功');
      },
      onMessage: (message) => {
        console.log('收到消息:', message);
      },
      onError: (event) => {
        console.log('连接错误');
      },
      onClose: (event) => {
        console.log('连接关闭');
      },
      json: true,
    });
  console.log(readyState, 'readyState');
  return (
    <div>
      <p>
        连接状态:
        {readyState === WebSocket.CONNECTING && '正在连接中'}
        {readyState === WebSocket.OPEN && '连接已建立'}
        {readyState === WebSocket.CLOSING && '连接正在关闭'}
        {readyState === WebSocket.CLOSED && '连接已关闭'}
      </p>
      <button
        onClick={() => sendMessage({ text: 'hello', date: `${Date.now()}` })}
        disabled={readyState !== WebSocket.OPEN}
      >
        发送消息
      </button>
      <p>
        最新消息: {latestMessage ? JSON.stringify(latestMessage) : '暂无消息'}
      </p>
      {readyState === WebSocket.OPEN && (
        <button onClick={disconnect}>断开连接</button>
      )}
      {(readyState === WebSocket.CONNECTING ||
        readyState === WebSocket.CLOSED) && (
        <button onClick={connect}>连接</button>
      )}
    </div>
  );
};
export default Index;
```

## API

### Options

| 参数              | 说明                | 类型                                              | 默认值 |
| ----------------- | ------------------- | ------------------------------------------------- | ------ |
| onOpen            | 连接建立时的回调    | `(event: WebSocketEventMap['open']) => void`      | -      |
| onClose           | 连接关闭时的回调    | `(event: WebSocketEventMap['close']) => void`     | -      |
| onMessage         | 收到消息时的回调    | `(message: WebSocketEventMap['message']) => void` | -      |
| onError           | 连接错误时的回调    | `(event: WebSocketEventMap['error']) => void`     | -      |
| protocols         | WebSocket 子协议    | `string \| string[]`                              | -      |
| reconnectLimit    | 重连次数限制        | `number`                                          | 3      |
| reconnectInterval | 重连间隔时间(ms)    | `number`                                          | 3000   |
| manual            | 是否手动控制连接    | `boolean`                                         | false  |
| json              | 是否自动序列化 JSON | `boolean`                                         | false  |

### 返回值

| 参数        | 说明               | 类型                                                                      |
| ----------- | ------------------ | ------------------------------------------------------------------------- |
| readyState  | WebSocket 连接状态 | `number`                                                                  |
| sendMessage | 发送消息方法       | `(message: string \| ArrayBufferLike \| Blob \| ArrayBufferView) => void` |
| connect     | 手动连接方法       | `() => void`                                                              |
| disconnect  | 断开连接方法       | `() => void`                                                              |

### readyState 状态说明

| 值  | 状态       | 描述         |
| --- | ---------- | ------------ |
| 0   | CONNECTING | 正在连接中   |
| 1   | OPEN       | 连接已建立   |
| 2   | CLOSING    | 连接正在关闭 |
| 3   | CLOSED     | 连接已关闭   |
