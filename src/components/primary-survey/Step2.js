import { useState } from "react";
import {
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

export const Step2 = () => {
  const [state, setState] = useState(technologies);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="survey-skills-container">
      <Typography variant="h5" color="primary">
        Choose technologies:
      </Typography>
      <div className="survey-skills">
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
            }
            label="JavaScript"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Java"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedC}
                onChange={handleChange}
                name="checkedC"
                color="primary"
              />
            }
            label="Python"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedD}
                onChange={handleChange}
                name="checkedD"
                color="primary"
              />
            }
            label="Ruby on Rails"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedE}
                onChange={handleChange}
                name="checkedE"
                color="primary"
              />
            }
            label="C#"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedF}
                onChange={handleChange}
                name="checkedF"
                color="primary"
              />
            }
            label="PHP."
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedG}
                onChange={handleChange}
                name="checkedG"
                color="primary"
              />
            }
            label="Kotlin"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedH}
                onChange={handleChange}
                name="checkedH"
                color="primary"
              />
            }
            label="CSS"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedI}
                onChange={handleChange}
                name="checkedI"
                color="primary"
              />
            }
            label="HTML"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedJ}
                onChange={handleChange}
                name="checkedJ"
                color="primary"
              />
            }
            label="ReactJS"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedK}
                onChange={handleChange}
                name="checkedK"
                color="primary"
              />
            }
            label="AngularJS"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedL}
                onChange={handleChange}
                name="checkedL"
                color="primary"
              />
            }
            label="Vue.js"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedM}
                onChange={handleChange}
                name="checkedM"
                color="primary"
              />
            }
            label="RWD"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedN}
                onChange={handleChange}
                name="checkedN"
                color="primary"
              />
            }
            label="Firebase"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedO}
                onChange={handleChange}
                name="checkedO"
                color="primary"
              />
            }
            label="TypeScript"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedP}
                onChange={handleChange}
                name="checkedP"
                color="primary"
              />
            }
            label="NodeJS"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedR}
                onChange={handleChange}
                name="checkedR"
                color="primary"
              />
            }
            label="Redux"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedS}
                onChange={handleChange}
                name="checkedS"
                color="primary"
              />
            }
            label="GIT"
          />
        </FormGroup>
      </div>
    </div>
  );
};

const technologies = {
  checkedA: false,
  checkedB: false,
  checkedC: false,
  checkedD: false,
  checkedE: false,
  checkedF: false,
  checkedG: false,
  checkedH: false,
  checkedI: false,
  checkedJ: false,
  checkedK: false,
  checkedL: false,
  checkedM: false,
  checkedN: false,
  checkedO: false,
  checkedP: false,
  checkedR: false,
  checkedS: false
};
