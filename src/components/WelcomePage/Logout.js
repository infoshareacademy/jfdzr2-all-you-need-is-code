import {useEffect} from 'react'
import fire from '../../fire'

export const handleLogout = () => {
      fire.auth().signOut();
          };


export const authListener = () => {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setEmail("");
      setPassword("");
      setUser(user);
    } else {
      setUser("");
    }
  });
};

useEffect(() => {
  authListener();
},[]);



const clearInputs = () => {
  setEmail("");
  setPassword("");
};