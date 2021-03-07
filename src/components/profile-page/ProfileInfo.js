import { Paper, Typography, Button } from "@material-ui/core";
import profilePhoto from '../../photos/profilePhotos/profilePhoto.jpeg';
import { Image } from 'react-bootstrap';
import firebase from "../../fire"

export const ProfileInfo = () => {
  const user = firebase.auth().currentUser.uid;

  firebase.firestore().collection('Users').doc(user).onSnapshot((doc) => {console.log(doc.data()['location'])});

  return (
    <div className="profile-sections-container">
      <Paper elevation={3} className="profile-section">
      <Image src={profilePhoto} fluid className="profilePhoto2 rounded mb-0" /> 
      <Typography variant="h5" color="primary" style={{fontWeight: 'bold'}}>Clark Gable</Typography>
      <Typography variant="p" color="inherit">Experience: Senior</Typography>
      <Typography variant="p" color="inherit">Looking for: Project Partner</Typography>
      <Typography variant="p" color="inherit">Location: Fresno</Typography>
        <Button color="primary" style={{backgroundColor: 'lightgrey'}}>Edit your profile</Button>
      </Paper>
      <Paper elevation={3} className="profile-section">
      <Typography variant="h6" color="primary">About:</Typography>
      <Typography variant="p" color="inherit">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
      </Paper>
      <Paper elevation={3} className="profile-section">
      <Typography variant="h6" color="primary">Technologies:</Typography>
        <ul>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
      </Paper>
      <Paper elevation={3} className="profile-section">
      <Typography variant="h6" color="primary">Projects:</Typography>
        <ul>
            <li>FindIT</li>
            <li>FrickinAwesomeSnakeGame</li>
            <li>Pokedex</li>
        </ul>
      </Paper>
    </div>
  );
};
