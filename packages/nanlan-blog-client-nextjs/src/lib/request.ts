import axios from "axios";

export const request = axios.create({
  baseURL: "/api",
  timeout: 20000,
  timeoutErrorMessage: "请求超时，请稍后重试",
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 可以在这里添加 token 等
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      console.error("Request timeout");
    }
    console.error("Request error:", error.response?.data || error);
    return Promise.reject(error);
  },
);
