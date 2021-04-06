import {
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

import { technologies } from '../../components/user-context/UserContextProvider'

export const TechnologyPicker = ({ values = [], onChange }) => {

  const handleChange = (event) => {
    if (event.target.checked) {
      // add to table
      onChange((values = []) => [...values, event.target.id]);
    } else {
      // remove from table
      onChange((values = []) => values.filter(v => v !== event.target.id));
    }
  };

  return (
    <>
      <Typography variant="h5" color="primary">
        Choose technologies:
      </Typography>
      <div className="survey-skills" style={{ marginTop: "20px" }}>
        <FormGroup row>
          {technologies.map((technology, index) => {
            const isPicked = values.includes(technology);
            return (
              <div className="technologies-list-survey">
                <img className="technology-icon-survey" alt={technology} src={process.env.PUBLIC_URL + `/technologies/${technology}.png`} />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id={technology}
                        checked={isPicked}
                        onChange={handleChange}
                        name={technology}
                        color="primary"
                        key={index}
                      />
                    }
                    label={technology}
                  />
              </div>
            );
          })}
        </FormGroup>
      </div>
    </>
  );
};