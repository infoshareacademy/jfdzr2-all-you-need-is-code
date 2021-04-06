import { Typography } from "@material-ui/core";
import "../../styles/ToggleButtons.css";
import {
  labelFromExperience,
  experiences,
} from "../user-context/UserContextProvider";

export const ExperiencePicker = ({ value, onChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <>
      <Typography variant="h5" color="primary">
        What is your experience?
      </Typography>
      <div className="general-info">
        {experiences.map((experience) => {
          const id = `purpose-${experience}`;
          return (
            <div className="toggle-button" key={experience} style={{ width: "20%" }}>
              <input
                type="radio"
                name="experience"
                id={id}
                value={experience}
                onChange={handleChange}
                checked={value === experience}
              />
              <label htmlFor={id}>{labelFromExperience(experience)}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};
