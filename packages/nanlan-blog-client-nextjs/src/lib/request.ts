import axios from "axios";

export const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
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
    console.log("Response:", response);
    return response.data.data;
  },
  (error) => {
    console.error("Request error:", error.response?.data || error);
    return Promise.reject(error);
  },
);
