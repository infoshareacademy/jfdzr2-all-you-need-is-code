import { Typography } from "@material-ui/core";
import "../../styles/ToggleButtons.css";
import { useState } from "react";

export const Step1 = () => {
  const [radio, setRadio] = useState('');
  const handleChange = (event) => { setRadio(event.target.value) }

  return (
    <div className="general-info-container">
      <Typography variant="h5" color="primary">
        What are you looking for?
      </Typography>
      <div className="general-info">
      <div className="toggle-button">
        <input type="radio" name="step1" id="project-partner" onChange={handleChange} value={radio} />
        <label className="toggle-label" htmlFor="project-partner">
          Project Partner
        </label>
      </div>
      <div className="toggle-button">
        <input type="radio" name="step1" id="project-to-join" onChange={handleChange} value={radio}/>
        <label htmlFor="project-to-join">Project To Join</label>
      </div>
      <div className="toggle-button">
        <input type="radio" name="step1" id="looking-around" onChange={handleChange} value={radio}/>
        <label htmlFor="looking-around"> Looking Around</label>
      </div>
      </div>
    </div>
  );
};
