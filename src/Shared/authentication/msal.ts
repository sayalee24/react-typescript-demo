import type { Configuration, RedirectRequest } from "@azure/msal-browser";
import {
  BrowserCacheLocation,
  PublicClientApplication,
} from "@azure/msal-browser";
import {
  getAuthAuthority,
  getAuthClientId,
  getAuthClientTenant,
  getAuthPolicy,
  getAuthRedirectURI,
} from "@src/shared/env/env.public";

const msalConfig: Configuration = {
  auth: {
    clientId: getAuthClientId(),
    authority: `https://${getAuthAuthority()}/tfp/${getAuthClientTenant()}/${getAuthPolicy()}`,
    redirectUri: getAuthRedirectURI(),
    postLogoutRedirectUri: getAuthRedirectURI(),
    knownAuthorities: [getAuthAuthority()],
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const msalLoginRequest: RedirectRequest = {
  scopes: ["openid"],
};
