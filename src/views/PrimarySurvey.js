import { Typography } from "@material-ui/core";
import '../styles/PrimarySurvey.css';
import logo from '../logo/FindITRotated.png';

import { WizardForm } from '../components/primary-survey/WizardForm'
import { useUser } from "../components/user-context/UserContextProvider";

export const PrimarySurvey = () => {
  const { user } = useUser();

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
        {user && <WizardForm /> 
        }
      </div>
      <div className="right-column"></div>
    </div>
  );
};
