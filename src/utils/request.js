import axios from "axios";

// create an axios instance
const service = axios.create({
  timeout: 5 * 1000, // 应对网络不好的情况，请求超时时间设置为 5 秒
});

// 请求拦截器（request interceptor），为每个请求附加 token
service.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 让每个请求携带token
    // const token = getToken()
    // if (token) {
    //   config.headers['_authorization'] = token
    // }
    return config;
  },

  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 响应拦截器（respone interceptor）
service.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const { code, data, msg } = response.data;
    if (code) {
      if (code === 400) {
        return Promise.reject(msg);
      }
      return response;
    } else {
      return data;
    }
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default service;
