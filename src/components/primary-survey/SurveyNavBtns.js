import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import firebase from "../../fire";
import { technologies } from "../user-context/UserContextProvider";

export const SurveyNavBtns = ({ onClick, currentStep, answers, type = 'create' }) => {
  const handleSubmit = () => {
    const user = firebase.auth().currentUser.uid

    const answersObject = {
      name: answers[0],
      purpose: answers[1],
      // we need to make sure the tech names match the ones for which we have icons
      technologies: answers[2].filter(answer => technologies.includes(answer)),
      experience: Object.keys(answers[3]),
      about: answers[4],
      location: answers[5],
      projects: answers[6],
      avatarUrl: answers[7],
      github: answers[8],
      linkedin: answers[9],
      userUid: answers[10],
      userEmail: answers[11]
    }
    firebase.firestore().collection('Users').doc(user).set(answersObject)
  };

  return (
    <div className="next-prev-btns-section">
      <button
        className="next-prev-btn"
        onClick={() => {
          if (currentStep === 1) return currentStep;
          onClick(currentStep - 1);
        }}
      >
        <Typography variant="h6" color="primary">
          Previous
        </Typography>
      </button>

      {currentStep !== 4 && (
        <button
          className="next-prev-btn"
          onClick={() => {
            onClick(currentStep + 1);
          }}
        >
          <Typography variant="h6" color="primary">
            Next
          </Typography>
        </button>
      )}

      {currentStep === 4 && (
        <button className="next-prev-btn" onClick={() => handleSubmit()}>
          <NavLink to="/main-page">
            <Typography variant="h6" color="primary">
              Submit
            </Typography>
          </NavLink>
        </button>
      )}

      {
        type === 'create' && 
        <button className={"skip-btn"} onClick={() => handleSubmit()}>
          <NavLink to="/main-page">
            <Typography variant="h6" color="primary">
              Skip
            </Typography>
          </NavLink>
        </button>
      }

      {
        type === 'edit' &&
        <button className={"skip-btn"}>
          <NavLink to="/profile-page">
            <Typography variant="h6" color="primary">
              Cancel
            </Typography>
          </NavLink>
        </button>
      }
      
    </div>
  );
};
