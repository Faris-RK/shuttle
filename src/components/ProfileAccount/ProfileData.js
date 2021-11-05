import React from "react";
import styles from "../ProfileAccount/Profile.module.css";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import "../ProfileAccount/ProfileData.css";
import logoUser from "../../assets/logoUser.svg";
import singoutIcon from "../../assets/singoutIcon.svg";
import starIcon from "../../assets/starIcon.svg";
import bell from "../../assets/bell.svg";
import keyIcon from "../../assets/keyIcon.svg";

export default function ProfileData({ ...props }) {
  const { selectedIndex, setSelectedIndex } = props;

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <Box className={styles.container}>
        <ListItemButton
          className={styles.listbutton}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <img src={logoUser} className={styles.imgIcon} />
          <ListItemText className={styles.listtext} primary="Profile" />
        </ListItemButton>
        <ListItemButton
          className={styles.listbutton}
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <img src={bell} className={styles.imgIcon} />
          <ListItemText primary="Notifications" className={styles.listtext} />
        </ListItemButton>
        <ListItemButton
          className={styles.listbutton}
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <img src={starIcon} className={styles.imgIcon} />
          <ListItemText
            primary="Give Rating and Review"
            className={styles.listtext}
          />
        </ListItemButton>
        <ListItemButton
          className={styles.listbutton}
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <img src={keyIcon} className={styles.imgIcon} />
          <ListItemText primary="Change Password" className={styles.listtext} />
        </ListItemButton>
        <ListItemButton
          className={styles.listbutton}
          // selected={selectedIndex === 4}
          // onClick={(event) => handleListItemClick(event, 4)}
        >
          <img src={singoutIcon} className={styles.imgIcon} />
          <ListItemText primary="SignOut" className={styles.listtext} />
        </ListItemButton>
      </Box>
    </div>
  );
}
