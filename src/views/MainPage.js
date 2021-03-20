import  {NavBar} from '../components/navBar/NavBar';
import "../styles/MainPage.css"
import Post from '../components/Post'
import {MainPageWrapper} from '../common/MainPageWrapper'
import ModalToCreatePost from '../components/ModalToCreatePost'
import React, {useState, useEffect} from 'react';
import fire from '../fire';
import { DeveloperModeSharp, PostAddSharp, Unsubscribe } from '@material-ui/icons';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom'
export default function MainPage() {
      const [lenght,setLenght]=useState(0)
    const [isModalOpen, setIsModalOpen]=useState(false);
    const [posts,setPosts]=useState([])
    const handleLogout = () => {
        fire.auth().signOut();
      }
    function toggleModal(){
            setIsModalOpen(current => !current)
    }
    useEffect(() => {
        const unsubscribe = fire.firestore().collection("Posts").onSnapshot((querySnapshot) => {
            const posts = []
            querySnapshot.forEach((doc) => { 
                
               posts.push({
                   id: doc.id,
                   ...doc.data()
               })
            });
            for(let i=1;i<5;i++){
                fire.firestore().collection('Posts').doc(`Post${i}`).collection('Likes').get().then(snap=>{
                    var size=snap.size
                    var array=posts
                    var object={likesCounter:size}
                    array[i-1]={...array[i-1], ...object}
                    setPosts(array)

            }); 
            
            }
            
        }); 

    }, [])
   
    return (
        <>
        <MainPageWrapper>
            <div className="page">
            <div className="body">
        <div id="body"className="bodyOfPage">
            <div className="buttonSection">
                    <button onClick={toggleModal} className="btn btn-writeMessage">Write a message</button>
                    <button className="btn-sortBy">Sort by: <b>Popular</b> v</button>
                    <button className="btn-sortBy" onClick={handleLogout}><Link to='/'><b>Logout</b></Link></button>
            </div>
            </div>
            {
                console.log(posts)
            }
            {
                posts.map(post=><div>{<Post key={post.id} title={post.title} text={post.text} likes={post.likesCounter} index={post.id} />}</div>)
            }
          
            <NavBar/>
            </div>
            </div>
            </MainPageWrapper>
            <ModalToCreatePost isModalOpen={isModalOpen} toggleModal={toggleModal}/>
    </>)
  }