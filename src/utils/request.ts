import axios, { type AxiosError } from "axios";
import storage from "./storage";
import { message } from "@/components/globalInteractionComponent/GlobalInteractionComponent";

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
  },
);

axiosInstance.interceptors.response.use((response) => {
  const respData = response.data;
  if (respData.code === 500001) {
    message.error(respData.msg);
    storage.remove("token");
    location.href = "/login";
  } else if (respData.code !== 0) {
    message.error(respData.msg);
    return Promise.reject(respData);
  }
  return respData.data;
});
