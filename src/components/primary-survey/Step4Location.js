import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const Step4Location = ({
  step4LocationValues,
  state,
  onChange: handleStep4LocationChange,
}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        width: "100%",
        backgroundColor: "white",
        marginTop: "15px",
        borderRadius: "15px",
        padding: "10px",
        marginBottom: "20px",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className='media-item'>
      <Typography variant="h5" color="primary" style={{ marginTop: "10px" }}>
        Your location:
      </Typography>
      <div className={classes.root}>
        <TextField
          id="filled-basic"
          key="location"
          variant="standard"
          value={state}
          onChange={handleStep4LocationChange}
        />
      </div>
    </div>
  );
};
