import {
  AUTH_TOKEN_COOKIE_KEY,
  LOGIN_STORAGE_KEY,
  USER_STORAGE_KEY,
} from "@/constants";
import { getCookie, removeCookie } from "@/lib/cookie";
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from "@/lib/localStorage";

import { LOGIN_PATH } from "@/constants/app-paths";
import { RETURN_URL_STORAGE_KEY } from "@/constants";
import { inDevelopMode } from "@/lib/env";

export const getAppCredentials = () => {
  return {
    auth: {
      token:
        getCookie(AUTH_TOKEN_COOKIE_KEY) || !!getStorageItem(LOGIN_STORAGE_KEY),
    },
    configs: { direction: "ltr", locale: "en" },
    user: { info: getStorageItem(USER_STORAGE_KEY) },
    privileges: null,
  };
};

export const removeAppCredentials = (saveUrl) => {
  saveUrl &&
    !inDevelopMode &&
    !window.location.href.includes(new URL(LOGIN_PATH).pathname) &&
    setStorageItem(RETURN_URL_STORAGE_KEY, window.location.href);
  removeCookie(AUTH_TOKEN_COOKIE_KEY);
  removeStorageItem(LOGIN_STORAGE_KEY);
  removeStorageItem(USER_STORAGE_KEY);
};
