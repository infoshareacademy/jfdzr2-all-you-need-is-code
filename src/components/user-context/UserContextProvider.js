import { useState, useEffect, useContext, createContext } from "react";
import firebase from "../../fire";

export const UserContext = createContext({
  user: {},
});

const purposeToLabelMapping = {
  projectpartner: "Project partner",
  projecttojoin: "Project to join",
  lookingaround: "Just looking around"
}

export const purposes = Object.keys(purposeToLabelMapping)

export const labelFromPurpose = purpose => {
  return purposeToLabelMapping[purpose] || 'Unknown'
}

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

export const useUser = () => {
  return useContext(UserContext)
}