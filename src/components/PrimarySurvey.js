import { Typography } from "@material-ui/core";
import '../styles/PrimarySurvey.css'

export const PrimarySurvey = () => {
  return (
    <div className="primary-survey">
      <div className="logo-column"></div>
      <div className="survey-column">
        <Typography variant="h4" color='primary'>
          Let's get to know each other better!
        </Typography>
      </div>
      <div className="right-column"></div>
    </div>
  );
};
