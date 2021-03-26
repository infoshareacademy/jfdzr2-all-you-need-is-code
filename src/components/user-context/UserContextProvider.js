import { useState, useEffect } from "react";
import firebase from "../../fire";

import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [userUid, setUserUid] = useState(null);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const currentUser = firebase.auth().currentUser.uid;
    setUserUid(currentUser);
    console.log(userUid)
  }, []);

  useEffect(() => {
    if (userUid) {
      firebase
        .firestore()
        .collection("Users")
        .doc(userUid)
        .onSnapshot((userArray) => {
          setUser(userArray.data());
          console.log(user)
        });
    }
  }, [userUid]);

return <UserContext.Provider value={{user}}>
    {children}
</UserContext.Provider>

};

