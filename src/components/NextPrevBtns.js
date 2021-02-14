import { Typography } from "@material-ui/core";

export const NextPrevBtns = () => {
    return (
      <div className="next-prev-btns-section">
            <button className="next-prev-btn">
              <Typography variant="h6" color="primary">
                Previous
              </Typography>
            </button>
            <button className="next-prev-btn">
              <Typography variant="h6" color="primary">
                Next
              </Typography>
            </button>
            <button className={"skip-btn"}>
              <Typography variant="h6" color="primary">
                Skip
              </Typography>
            </button>
      </div>
    );
  };
  