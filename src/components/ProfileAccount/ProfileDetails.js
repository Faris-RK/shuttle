import { Box, TextField, Paper, Rating } from "@mui/material";
import styles from "../ProfileAccount/Details.module.css";
import notifIcon from "../../assets/notifIcon.png";
import panah from "./Vectorpanah.png";
import Grid from "@mui/material/Grid";
import React from "react";
import ModalRating from "../ModalComponent/ModalRating/ModalRating";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userData } from "../../redux/services/auth.service";
import { store } from "../../redux/services/auth.service";
import moment from "moment";
import { updateProfile } from "../../redux/actions/auth"

const ProfileData = () => {
  // State ===================================================================================
  // const [dataProfile, setDataProfile] = useState("");
  const [emailData, setEmailData] = useState("");
  const [changeFullName, setChangeFullName] = useState("");
  const [changePhoneNumber, setChangePhoneNumber] = useState("");
  const [changeBirthday, setChangeBirthday] = useState("");
  const dispatch = useDispatch();

  const [picture, setPicture] = useState("");
  const [valueFile, setValuefile] = useState("");

  // Token ===================================================================================

  const Token = store.getItem("user");
  // console.log(Token, "token");

  // Function ===================================================================================
  const onChangeFullName = (e) => {
    // console.log(value);
    setChangeFullName(e.target.value);
  };
  const onChangePhoneNumber = (e) => {
    console.log(e.target.value, "phone");
    setChangePhoneNumber(e.target.value);
  };
  const onChangeBirthday = (e) => {
    // console.log(value);
    setChangeBirthday(e.target.value);
  };
  const handleClick = (e, Token) => {
    e.preventDefault();
    // setChangeFullName(changeFullName);
    // setChangePhoneNumber(changePhoneNumber);
    dispatch(updateProfile(changeFullName, changePhoneNumber));
  };
  console.log(handleClick, "data handleClcik");

  // const handleSubmitAvatar = (e) => {
  //   e.preventDefault();
  // };
  const base64 = (file) =>
    new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  // function base64(event) {
  //   let reader = new FileReader();
  //   reader.onload = function () {
  //     let output = document.getElementById("avatar");
  //     output.src = reader.result;
  //   };
  //   if (event.target.files[0]) {
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

  // const base64 = (file) => {
  //   let file = e.target.files[0];
  //   let reader = new FileReader();
  //   reader.onloadend = function () {
  //     setValuefile();
  //     setPicture(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  //   console.log(file, "file Avatar");
  // };
  const handleChangePicture = async (e) => {
    const pictureProfile = await base64(e.target.files[0]);
    setPicture(pictureProfile);
  };
  console.log(picture, "ini foto");
  // useEffect ================================================================================//

  useEffect(() => {
    userData(Token).then((response) => {
      // setDataProfile(response?.data?.data);
      setEmailData(response.data.data.email);
      setChangeFullName(response?.data?.data?.fullname);
      setChangePhoneNumber(response?.data?.data?.phone);

      let birthDate = moment(response?.data?.data?.birthday).format(
        "YYYY-MM-DD"
      );
      setChangeBirthday(birthDate);
      console.log(response.data.data, "ini data user Profile");
    });
  }, []);
  console.log(picture, "ini foto kau");

  return (
    <div className={styles.boxProf}>
      <div className={styles.textp}>
        <p>Profile Details</p>
      </div>
      <div className={styles.imagecontainer}>
        <div>
          {picture === "" ? (
            <h1 className={styles.userDefaultAvatar}>
              {changeFullName.slice(0, 2)}
            </h1>
          ) : (
            <img className={styles.imgprofile} src={picture} alt="" />
          )}
        </div>

        <div className={styles.buttonchange}>
          <input
            type="file"
            id="avatar"
            name="avatar"
            style={{ display: "none" }}
            onChange={handleChangePicture}
          />
          {picture === "" ? (
            <div>
              <label className={styles.buttonphoto} for="avatar">
                Upload Photo
              </label>
            </div>
          ) : (
            <>
              <label className={styles.buttonChangePhoto} for="avatar">
                Change Photo
              </label>
              <h1 className={styles.textremove} onClick={() => setPicture("")}>
                Remove
              </h1>{" "}
            </>
          )}
        </div>
      </div>

      <div className={styles.boxform}>
        <Grid container spacing={5} sx={{ paddingBottom: 5 }}>
          <Grid item xs={12}>
            <TextField
              required
              id="standard-basic"
              onChange={onChangeFullName}
              placeholder="Full Name"
              label="Full Name"
              variant="standard"
              value={changeFullName}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="standard-basic"
              placeholder="Email"
              label="Email"
              variant="standard"
              value={emailData}
              style={{ width: "90%" }}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={onChangePhoneNumber}
              id="standard-basic"
              type="number"
              variant="standard"
              label="Phone Number"
              value={changePhoneNumber}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={onChangeBirthday}
              id="standard-basic"
              type="date"
              variant="standard"
              label="Birthday Date"
              value={changeBirthday}
              style={{ width: "90%" }}
            />
          </Grid>
        </Grid>

        <button
          onClick={(e) => handleClick(e, Token)}
          className={styles.buttonsave}
        >
          Save
        </button>
        {/* <button className={styles.btnSaveRequired}>Save</button> */}
      </div>
    </div>
  );
};

//  Notification ================================================================================================//

const Notifications = () => {
  return (
    <div className={styles.boxNotif}>
      <div className={styles.textInfo}>
        <p>Notifications</p>
      </div>
      <div>
        <div className={styles.newbook}>
          <div className={styles.imagecircle}>
            <img className={styles.imgcircle} src={notifIcon}></img>
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
            <img className={styles.imgcircle} src={notifIcon}></img>
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
            <img className={styles.imgcircle} src={notifIcon}></img>
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
            <img className={styles.imgcircle} src={notifIcon}></img>
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
            <img className={styles.imgcircle} src={notifIcon}></img>
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
            <img className={styles.imgcircle} src={notifIcon}></img>
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
        <Grid container spacing={5} sx={{ paddingBottom: 5 }}>
          <Grid item xs={12}>
            <TextField
              className={styles.Fieldbox}
              required
              id="outlined-password-input"
              variant="standard"
              label="Old Password"
              type="password"
              style={{ width: "100%" }}
              defaultValue="123456789"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="standard"
              id="outlined-password-input"
              label="New Password"
              type="password"
              style={{ width: "100%" }}
              defaultValue="123456789"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="standard"
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              style={{ width: "100%" }}
              defaultValue="123456789"
            />
          </Grid>
          <button className={styles.safebutt}>Save</button>
        </Grid>
      </div>
    </div>
  );
};

const ProfileDetails = ({ ...props }) => {
  const { tab } = props;
  return (
    <div>
      <>
        {tab === 1 ? (
          <ProfileData />
        ) : tab === 2 ? (
          <Notifications />
        ) : tab === 3 ? (
          <GiveRatingAndReview />
        ) : tab === 4 ? (
          <ChangePassword />
        ) : null}
      </>
    </div>
  );
};

export default ProfileDetails;
