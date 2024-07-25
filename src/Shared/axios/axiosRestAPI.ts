import { handleAuthentication } from "@src/shared/axios/interceptors/request/authentication";
import { handleUnauthenticated } from "@src/shared/axios/interceptors/response/unauthenticated";
import { getRestAPIURL } from "@src/shared/env/env.public";
import axios from "axios";

export const axiosRestAPI = axios.create({
  baseURL: getRestAPIURL(),
});

axiosRestAPI.interceptors.request.use(
  async (requestConfig) => {
    return handleAuthentication(requestConfig);
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosRestAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    return handleUnauthenticated(error);
  }
);
