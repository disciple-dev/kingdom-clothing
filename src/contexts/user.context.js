import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../services/reducer/reducer.utils";
import {
  createAuthUserFromAuth,
  onAuthStateChangedListener,
} from "../services/firebase";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserActionTypes = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unknown type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, {
    currentUser: null,
  });

  const setCurrentUser = (user) =>
    dispatch(createAction(UserActionTypes.SET_CURRENT_USER, user));

  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    return onAuthStateChangedListener(async (user) => {
      if (user) {
        await createAuthUserFromAuth(user);
      }
      setCurrentUser(user);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
