import { Typography } from "@material-ui/core";
import "../../styles/ToggleButtons.css";

export const Step1 = ({ state, onChange }) => {
  return (
    <>
      <Typography variant="h5" color="primary">
        What are you looking for?
      </Typography>
      <div className="general-info">
        <div className="toggle-button">
          {state === "projectpartner" && (
              <input
                type="radio"
                name="step1"
                id="projectpartner"
                onChange={onChange}
                checked={state}
              />
          )}
          {state !== "projectpartner" && (
              <input
                type="radio"
                name="step1"
                id="projectpartner"
                onChange={onChange}
                defaultChecked={state.projectpartner}
              />
          )}
          <label className="toggle-label" htmlFor="projectpartner">
            Project Partner
          </label>
        </div>
        <div className="toggle-button">
          {state === "projecttojoin" && (
              <input
                type="radio"
                name="step1"
                id="projecttojoin"
                onChange={onChange}
                checked={state}
              />
          )}
          {state !== "projecttojoin" && (
              <input
                type="radio"
                name="step1"
                id="projecttojoin"
                onChange={onChange}
                defaultChecked={state.projecttojoin}
              />
          )}
          <label htmlFor="projecttojoin">Project To Join</label>
        </div>
        <div className="toggle-button">
          {state === "lookingaround" && (
              <input
                type="radio"
                name="step1"
                id="lookingaround"
                onChange={onChange}
                checked={state}
              />
          )}
          {state !== "lookingaround" && (
              <input
                type="radio"
                name="step1"
                id="lookingaround"
                onChange={onChange}
                degfaultChecked={state.lookingaround}
              />
          )}
           <label htmlFor="lookingaround"> Looking Around</label>
        </div>
      </div>
    </>
  );
};
