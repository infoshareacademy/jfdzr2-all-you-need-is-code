import  {NavBar} from '../components/navBar/NavBar';

import "../styles/MainPage.css"
import {Post} from '../components/Post'
import {MainPageWrapper} from '../common/MainPageWrapper'
export default function MainPage() {
  
  
    return (

        <>
        <MainPageWrapper>
        <div>
            <div className="buttonSection">
                    <button className="btn btn-writeMessage">Write a message</button>
                    <div className="form-group form-check">
                        <input type="checkbox" className="buttonYourNetwork" id="buttonYourNetwork"/>
                        <label className="buttonYourNetwork" for="buttonYourNetwork">Your Network</label>
                    </div>
                    <button className="btn-sortBy">Sort by: <b>Popular</b> v</button>
                    
            </div>
           
              
             
       
            


       
        <Post/>
        
            <NavBar/>
            </div>
            </MainPageWrapper>
            
    </>)
  }
  
   