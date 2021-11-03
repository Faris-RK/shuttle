import styles from "../ModalRating/ModalRating.module.css";
import React from "react";
import closeoutline from "./closeoutline.png";
import { Modal, TextField, Rating, Box, Button } from "@mui/material";

const ModalRating = ({ ...props }) => {
  const { open, setOpen } = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rating, setrating] = React.useState(0);

  return (
    <Modal open={open} onClose={handleClose} className={styles.modalBox}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            backgroundColor: "white",
            width: 416,
            height: 367,
          },
        }}
      >
        <div className={styles.textmodalP}>
          <div className={styles.contRating}>
            <p className={styles.textP}>Give Rating and Review</p>
            <img src={closeoutline} className={styles.closeoutline}></img>
          </div>
          <div className={styles.textrating}>
            <p className={styles.textexp}>How’s the experience?</p>
            <Rating
              className={styles.textStar}
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setrating(newValue);
              }}
            />
          </div>

          <TextField
            className={styles.fieldbox}
            required
            id="outlined-required"
            label="Tell me about your experience here"
            style={{ marginLeft: 24 }}
          />
          <button className={styles.buttonSubmit}>Submit</button>
        </div>
      </Box>
    </Modal>
  );
};
export default ModalRating;
