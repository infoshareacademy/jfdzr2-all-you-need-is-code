import { useEffect, useState } from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import profilePhoto from "../../photos/profilePhotos/profilePhoto.jpeg";
import { Image } from "react-bootstrap";
import firebase from "../../fire";

export const ProfileInfo = () => {
  const [profileInformation, setProfileInformation] = useState([]);

  const user = firebase.auth().currentUser.uid;

  useEffect(() => {
    firebase
      .firestore()
      .collection("Users")
      .doc(user)
      .onSnapshot((infoArray) => {
        setProfileInformation(infoArray.data());
      });
      console.log(profileInformation.location)
  }, []);

  return (
    <div className="profile-sections-container">
      <Paper elevation={3} className="profile-section">
        <Image
          src={profilePhoto}
          fluid
          className="profilePhoto2 rounded mb-0"
        />
        <Typography variant="h5" color="inherit" style={{ fontWeight: "bold" }}>
          {profileInformation.name}
        </Typography>
        <Typography variant="p" color="inherit" style={{textTransform: "capitalize"}}>
          Experience: {profileInformation.experience}
        </Typography>
        <Typography variant="p" color="inherit" style={{textTransform: "capitalize"}}>
          Looking for: {profileInformation.purpose}
        </Typography>
        <Typography variant="p" color="inherit">
          Location: {profileInformation.location}
        </Typography>
        <Button color="primary" style={{ backgroundColor: "lightgrey" }}>
          Edit your profile
        </Button>
      </Paper>
      <Paper elevation={3} className="profile-section">
        <Typography variant="h6" color="inherit">
          About:
        </Typography>
        <Typography variant="p" color="inherit">
          {profileInformation.about}
        </Typography>
      </Paper>
      <Paper elevation={3} className="profile-section">
        <Typography variant="h6" color="inherit">
          Technologies:
        </Typography>
        <ul style={{ color: "black" }}>
          {profileInformation?.technologies?.map((technology, index) => {
            return (
              <li key={index} style={{ color: "black" }}>
                {technology}
              </li>
            );
          })}
        </ul>
      </Paper>
      <Paper elevation={3} className="profile-section">
        <Typography variant="h6" color="inherit">
          Projects:
        </Typography>
        <Typography variant="p" color="inherit">
          {profileInformation.projects}
        </Typography>
        
      </Paper>
    </div>
  );
};
