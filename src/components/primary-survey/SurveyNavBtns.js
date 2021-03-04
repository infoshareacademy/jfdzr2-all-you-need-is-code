import { Typography } from "@material-ui/core";

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
          <Typography variant="h6" color="primary">
            Submit
          </Typography>
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
