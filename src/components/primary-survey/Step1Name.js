import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../styles/ToggleButtons.css";

export const Step1Name = ({ state, onChange: handleStep1NameChange }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        width: "50%",
        backgroundColor: "white",
        marginTop: "20px",
        borderRadius: "15px",
        padding: "10px",
        marginBottom: "20px",
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" color="primary" style={{ marginTop: "20px" }}>
        What is your name?
      </Typography>
      <div className={classes.root}>
        <TextField
          id="name"
          key="name"
          label=""
          variant="standard"
          value={state}
          onChange={handleStep1NameChange}
        />
      </div>
    </>
  );
};
