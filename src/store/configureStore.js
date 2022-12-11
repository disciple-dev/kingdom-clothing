import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleware = [logger];

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    undefined,
    middleware,
    preloadedState,
  });
  return store;
}
