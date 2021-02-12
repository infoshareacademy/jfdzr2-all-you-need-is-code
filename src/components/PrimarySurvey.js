import { Typography } from "@material-ui/core";
import '../styles/PrimarySurvey.css';
import logo from '../logo/FindITRotated.png';

import { SurveySteps } from './SurveySteps';
import { GeneralInfo } from './GeneralInfo';
import { NextPrevBtns } from './NextPrevBtns';

export const PrimarySurvey = () => {
  return (
    <div className="primary-survey">
      <div className="logo-column"><img src={logo} alt='FindIT-logo'/></div>
      <div className="survey-column">
        <div>
        <Typography variant="h4" color='primary'>
          Let's get to know each other better!
        </Typography>
        <Typography variant="h5" color='primary'>
          Answer a few simple questions
        </Typography>
        </div>
        <div>
        <SurveySteps />
        <GeneralInfo />
        </div>
        <NextPrevBtns />
      </div>
      <div className="right-column"></div>
    </div>
  );
};
