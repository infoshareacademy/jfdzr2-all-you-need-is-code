import { Typography } from "@material-ui/core";
import "../../styles/ToggleButtons.css";
import { useState } from "react";

export const Step3 = () => {
  const [radio, setRadio] = useState('');
  const handleChange = (event) => { setRadio(event.target.value) }

  return (
    <div className="general-info-container">
      <Typography variant="h5" color="primary">
        What is your experience?
      </Typography>
      <div className="general-info">
      <div className="toggle-button" style={{width: '20%'}}>
        <input type="radio" name="step3" id="student" onChange={handleChange} value={radio} />
        <label className="student" htmlFor="project-partner">
          Student
        </label>
      </div>
      <div className="toggle-button" style={{width: '20%'}}>
        <input type="radio" name="step3" id="junior" onChange={handleChange} value={radio}/>
        <label htmlFor="junior">{'Junior (<2y)'}</label>
      </div>
      <div className="toggle-button" style={{width: '20%'}}>
        <input type="radio" name="step3" id="mid" onChange={handleChange} value={radio}/>
        <label htmlFor="mid"> Mid (2-4y)</label>
      </div>
      <div className="toggle-button" style={{width: '20%'}}>
        <input type="radio" name="step3" id="senior" onChange={handleChange} value={radio}/>
        <label htmlFor="senior"> {'Senior (>4y)'}</label>
      </div>
      </div>
    </div>
  );
};
