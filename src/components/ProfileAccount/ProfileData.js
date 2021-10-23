import React from "react";
import styles from "../ProfileAccount/Profile.module.css";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import "../ProfileAccount/ProfileData.css";
import iconfoto from "./iconfoto.png";
import bell from "./bell.png";
import staricon from "./staricon.png";
import Vector from "./Vector.png";
import akariconssignout from "./akariconssignout.png";

export default function ProfileData({ ...props }) {
  const { selectedIndex, setSelectedIndex } = props;

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box className={styles.container}>
      <List>
        <ListItemButton
          className={styles.listbutton}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <img src={iconfoto} className={styles.img} />
          <ListItemText className={styles.listtext} primary="Profile" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <img src={bell} className={styles.img} />
          <ListItemText primary="Notifications" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <img src={staricon} className={styles.img} />
          <ListItemText primary="Give Rating and Review" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <img src={Vector} className={styles.img} />
          <ListItemText primary="Change Password" />
        </ListItemButton>
        <ListItemButton
        // selected={selectedIndex === 4}
        // onClick={(event) => handleListItemClick(event, 4)}
        >
          <img src={akariconssignout} className={styles.img} />
          <ListItemText primary="SignOut" />
        </ListItemButton>
      </List>
    </Box>
  );
}
