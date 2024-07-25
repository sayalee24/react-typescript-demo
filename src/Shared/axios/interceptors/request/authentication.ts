import type { AuthenticationResult } from "@azure/msal-browser";
import {
  CacheLookupPolicy,
  InteractionRequiredAuthError,
} from "@azure/msal-browser";
import {
  msalInstance,
  msalLoginRequest,
} from "@src/shared/authentication/msal";
import type { InternalAxiosRequestConfig } from "axios";

export const handleAuthentication = async (
  requestConfig: InternalAxiosRequestConfig
) => {
  const controller = new AbortController();
  const account = msalInstance.getAllAccounts();
  let token: null | AuthenticationResult = null;

  try {
    token = await msalInstance.acquireTokenSilent({
      account: account[0],
      scopes: ["openid"],
      forceRefresh: false,
      cacheLookupPolicy: CacheLookupPolicy.Default,
    });
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      msalInstance.acquireTokenRedirect(msalLoginRequest);
      controller.abort();
    }

    return Promise.reject(error);
  }

  if (!token) {
    return Promise.reject();
  }

  requestConfig.headers?.set("Authorization", `Bearer ${token.idToken}`);

  return requestConfig;
};
