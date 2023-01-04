import { createReducer } from "@reduxjs/toolkit";
import { setCurrentUser } from "./user.actions";
import { User } from "firebase/auth";

export interface IUserReducerState {
  currentUser: User | null;
}

const INITIAL_STATE: IUserReducerState = { currentUser: null };

export const userReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setCurrentUser, (state, action) => {
    state.currentUser = action.payload;
  });
});
