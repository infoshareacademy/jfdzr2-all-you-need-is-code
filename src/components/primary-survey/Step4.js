import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const Step4 = ({step4Values, state, onChange: handleStep4Change}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        width: "100%",
        backgroundColor: 'white',
        marginTop: '15px'
      }
    }
  }));
  
  const classes = useStyles();

  // const [textfield, setText] = useState('');
  // const handleChange = (event) => { setText(event.target.value) }

  return (
    <div className='about-you-section'>
      <Typography variant="h5" color="primary">
        Describe yourself:
      </Typography>
    <div className={classes.root}>
      <TextField
        id="filled-multiline-static"
        label=""
        multiline
        rows={2}
        defaultValue="Write a few lines about your experience, your hobbys..."
        variant="filled"
        name="userdescription"
        value={state.step4Values}
        onChange={handleStep4Change}
      />
    </div>
        <Typography variant="h5" color="primary" style={{marginTop: '10px'}}>
        Your location:
      </Typography>
      <div className={classes.root}>
    <TextField id="filled-basic" label="City, country of residence" variant="filled" />
    </div>
    </div>
  );
};
