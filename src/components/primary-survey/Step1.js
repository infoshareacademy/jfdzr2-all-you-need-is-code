import { Typography } from "@material-ui/core";
import { SurveySteps } from "./SurveySteps";
import "../../styles/ToggleButtons.css";

export const Step1 = () => {
  return (
    <div className="general-info">
      <div className="toggle-button">
        <input type="radio" name="step1" id="project-partner" />
        <label className="toggle-label" htmlFor="project-partner">
          Project Partner
        </label>
      </div>
      <div className="toggle-button">
        <input type="radio" name="step1" id="project-to-join" />
        <label htmlFor="project-to-join">Project To Join</label>
      </div>
      <div className="toggle-button">
        <input type="radio" name="step1" id="looking-around" />
        <label htmlFor="looking-around"> Looking Around</label>
      </div>
    </div>
  );
};
