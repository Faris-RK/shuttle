import * as React from "react";
import styles from "../BusVendorPage/MyBusProvider.module.css";
import Button from "@restart/ui/esm/Button";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import fileIcon from "../../assets/fileIcon.svg";
import Grid from "@mui/material/Grid";
import { Input } from "@mui/material";

function MyBusProvider() {
  return (
    <div className="container">
      <div className={styles.informationContainer}>
        <div className={styles.informationWrapper}></div>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <div className={styles.titleWrap}>
              <h1 className={styles.titleInformation}>
                Bus Provider Information
              </h1>
            </div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              // id="outlined-required"
              label="Provider Name"
              variant="outlined"
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required"
              label="City"
              defaultValue=""
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required"
              label="Phone"
              defaultValue=""
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required"
              label="Website"
              defaultValue=""
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required"
              label="Facebook"
              defaultValue=""
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required"
              label="Twitter"
              defaultValue=""
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required"
              label="Instagram"
              defaultValue=""
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
            />
            <label htmlFor="contained-button-file">
              <Grid
                sx={{
                  border: "0.7px solid #D0D0D0",
                  width: 435,
                  borderRadius: 1,
                  padding: 2,
                  display: "flex",
                  verticalAlign: "middle",
                }}
              >
                <Fab
                  component="span"
                  sx={{
                    bgcolor: "transparent",
                    border: "0.7px solid #D0D0D0",
                    borderRadius: 1,

                    boxShadow: "none",
                  }}
                >
                  <img src={fileIcon} />
                </Fab>
                <p
                  style={{
                    margin: "9px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  Max size 3Mb <br /> File Format: Jpeg & Png
                </p>
              </Grid>
            </label>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <div className={styles.informationWrapper}>
              <div className={styles.titleWrap}>
                <h1 className={styles.titleInformation}>Legal Document</h1>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              // id="outlined-required"
              label="Banking Name"
              variant="outlined"
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              // id="outlined-required"
              label="Tax ID"
              variant="outlined"
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              // id="outlined-required"
              label="Banking Account Number "
              variant="outlined"
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              // id="outlined-required"
              label="Owner Identity Card Number"
              variant="outlined"
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
            />
            <label htmlFor="contained-button-file">
              <Grid
                sx={{
                  border: "0.7px solid #D0D0D0",
                  width: 435,
                  borderRadius: 1,
                  padding: 2,
                  display: "flex",
                  verticalAlign: "middle",
                }}
              >
                <Fab
                  component="span"
                  sx={{
                    bgcolor: "transparent",
                    border: "0.7px solid #D0D0D0",
                    borderRadius: 1,

                    boxShadow: "none",
                  }}
                >
                  <img src={fileIcon} />
                </Fab>
                <p
                  style={{
                    margin: "9px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  Max size 3Mb <br /> File Format: Jpeg & Png
                </p>
              </Grid>
            </label>
          </Grid>
        </Grid>
      </div>
      <button className={styles.btnSave}>Save</button>
    </div>
  );
}

export default MyBusProvider;
