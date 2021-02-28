import { Typography } from "@material-ui/core";

export const SurveySteps3 = (currentStep) => {
    return (
      <div className="survey-steps">
         <div className='survey-single-step' ><Typography variant="h6" color='secondary'>General Info</Typography></div>
          <div className='survey-single-step'><Typography variant="h6" color='secondary'>Skills</Typography></div>
          <div className='survey-single-step' data='active'><Typography variant="h6" color='secondary'>Experience</Typography></div>
          <div className='survey-single-step' ><Typography variant="h6" color='secondary'>About you</Typography></div>    
      </div>
    );
  };