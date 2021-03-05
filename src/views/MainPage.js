import  {NavBar} from '../components/navBar/NavBar';
import "../styles/MainPage.css"
import {Post} from '../components/Post'
import {MainPageWrapper} from '../common/MainPageWrapper'
import ModalToCreatePost from '../components/ModalToCreatePost'
import React, {useState} from 'react';
export default function MainPage() {


    
    const [postActive,setpostActive]=useState(false);
    function CreatePost(){
        if(!postActive){
            document.querySelector('#body').setAttribute('class','bodyOfPageOpacity')
            document.querySelector('#ModalCreatePost').style.display="flex"
            setpostActive(true)     
        }
        else{
            document.querySelector('#body').setAttribute('class','bodyOfPage')
            document.querySelector('#ModalCreatePost').style.display="none"
            setpostActive(false)
        }     
    }
    return (
        <>
        <MainPageWrapper>
            <div className="page">
            <div className="body">

export default function MainPage({handleLogout}) {
  
  
    return (
        <>
        <div className="buttonSection">
                <button className="btn btn-writeMessage">Write a message</button>
                <div className="form-group form-check">
                    <input type="checkbox" className="buttonYourNetwork" id="buttonYourNetwork"/>
                    <label className="buttonYourNetwork" for="buttonYourNetwork">Your Network</label>
                 </div>
                 <button className="btn-sortBy">Sort by: <b>Popular</b> v</button>
                 <button className="btn-sortBy" onClick={handleLogout}><b>Logout</b></button>
                
        </div>
           
            
        <div id="body"className="bodyOfPage">
            <div className="buttonSection">
                    <button onClick={CreatePost} className="btn btn-writeMessage">Write a message</button>
                    <button className="btn-sortBy">Sort by: <b>Popular</b> v</button>
                    
            </div>  
            </div>    
            <Post/> 
            
            <NavBar/>
            
            </div>
            </div>
            </MainPageWrapper>
            <ModalToCreatePost/>
    </>)
  }

  
   