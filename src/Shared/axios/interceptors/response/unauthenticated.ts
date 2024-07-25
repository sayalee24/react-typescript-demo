import { msalInstance } from "@src/shared/authentication/msal";
import { isAxiosError } from "axios";

export const handleUnauthenticated = async (error: unknown) => {
  if (!isAxiosError(error)) {
    return Promise.reject(error);
  }

  if (error.response?.status === 401) {
    return msalInstance.logoutRedirect();
  }

  return Promise.reject(error);
};
