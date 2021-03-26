import { useState, useEffect } from "react";
import firebase from "../../fire";

import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [userUid, setUserUid] = useState('');
  const [user, setUser] = useState([]);
  
  const currentUser = firebase.auth().currentUser.uid;

  useEffect(() => {
    console.log(currentUser)
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
        });
    }
  }, [userUid]);

  useEffect(() => {
    console.log(userUid)
    console.log(user)
  }, [user])

return <UserContext.Provider value={{user}}>
    {children}
</UserContext.Provider>

};

