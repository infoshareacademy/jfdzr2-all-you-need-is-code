import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../styles/ToggleButtons.css";

export const Step1 = ({state, onChange: handleStep1Change}) => {
  return (
    <>
      <Typography variant="h5" color="primary">
        What are you looking for?
      </Typography>
      <div className="general-info">
      <div className="toggle-button">
        <input type="radio" name="step1" id="projectpartner" onChange={handleStep1Change} defaultChecked={state.projectpartner}  />
        <label className="toggle-label" htmlFor="projectpartner">
          Project Partner
        </label> 
      </div>
      <div className="toggle-button">
        <input type="radio" name="step1" id="projecttojoin" onChange={handleStep1Change} defaultChecked={state.projecttojoin} />
        <label htmlFor="projecttojoin">Project To Join</label>
      </div>
      <div className="toggle-button">
        <input type="radio" name="step1" id="lookingaround" onChange={handleStep1Change} defaultChecked={state.lookingaround}/>
        <label htmlFor="lookingaround"> Looking Around</label>
      </div>
      </div>
    </>
  );
};
