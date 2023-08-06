import { combineReducers, configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import appReducer from "./appSlice";
import parentApi from "./parentApi";

const reducers = combineReducers({
  [appReducer.name]: appReducer.reducer,
  [parentApi.reducerPath]: parentApi.reducer,
});

export default configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(parentApi.middleware, thunk),
});
