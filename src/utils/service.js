//引入axios
import axios from "axios";
import { baseURL } from "../config";
axios.defaults.baseURL = baseURL;
//设置默认请求头
axios.defaults.headers = {
  // "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  "Content-Type": "application/json;charset=UTF-8"
};
// axios.defaults.timeout = BM_config.timeout;
axios.defaults.withCredentials = true;
//请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
    let data;
    if (response.data == undefined) {
      data = response.request.responseText;
    } else {
      data = response.data;
    }
    return data;
  },
  err => {
    if (err && err.response) {
      // 此处可根据code判断
      err.message = "错误请求";
    } else {
      err.message = "连接到服务器失败";
    }
    // alert(err.message);
    console.log("err.message", err.message);
    return Promise.resolve(err.response);
  }
);

export default {
  //get请求
  get(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url,
        params: param
      })
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  //post请求
  post(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url,
        data: param
      })
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
