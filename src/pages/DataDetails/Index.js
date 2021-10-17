import * as React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import ProfileData from "../ProfileAccount/ProfileData";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ProfileData />
  </StyledEngineProvider>,
  document.querySelector("#root")
);
