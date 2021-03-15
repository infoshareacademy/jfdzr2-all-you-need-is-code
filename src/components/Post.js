import '../styles/Post.css'
import profilePhoto from '../photos/profilePhotos/profilePhoto.jpeg'
// import Share from '../photos/share.png'
import Likes from '../photos/likes.png'
import Share from '../photos/share.png'
import Coment from '../photos/coment.png'
import fire from '../fire'
import React, {useState, useEffect} from 'react';
export default function Post(props){

const [like, setLike] = useState(0);
console.log(like)

function handleLike(e){
  const docRef = fire.firestore().collection("Posts").doc(`Post${e.target.id}`)
  fire.firestore().runTransaction(function(transaction) {
    // This code may get re-run multiple times if there are conflicts.
    return transaction.get(docRef).then(function(doc) {
        transaction.update(docRef, { likesCounter: (doc.data().likesCounter || 0) + 1 });
    });
  }).then(function() {
    console.log("Transaction successfully committed!");
  }).catch(function(error) {
    console.log("Transaction failed: ", error);
  });
   
 }
  
  


    return (
      <div className="Modal">
        <div className="modalOfPost">
          <div className="informationAboutTheWriter">
              <img className="profile-Post-Photo" src={profilePhoto}></img>
              <h3 className="nameOfWriter">Amanda Steal</h3>
              <p className="positionInProgramming">Senior Front end Developer</p>
          </div>
          <h2 className="tittle">{props.title}</h2>
            <div className="contentOfThePost">
                <p className="textOfPost">{props.text}</p>
                
            
               <div className="postStatus">
                 <button onClick={handleLike}  className="likesSection">
                  
                    <img className="likesPhoto" id={props.index} src={Likes}></img>
                    <p className="likesCounter" >{props.likes}</p>
                 </button>
                  <div className="comentSection">
                    <img className="comentPhoto" src={Coment}></img>
                    <p >comment</p>
                  </div>
                   
                    <p className="data">23.01.2021 01:00 pm</p>
               </div>
               <div className="coment">
                  <img className="photoOfComentator"src={profilePhoto}></img>
                  <div className="comentContent">
                    <h5 className="comentatorName">Hubert Urbański</h5>
                    <p className="comentText">Lorem ipsum orem ipsum dolor sit</p>
                  </div>
               </div>
               
            </div>
        </div>
        </div>
    
  );
}
