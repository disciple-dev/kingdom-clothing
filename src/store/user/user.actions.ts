import { createAction } from "@reduxjs/toolkit";
import { UserActionTypes } from "./user.types";
import { User } from "firebase/auth";

export const setCurrentUser = createAction<User | null>(
  UserActionTypes.SET_CURRENT_USER
);
