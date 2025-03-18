import axios from "axios";
import { useAppDispatch } from "../stores/hooks";
import { EnhancedStore } from "@reduxjs/toolkit";
import { refreshToken } from "@/stores/loginSlice";



const _axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});
const _axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

//
export const setup = (store:EnhancedStore) => {
  _axiosPrivate.interceptors.request.use(
    async (config) => {
      if (!config.withCredentials) {
        config.withCredentials = true;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  _axiosPublic.interceptors.request.use(
    async (config) => {
      if (!config.withCredentials) {
        config.withCredentials = true;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  _axiosPrivate.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      let _config = JSON.parse(JSON.stringify(error.config));
      const retryCount = (error.config.retryCount || 0) + 1;
      error.config.retryCount = retryCount;
      error.config._retry = true;
      if (error.response?.status === 401 && !_config._retry && _config.url !="/authentication/refresh") {
        try {
          await store.dispatch<any>(refreshToken());
          return _axiosPrivate(error.config);
        } catch (err) {
          return Promise.reject(err);
        }
      } else {
        return Promise.reject(error);
      }
    }
  );
};

export const axiosPublic = _axiosPublic;
export const axiosPrivate = _axiosPrivate;
