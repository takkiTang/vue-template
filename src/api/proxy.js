/**
 * 接口定义
 * */
const proxyMap = {
  dev: {
    baseURL: "http://mcp.dev.internal.hsmob.com",
    rap: "http://rap.internal.weimob.com/mockjsdata/338"
  },
  qa: {
    baseURL: "http://10.11.128.253:8080"
  },
  prod: {
    baseURL: "http://mcp.hsmob.com"
  }
};

/**
 * 环境配置
 */
const hostConfig = [
  {
    env: "dev",
    hostList: ["mcp.dev.internal.hsmob.com"]
  },
  {
    env: "qa",
    hostList: ["10.11.128.64:8099"]
  },
  {
    env: "prod",
    hostList: ["mcp.hsmob.com"]
  }
];
/**
 * 环境判断
 */
let env = hostConfig.find(
  item => item.hostList.includes(window.location.host) || { env: "dev" }
).env;

export default proxyMap[env];
