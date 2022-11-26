import { createContext, useEffect, useState } from "react";
import {
  createAuthUserFromAuth,
  onAuthStateChangedListener,
} from "../services/firebase";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
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
