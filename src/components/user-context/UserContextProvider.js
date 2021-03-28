import { useState, useEffect } from "react";
import firebase from "../../fire";

import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    if (user === null) {
      return;
    }
    const unsubscribe = firebase
      .firestore()
      .collection("Users")
      .doc(user.uid)
      .onSnapshot((userData) => {
        setUserData(userData.data() || {});
      });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

  return (
    <UserContext.Provider value={{ user: userData }}>
      {children}
    </UserContext.Provider>
  );
};
