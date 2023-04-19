// react: 框架核心包
// reactDom: 专门做渲染相关的包

import React from 'react';
import ReactDOM from 'react-dom/client';
// 应用的全局样式文件
import './index.css';
// 引入根组件
import App from './App';

// 渲染根组件App到一个id为root的页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式节点需要去掉
  // useEffect的执行时机
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
