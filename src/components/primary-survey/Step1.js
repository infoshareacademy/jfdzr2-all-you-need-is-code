import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../styles/ToggleButtons.css";

export const Step1 = ({state, onChange: handleStep1Change}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        width: "50%",
        backgroundColor: 'white',
        marginTop: '20px',
        borderRadius: '15px',
        padding: '10px',
        marginBottom: '20px'
      }
    }
  }));
  
  const classes = useStyles();

  return (
    
    <div className="general-info-container">
      <Typography variant="h5" color="primary" style={{marginTop: '20px'}}>
        What is your name?
      </Typography>
      <div className={classes.root}>
    <TextField id="outlined-basic" label="" variant="standard" />
    </div>
      <Typography variant="h5" color="primary">
        What are you looking for?
      </Typography>
      <div className="general-info">
      <div className="toggle-button">
        <input type="radio" name="step1" id="projectpartner" onChange={handleStep1Change} checked={state.projectpartner}  />
        <label className="toggle-label" htmlFor="projectpartner">
          Project Partner
        </label>
      </div>
      <div className="toggle-button">
        <input type="radio" name="step1" id="projecttojoin" onChange={handleStep1Change} checked={state.projecttojoin} />
        <label htmlFor="projecttojoin">Project To Join</label>
      </div>
      <div className="toggle-button">
        <input type="radio" name="step1" id="lookingaround" onChange={handleStep1Change} checked={state.lookingaround}/>
        <label htmlFor="lookingaround"> Looking Around</label>
      </div>
      </div>
    </div>
  );
};
