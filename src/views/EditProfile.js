import { Typography } from "@material-ui/core";
import '../styles/PrimarySurvey.css';
import logo from '../logo/FindITRotated.png';

import { EditProfileWizardForm } from '../components/primary-survey/EditProfileWizardForm'
import { useContext } from "react";
import { UserContext } from "../components/user-context/UserContext";

export const EditProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="primary-survey">
      <div className="logo-column"><img src={logo} alt='FindIT-logo'/></div>
      <div className="survey-column">
        
        <Typography variant="h4" color='primary'>
          Let's get to know each other better!
        </Typography>
        <Typography variant="h5" color='primary'>
          Answer a few simple questions
        </Typography>
        {user && <EditProfileWizardForm /> 
        }
      </div>
      <div className="right-column"></div>
    </div>
  );
};
