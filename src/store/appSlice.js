import { getAppCredentials, removeAppCredentials } from "@/configs/utils"

import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
  name: "app",
  initialState: { ...getAppCredentials() },
  reducers: {
    setAppToken(state, { payload }) {
      state.auth.token = payload?.token
    },
    setAppUser(state, { payload }) {
      state.user = payload
    },
    setAppUserState(state, { payload }) {
      state.user.status = payload
    },
    setPrivileges(state, { payload }) {
      state.privileges = payload
    },
    logout(state, { payload }) {
      removeAppCredentials(payload)
      state.auth.token = null
      state.user = null
    },
  },
})

export const { setAppToken, setAppUser, setPrivileges, logout, setAppUserState } = appSlice.actions
export default appSlice
