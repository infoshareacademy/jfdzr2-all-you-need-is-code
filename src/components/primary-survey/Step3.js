import { Typography } from "@material-ui/core";
import "../../styles/ToggleButtons.css";

export const Step3 = ({state, onChange: handleStep3Change}) => {

  return (
    <div className="general-info-container">
      <Typography variant="h5" color="primary">
        What is your experience?
      </Typography>
      <div className="general-info">
      <div className="toggle-button" style={{width: '20%'}}>
        <input type="radio" name="step3" id="student" onChange={handleStep3Change} defaultChecked={state.student} />
        <label className="student" htmlFor="project-partner">
          Student
        </label>
      </div>
      <div className="toggle-button" style={{width: '20%'}}>
        <input type="radio" name="step3" id="junior" onChange={handleStep3Change} defaultChecked={state.junior}/>
        <label htmlFor="junior">{'Junior (<2y)'}</label>
      </div>
      <div className="toggle-button" style={{width: '20%'}}>
        <input type="radio" name="step3" id="mid" onChange={handleStep3Change} defaultChecked={state.mid}/>
        <label htmlFor="mid"> Mid (2-4y)</label>
      </div>
      <div className="toggle-button" style={{width: '20%'}}>
        <input type="radio" name="step3" id="senior" onChange={handleStep3Change} defaultChecked={state.senior}/>
        <label htmlFor="senior"> {'Senior (>4y)'}</label>
      </div>
      </div>
    </div>
  );
};
