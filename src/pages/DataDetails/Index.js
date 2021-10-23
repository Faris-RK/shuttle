import * as React from "react";
import ProfileDetails from "../../components/ProfileAccount/ProfileDetails";
import ProfileData from "../../components/ProfileAccount/ProfileData";

function ProfilePages() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  return (
    <div
      style={{
        display: "flex",

        width: "75%",
        margin: "25px auto",
      }}
    >
      <ProfileData
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <ProfileDetails tab={selectedIndex} />
    </div>
  );
}

export default ProfilePages;
