import { useState, useEffect, useContext, createContext } from "react";
import firebase from "../../fire";

const UserContext = createContext({
  user: {},
});

const purposeToLabelMapping = {
  projectpartner: "Project partner",
  projecttojoin: "Project to join",
  lookingaround: "Just looking around"
}

export const technologies = [
  "JavaScript",
  "CSS",
  "HTML",
  "ReactJS",
  "Redux",
  "RWD",
  "Firebase",
  "TypeScript",
  "NodeJS",
  "Angular",
  "Vue.js",
  "GIT",
  "Java",
  "Python",
  "Ruby",
  "PHP.",
  "Kotlin",
  "C Sharp",
  'C',
  'C++',
  'Elm',
  'Unity',
  'Scala',
  'Swift',
  'Go',
  'Rust'
];

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