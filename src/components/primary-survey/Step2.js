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
    "Angular",
    "Vue.js",
    "GIT",
    "Java",
    "Python",
    "Ruby",
    "PHP.",
    "Kotlin",
    "C Sharp",
    'C',
    'C++',
    'Elm',
    'Unity',
    'Scala',
    'Swift',
    'Go',
    'Rust'
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
              <div className="technologies-list-survey">
              <img className="technology-icon-survey" alt={technology} src={process.env.PUBLIC_URL + `/technologies/${technology}.png`} />
              {state.includes(technology) && (
              <FormControlLabel
              control={    
                <Checkbox
                    id={technology}
                    checked={state}
                    onChange={handleStep2Change}
                    name={technology}
                    color="primary"
                    key={index}
                  />
                }
                label={technology}
              />)}
              {!state.includes(technology) && (
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
              />)}
              </div>
            );
          })}
        </FormGroup>
      </div>
    </>
  );
};