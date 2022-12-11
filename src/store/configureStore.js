import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const dev = process.env.NODE_ENV === "development";

const middleware = [];

if (dev) middleware.push(logger);

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    undefined,
    middleware,
    preloadedState,
  });
  return store;
}
