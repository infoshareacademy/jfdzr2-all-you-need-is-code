import  {NavBar} from '../components/navBar/NavBar';
import "../styles/MainPage.css"
import {Post} from '../components/Post'

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
           
              
             
       
            


       
        <Post/>
        
            <NavBar/>
            
    </>)
  }
  
   