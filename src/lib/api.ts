import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

// Create Axios Instance
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // If in browser, try to retrieve token from storage
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle centralized errors
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        // Handle unauthorized (e.g. redirect to login or clear token)
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
        }
      }
    }
    return Promise.reject(error);
  }
);
