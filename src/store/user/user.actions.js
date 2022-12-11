import { createAction } from "@reduxjs/toolkit";
import { UserActionTypes } from "./user.types";

export const setCurrentUser = createAction(UserActionTypes.SET_CURRENT_USER);
