import axios from "axios";

export const axiosClient = axios.create({
  timeout: 10_000,
});

axiosClient.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  },
);
