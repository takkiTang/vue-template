// 自动引入 module 下的js文件
const apiContext = require.context("@/api/modules", true, /\.js$/);

const apis = apiContext.keys().reduce((prev, next) => {
  const _key = next.match(/(\w+)\.js/)[1];
  prev[_key] = apiContext(next).default || apiContext(next);
  return prev;
}, {});

export default apis;
