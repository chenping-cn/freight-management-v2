import axios from "axios";

const axiosInstance = axios.create({
  timeout: 5000,
  timeoutErrorMessage: "Request timed out",
  withCredentials: true,
  headers: {
    icode: "",
  },
});
