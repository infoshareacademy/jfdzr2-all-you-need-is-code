import { Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

export const SurveyNavBtns = ({ onClick, currentStep, answers }) => {
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
        <button
          className="next-prev-btn"
          onClick={() => {
            console.log(answers)
          }}
        >
          <Link to='/main-page'>
          <Typography variant="h6" color="primary">
            Submit
          </Typography>
          </Link>
        </button>
      )}

      <button className={"skip-btn"}>
        <Typography variant="h6" color="primary">
          Skip
        </Typography>
      </button>
    </div>
  );
};
