import { DropzoneArea } from "material-ui-dropzone";

import { Typography, Button } from "@material-ui/core";

export const Step1Image = () => {
  return (
    <div className="image-input-setting">
      {/* <Typography variant="h5" color="primary">
        Upload your profile picture
      </Typography> */}
        {/* <Button className="toggle-button">Upload</Button> */}
        <button className="image-button">Upload your profile picture</button>
      
    </div>
  );
};