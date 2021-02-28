import { useState } from "react";
import {
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

export const Step2 = ({ state, onChange: handleStep2Change }) => {
  const technologies = [
    "JavaScript", "Java", "Python", "Ruby on Rails", "C#", "PHP.", "Kotlin", "CSS", "HTML", "ReactJS", "AngularJS", "Vue.js", "RWD", "Firebase", "TypeScript", "NodeJS", "Redux", "GIT"];

  return (
    <div className="survey-skills-container">
      <Typography variant="h5" color="primary">
        Choose technologies:
      </Typography>
      <div className="survey-skills">
        <FormGroup row>
          {technologies.map((technology) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    id={technology}
                    checked={state.technology}
                    onChange={handleStep2Change}
                    name={technology}
                    color="primary"
                  />
                }
                label={technology}
              />
            );
          })}

          <FormControlLabel
            control={
              <Checkbox
                id="bleh"
                checked={state.bleh}
                onChange={handleStep2Change}
                name="bleh"
                color="primary"
              />
            }
            label="JavaScript"
          />
        </FormGroup>
      </div>
    </div>
  );
};
