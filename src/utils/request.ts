import axios, { type AxiosError } from "axios";
import storage from "./storage";

const axiosInstance = axios.create({
  timeout: 5000,
  timeoutErrorMessage: "Request timed out",
  withCredentials: true,
  headers: {
    icode: "",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = storage.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return { ...config };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
