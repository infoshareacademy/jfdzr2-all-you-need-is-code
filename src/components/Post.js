import '../styles/Post.css'
import profilePhoto from '../photos/profilePhotos/profilePhoto.jpeg'
// import Share from '../photos/share.png'
import Likes from '../photos/likes.png'
import Share from '../photos/share.png'
import Coment from '../photos/coment.png'
export default function Post(props){
    return (
      <div className="Modal">
        <div className="modalOfPost">
          <div className="informationAboutTheWriter">
              <img className="profile-Post-Photo" src={profilePhoto}></img>
              <h3 className="nameOfWriter">Amanda Steal</h3>
              <p className="positionInProgramming">Senior Front end Developer</p>
          </div>
          <h2 className="tittle">{props.tittle}</h2>
            <div className="contentOfThePost">
                <p className="textOfPost">Lorem ipsum orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ...</p>
                
            
               <div className="postStatus">
                 <div className="likesSection">
                    <img className="likesPhoto" src={Likes}></img>
                    <p className="likesCounter">243</p>
                 </div>
                  <div className="comentSection">
                    <img className="comentPhoto" src={Coment}></img>
                    <p >comment</p>
                  </div>
                    <img className="sharePhoto" src={Share}></img>
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
