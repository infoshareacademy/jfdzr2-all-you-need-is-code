import { Typography } from "@material-ui/core";

export const SurveyNavBtns = ({ onClick, currentStep }) => {
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
      <button
        className="next-prev-btn"
        onClick={() => {
          if (currentStep === 4) return currentStep;
          onClick(currentStep + 1);
        }}
      >
        <Typography variant="h6" color="primary">
          Next
        </Typography>
      </button>
      <button className={"skip-btn"}>
        <Typography variant="h6" color="primary">
          Skip
        </Typography>
      </button>
    </div>
 );
};