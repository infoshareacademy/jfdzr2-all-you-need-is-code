import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const Step3Projects = ({step3ProjectsValues, state, onChange: handleStep3ProjectsChange}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        width: "100%",
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
    <>
      <Typography variant="h5" color="primary" style={{ marginTop: "20px" }}>
        Write a few lines about projects you were involved in:
      </Typography>
    <div className={classes.root}>
      <TextField
        id="filled-multiline-static"
        key="projectsdescription"
        label=""
        multiline
        rows={2}
        variant="standard"
        value={state}
        onChange={handleStep3ProjectsChange}
      />
    </div>
    </>
  );
};