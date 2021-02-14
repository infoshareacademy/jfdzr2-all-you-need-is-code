import { Typography } from "@material-ui/core";

export const SurveySteps = () => {
    return (
      <div className="survey-steps">
          <div className='survey-single-step' data='active'><Typography variant="h6" color='secondary'>General Info</Typography></div>
          <div className='survey-single-step'></div>
          <div className='survey-single-step'></div>    
      </div>
    );
  };