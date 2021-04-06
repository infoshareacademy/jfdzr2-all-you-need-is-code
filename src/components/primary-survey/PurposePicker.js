import { Typography } from "@material-ui/core";
import "../../styles/ToggleButtons.css";
import { labelFromPurpose, purposes } from "../user-context/UserContextProvider";

export const PurposePicker = ({ value, onChange }) => {

  const handleChange = (event) => {
    const value = event.target.value
    onChange(value)
  }

  return (
    <>
      <Typography variant="h5" color="primary">
        What are you looking for?
      </Typography>
      <div className="general-info">
        {
          purposes.map(purpose => {
            const id = `purpose-${purpose}`
            return (
              <div className="toggle-button" key={purpose}>
                <input
                  type="radio"
                  name="purpose"
                  id={id}
                  value={purpose}
                  onChange={handleChange}
                  checked={value === purpose}
                />
                <label htmlFor={id}>{labelFromPurpose(purpose)}</label>
              </div>
            )
          })
        }
      </div>
    </>
  );
};
