import { Typography } from "@material-ui/core";

export const GeneralInfo = () => {
  return (
    <div className="general-info">
      <div className="first-question">
        <Typography variant="h5" color="primary">
          What are you looking for?
        </Typography>
        <div className="option-buttons">
          <button className="general-info-btn">
            <Typography variant="h5" color="primary">
              Project Partner
            </Typography>
          </button>
          <button className="general-info-btn">
            <Typography variant="h5" color="primary">
              Project To Join
            </Typography>
          </button>
          <button className="general-info-btn">
            <Typography variant="h5" color="primary">
              Just looking around
            </Typography>
          </button>
        </div>
      </div>
    </div>
  );
};
