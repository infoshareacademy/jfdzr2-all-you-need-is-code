import { Typography } from "@material-ui/core";

export const GeneralInfo = () => {
    return (
      <div className="general-info">
          <Typography variant="h5" color='primary'>What are you looking for?</Typography>
          <div className='option-buttons'>
          <button className='general-info-btn' data='active'><Typography variant="h5" color='secondary'>Project Partner</Typography></button>
          <button className='general-info-btn'><Typography variant="h5" color='secondary'>Project To Join</Typography></button>
          <button className='general-info-btn'><Typography variant="h5" color='secondary'>Just looking around</Typography></button>
          </div> 
      </div>
    );
  };