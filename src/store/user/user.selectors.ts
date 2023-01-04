import { RootState } from "../configureStore";

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
