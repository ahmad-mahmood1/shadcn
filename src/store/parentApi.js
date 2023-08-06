import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAPIBaseURL, inDevelopMode } from "@/lib/env";

import { AUTH_TOKEN_COOKIE_KEY } from "@/constants";
import { getCookie } from "@/lib/cookie";
import { logout } from "./appSlice";

const authHeader = (auth) => ({
  token: auth ? auth : getCookie(AUTH_TOKEN_COOKIE_KEY),
});

const getErrorFromResponse = (response) => {
  console.error("Request Error: ", response);
  return {
    ...response,
    error: {
      status: response.error.originalStatus || response.error?.status,
      // TODO:
      message:
        (response.error?.data?.errors?.[0]?.extra?.filename ==
          "IncentivesErrorFile" &&
          response.error?.data?.errors?.[0]) ||
        response.error?.message ||
        response.error?.data?.message ||
        (response.error.data?.errors &&
          response.error.data.errors.map((e) => `${e.message}`).join(", ")) ||
        response.error?.data ||
        "Network error",
    },
  };
};

const tagTypes = [];

const skippedAuthEndpoints = [];

const baseQuery = fetchBaseQuery({
  baseUrl: getAPIBaseURL(),
  prepareHeaders: (headers, { getState, endpoint }) => {
    let obj = {};
    const cookie = getCookie(AUTH_TOKEN_COOKIE_KEY);
    const stateToken = getState().app.auth.token || cookie;
    const cookie2 = getCookie("authToken2");
    const skipAuth = skippedAuthEndpoints.find((e) => e == endpoint);
    if (skipAuth) {
      obj.token = cookie2;
    } else if (!skipAuth && stateToken && typeof stateToken !== "boolean") {
      obj = authHeader(stateToken);
    }
    Object.keys(obj).forEach((e) => {
      !!obj[e] && headers.set(e, obj[e]);
    });
    return headers;
  },
  credentials: inDevelopMode ? undefined : "include",
});

const parentApi = createApi({
  reducerPath: "parentApi",
  baseQuery: async (args, api, extraOptions) => {
    try {
      let result = await baseQuery(args, api, extraOptions);
      if (result.error) {
        if (result.error.status === 401) {
          api.dispatch(logout(true));
          api.dispatch(parentApi.util.resetApiState());
        } else {
          return getErrorFromResponse(result);
        }
      }
      return result;
    } catch (e) {
      return getErrorFromResponse(e);
    }
  },
  tagTypes,
  endpoints: (builder) => ({}),
});

export default parentApi;
