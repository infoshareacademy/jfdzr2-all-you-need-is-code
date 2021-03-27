import {
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

export const Step2 = ({ state, onChange: handleStep2Change }) => {
  const technologies = [
    "JavaScript",
    "CSS",
    "HTML",
    "ReactJS",
    "Redux",
    "RWD",
    "Firebase",
    "TypeScript",
    "NodeJS",
    "AngularJS",
    "Vue.js",
    "GIT",
    "Java",
    "Python",
    "Ruby on Rails",
    "PHP.",
    "Kotlin",
    "C#",
    'C',
    'C++'
  ];

  return (
    <>
      <Typography variant="h5" color="primary">
        Choose technologies:
      </Typography>
      <div className="survey-skills" style={{ marginTop: "20px" }}>
        <FormGroup row>
          {technologies.map((technology, index) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    id={technology}
                    defaultChecked={state[technology]}
                    onChange={handleStep2Change}
                    name={technology}
                    color="primary"
                    key={index}
                  />
                }
                label={technology}
              />
            );
          })}
        </FormGroup>
      </div>
    </>
  );
};
