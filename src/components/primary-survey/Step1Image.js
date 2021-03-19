import FileUploader from "react-firebase-file-uploader";
import CustomUploadButton from "react-firebase-file-uploader/lib/CustomUploadButton";
import { useState } from "react";
import firebase from "../../fire";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const Step1Image = () => {
    const user = firebase.auth().currentUser.uid;
    const [avatarUrl, setAvatarUrl] = useState('');

    const handleUploadSuccess = (filename) => {
          firebase
          .storage()
          .ref()
          .child(`images/${filename}`)
          .getDownloadURL().then((url) => {
            alert('Uploading avatar finished');
            setAvatarUrl(url);
            console.log(url);
            console.log(avatarUrl)
          })
      };

      const handleUploadStart = () => alert('Uploading avatar in progress, please wait')

  return (
    <div className="image-input-setting">
      <CustomUploadButton
        filename={user}
        accept="image/*"
        storageRef={firebase.storage().ref("images")}
        onUploadStart={handleUploadStart}
        // onUploadError={this.handleUploadError}
        onUploadSuccess={handleUploadSuccess}
        // onProgress={this.handleProgress}
        style={{
          marginBottom: "20px",
          width: "100%",
          height: "45%",
          borderRadius: "30px",
          border: "none",
          backgroundColor: "#ff7961",
          fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto",
          fontSize: "20px",
          fontWeight: "500",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        Select your avatar
      </CustomUploadButton>
    </div>
  );
};
