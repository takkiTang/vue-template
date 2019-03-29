/**
 * 接口定义
 * */
const proxyMap = {
  dev: {
    baseURL: "http://172.18.33.25:3000/api"
  },
  qa: {},
  prod: {}
};

/**
 * 环境配置
 */
const hostConfig = [
  {
    env: "dev",
    hostList: [""]
  },
  {
    env: "qa",
    hostList: [""]
  },
  {
    env: "prod",
    hostList: [""]
  }
];
/**
 * 环境判断
 */
let env = (
  hostConfig.find(item => item.hostList.includes(window.location.host)) || {
    env: "dev"
  }
).env;
export default proxyMap[env];
