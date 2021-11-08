import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    width: "301px",
    height: "48px",
    padding: "0px",
    // border: "0.7px solid #D0D0D0",
    boxSizing: "border-box",
    // borderRadius: "8px",
  },
  "& .MuiTextField-root": {
    margin: "0px",
  },
});

export default function content1(props) {
  return (
    <div className="passenger-detail-form">
      <div className="header">
        <div className="title-detail-form">Passenger Detail</div>
      </div>
      <div className="passenger-1">Passenger 1</div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="form-container">
          <div className="form-1">
            <div className="fullname">
              <CssTextField
                required
                id="outlined-required"
                label="Fullname"
                type="name"
                placeholder="Input full name"
                className="text-field"
                onChange={props.onChangeFullname}
              />
            </div>
            <div className="email">
              <CssTextField
                required
                id="outlined-required"
                label="Email"
                type="email"
                placeholder="Input email"
                onChange={props.onChangeEmail}
              />
            </div>
          </div>
          <div className="form-2">
            <div className="age">
              <CssTextField
                required
                id="outlined-required"
                label="Age"
                type="age"
                placeholder="Input age"
                onChange={props.onChangeAge}
              />
            </div>
            <div className="form-2">
              <div className="phone-number">
                <CssTextField
                  required
                  id="outlined-required"
                  label="Phone Number"
                  type="number"
                  placeholder="Input phone number"
                  onChange={props.onChangePhoneNumber}
                />
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
