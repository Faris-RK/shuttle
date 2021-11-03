import { Box, TextField, Paper, Rating } from "@mui/material";
import styles from "../ProfileAccount/Details.module.css";
import infocircle from "./infocircle.png";
import profilepoto from "./Profilepoto.png";
import panah from "./Vectorpanah.png";
import React from "react";
import ModalRating from "../ModalComponent/ModalRating/ModalRating";
import { style } from "@mui/system";

const ProfileData = () => {
  return (
    <div className={styles.boxProf}>
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
    <div className={styles.boxNotif}>
      <div className={styles.textInfo}>
        <p>Notifications</p>
      </div>
      <div>
        <div className={styles.newbook}>
          <div className={styles.imagecircle}>
            <img className={styles.imgcircle} src={infocircle}></img>
            <div>
              <h1 className={styles.bokSucc}>Booking Success!</h1>
              <p className={styles.textpay}>
                New booking success and now waiting your payment
              </p>
            </div>
          </div>
          <p className={styles.textTime}>3 hours ago</p>
        </div>
        <div className={styles.newbook}>
          <div className={styles.imagecircle}>
            <img className={styles.imgcircle} src={infocircle}></img>
            <div>
              <h1 className={styles.bokSucc}>Payment Success!</h1>
              <p className={styles.textpay}>
                Your payment success and now you’re ready to experience journey
                with us!
              </p>
            </div>
          </div>
          <p className={styles.textTime}>Fri, 20 Aug 2021</p>
        </div>
        <div className={styles.newbook}>
          <div className={styles.imagecircle}>
            <img className={styles.imgcircle} src={infocircle}></img>
            <div>
              <h1 className={styles.bokSucc}>Booking Success!</h1>
              <p className={styles.textpay}>
                New booking success and now waiting for your payment
              </p>
            </div>
          </div>
          <p className={styles.textTime}>3 hours ago</p>
        </div>
        <div className={styles.newbook}>
          <div className={styles.imagecircle}>
            <img className={styles.imgcircle} src={infocircle}></img>
            <div>
              <h1 className={styles.bokSucc}>Payment Success!</h1>
              <p className={styles.textpay}>
                Your payment success and now you’re ready to experience journey
                with us!
              </p>
            </div>
          </div>
          <p className={styles.textTime}>Fri, 20 Aug 2021</p>
        </div>
        <div className={styles.newbook}>
          <div className={styles.imagecircle}>
            <img className={styles.imgcircle} src={infocircle}></img>
            <div>
              <h1 className={styles.bokSucc}>Booking Success!</h1>
              <p className={styles.textpay}>
                New booking success and now waiting for your payment
              </p>
            </div>
          </div>
          <p className={styles.textTime}>3 hours ago</p>
        </div>
        <div className={styles.newbook}>
          <div className={styles.imagecircle}>
            <img className={styles.imgcircle} src={infocircle}></img>
            <div className={styles.paySucc}>
              <h1 className={styles.bokSucc}>Payment Success!</h1>
              <p className={styles.textpay}>
                Your payment success and now you’re ready to experience journey
                with us!
              </p>
            </div>
          </div>
          <p className={styles.textTime}>Fri, 20 Aug 2021</p>
        </div>
      </div>
    </div>
  );
};
const GiveRatingAndReview = () => {
  const [value, setValue] = React.useState(0);
  console.log(value);

  const [rating, setrating] = React.useState(0);
  console.log(value);

  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles.boxRating}>
      <div className={styles.textInfo}>
        <p>Give Rating And Review</p>
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 693,
            height: 60,
          },
        }}
      >
        <div className={styles.wrapBox}>
          <div>
            <div className={styles.textOrder}>
              <p>Order ID</p>
              <p>BDTR2108187</p>
            </div>
          </div>
          <div className={styles.infoBus}>
            <p>Bus Name</p>
            <p>PT Sinar Jaya Group</p>
          </div>
          <div className={styles.infoDesti}>
            <p>Shuttle Destination</p>
            <p>
              Jakarta <img src={panah}></img> Surabaya
            </p>
          </div>

          <Paper elevation={0} />

          <Paper />
        </div>
        <div className={styles.starRating}>
          <p className={styles.textRating}>No ratings yet</p>
          <button onClick={() => setOpen(true)} className={styles.buttonRating}>
            Give Rating
          </button>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 693,
            height: 60,
          },
        }}
      >
        <div className={styles.wrapBox}>
          <div>
            <div className={styles.textOrder}>
              <p>Order ID</p>
              <p>BDTR2108187</p>
            </div>
          </div>
          <div className={styles.infoBus}>
            <p>Bus Name</p>
            <p>KYM Trans</p>
          </div>
          <div className={styles.infoDesti}>
            <p>Shuttle Destination</p>
            <p>
              Jakarta <img src={panah}></img> Surabaya
            </p>
          </div>

          <Paper elevation={0} />

          <Paper />
        </div>
        <div className={styles.starRating}>
          <p className={styles.textRating}>Rating</p>

          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 693,
            height: 60,
          },
        }}
      >
        <div className={styles.wrapBox}>
          <div>
            <div className={styles.textOrder}>
              <p>Order ID</p>
              <p>BDTR2108187</p>
            </div>
          </div>
          <div className={styles.infoBus}>
            <p>Bus Name</p>
            <p>KYM Trans</p>
          </div>
          <div className={styles.infoDesti}>
            <p>Shuttle Destination</p>
            <p>
              Jakarta <img src={panah}></img> Surabaya
            </p>
          </div>

          <Paper elevation={0} />

          <Paper />
        </div>
        <div className={styles.starRating}>
          <p className={styles.textRating}>Rating</p>

          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setrating(newValue);
            }}
          />
        </div>
      </Box>
      <ModalRating open={open} setOpen={setOpen} />
    </div>
  );
};
const ChangePassword = () => {
  return (
    <div className={styles.changeBox}>
      <div className={styles.textInfo}>
        <p>Change Password</p>
      </div>
      <div className={styles.FieldPass}>
        <TextField
          className={styles.Fieldbox}
          required
          id="outlined-password-input"
          label="Old Password"
          type="password"
          style={{ width: "100%" }}
          defaultValue="*******"
        />
        <TextField
          required
          id="outlined-password-input"
          label="New Password"
          type="password"
          style={{ width: "100%" }}
          defaultValue="********"
        />
        <TextField
          required
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          style={{ width: "100%" }}
          defaultValue="********"
        />
        <button className={styles.safebutt}>Safe</button>
      </div>
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