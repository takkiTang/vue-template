import axios from "axios";
import proxy from "@/api/proxy";
import { Message } from "element-ui";

const errMsg = {
  "400": "错误请求",
  "401": "未授权，请重新登录",
  "403": "拒绝访问",
  "404": "请求错误,未找到该资源",
  "405": "请求方法未允许",
  "408": "请求超时",
  "500": "服务器端错误",
  "501": "网络未实现",
  "502": "网络错误",
  "503": "服务不可用",
  "504": "网络超时",
  "505": "http版本不支持该请求"
};

// axios 配置
const service = axios.create({
  baseURL: proxy.baseURL,
  timeout: 30000,
  responseType: "json",
  method: "post"
});

service.interceptors.request.use(config => {
  config.baseURL = proxy[config.origin || "baseURL"] || proxy["baseURL"];
  return config;
});

service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    if (error && error.response) {
      error.message = errMsg[error.response.status]
        ? errMsg[error.response.status]
        : `连接错误${error.response.status}`;
    } else {
      error.message = "连接到服务器失败";
    }
    if (axios.isCancel(error)) {
      console.log("请求取消");
    } else {
      Message({
        message: error.message,
        type: "error"
      });
    }
    // 返回空对象，防止控制台报错
    return {
      data: {}
    };
  }
);

export default service;
