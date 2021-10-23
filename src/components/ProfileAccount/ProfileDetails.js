import { Box, TextField } from "@mui/material";
import styles from "../ProfileAccount/Details.module.css";
import profilepoto from "./Profilepoto.png";
import React from "react";

const ProfileData = () => {
  return (
    <div>
      <div className={styles.textp}>
        <p>Profile Details</p>
      </div>

      <div className={styles.imagecontainer}>
        <div>
          <img className={styles.imgprofile} src={profilepoto} alt=""></img>
        </div>

        <div className={styles.buttonchange}>
          <button className={styles.buttonphoto}>Change Photo</button>
          <h6 className={styles.textremove}>Remove</h6>
        </div>
      </div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={styles.boxform}>
          <TextField
            required
            id="outlined-required"
            label="Full Name"
            style={{ width: "100%" }}
            defaultValue="Full Name"
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue="Email"
            style={{ width: "100%" }}
          />
          <TextField
            required
            id="outlined-required"
            type="number"
            label="Phone Number"
            defaultValue="Phone Number"
            style={{ width: "100%" }}
          />
          <TextField
            required
            id="outlined-required"
            type="date"
            label="Birthday Date"
            defaultValue="Birthday Date"
            style={{ width: "100%" }}
          />
        </div>
      </Box>
      <button className={styles.buttonsave}>Save</button>
    </div>
  );
};

const Notifications = () => {
  return (
    <div>
      <p>Notifications</p>
    </div>
  );
};
const GiveRatingAndReview = () => {
  return (
    <div>
      <p>Give Rating And Review</p>
    </div>
  );
};
const ChangePassword = () => {
  return (
    <div>
      <p>Change Password</p>
    </div>
  );
};

const ProfileDetails = ({ ...props }) => {
  const { tab } = props;
  return (
    <div>
      {tab === 1 ? (
        <ProfileData />
      ) : tab === 2 ? (
        <Notifications />
      ) : tab === 3 ? (
        <GiveRatingAndReview />
      ) : tab === 4 ? (
        <ChangePassword />
      ) : null}
    </div>
  );
};

export default ProfileDetails;
