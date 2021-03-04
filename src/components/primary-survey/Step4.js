import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const Step4 = ({step4Values, state, onChange: handleStep4Change}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        width: "100%",
        backgroundColor: 'white',
        marginTop: '15px',
        borderRadius: '15px',
        padding: '10px',
        marginBottom: '20px'
      }
    }
  }));
  
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" color="primary">
        Describe yourself:
      </Typography>
    <div className={classes.root}>
      <TextField
        id="filled-multiline-static"
        key="userdescription"
        label=""
        multiline
        rows={2}
        defaultValue="Write a few lines about your experience, your hobbys..."
        variant="standard"
        value={state}
        onChange={handleStep4Change}
      />
    </div>
    </>
  );
};
