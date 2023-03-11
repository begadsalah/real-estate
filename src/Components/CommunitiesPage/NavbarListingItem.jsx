import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Button } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const NavbarListingItem = () => {
  const [tourDropdown, setTourDropdown] = useState(false);
  const ref = useRef();
  const [isActive, setIsActive] = useState(false);
  const handleColorchange = () => {
    setIsActive((current) => !current);
  };
  const [alignment, setAlignment] = React.useState("web");
  const handleChangeAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [age, setAge] = React.useState("");
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  ref.current = tourDropdown;
  useEffect(() => {
    const removeDropdown = () => {
      const show = window.scrollY >= 200;
      if (ref.current !== show) {
        setTourDropdown(false);
      }
    };
    window.addEventListener("scroll", removeDropdown);
    return () => window.removeEventListener("scroll", removeDropdown);
  }, []);

  return (
    <Grid
      container
      style={{
        marginTop: "6.95rem",
        justifyContent: "space-evenly",
        padding: "0.5rem 0",
        borderBottom: "2px solid rgba(21, 101, 192,0.5)",
      }}
      className="centerd-element"
      onScroll={() => setTourDropdown(false)}
    >
      <Grid>
        <h4 style={{ fontWeight: "600" }}>5654 Sheila Ave</h4>
        <h6>Las Vegas, NV 89108</h6>
      </Grid>
      <Grid>
        <h4 style={{ fontWeight: "600" }}>$745,000</h4>
      </Grid>
      <Grid className="centerd-element">
        <div
          className="shareIcon centerd-element"
          style={{ border: "1px solid lightgray" }}
        >
          <IosShareIcon
            style={{
              marginRight: "0.3rem",
              paddingBottom: "0.1rem",

              cursor: "pointer",
              color: "gray",
            }}
          />
          Share
        </div>
        <div
          className="saveIcon centerd-element"
          style={{ border: "1px solid lightgray" }}
        >
          <FavoriteIcon
            style={{
              marginRight: "0.3rem",
              paddingBottom: "0.1rem",
              cursor: "pointer",
              color: isActive ? "red" : "gray",
            }}
            onClick={handleColorchange}
          />
          Save
        </div>
        <div>
          <Button
            variant="contained"
            style={{
              margin: "0.3rem",
              fontSize: "1rem",
              width: "100%",
            }}
            onClick={() => {
              if (tourDropdown) {
                setTourDropdown(false);
              } else {
                setTourDropdown(true);
              }
            }}
          >
            Schedule a Tour
          </Button>
          {tourDropdown ? (
            <Grid
              xs={4}
              className="centerd-element"
              style={{
                flexDirection: "column",
                padding: "1rem",
                overflow: "auto",
                height: "70vh",
                position: "absolute",
                backgroundColor: "white",
                left: "60%",
                border: "2px solid lightgray",
              }}
            >
              <h5>Schedule A Tour</h5>
              <div className="centerd-element">
                <span style={{ marginRight: "1rem" }}>Your Tour: </span>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChangeAlignment}
                  aria-label="Platform"
                >
                  <ToggleButton value="web">In-Person</ToggleButton>
                  <ToggleButton value="android">Video Chat</ToggleButton>
                </ToggleButtonGroup>
              </div>
              <FormControl
                required
                sx={{ m: 2, minWidth: 250 }}
                style={{
                  overflow: "auto",
                  padding: "0.5rem",
                }}
              >
                <InputLabel
                  id="demo-simple-select-required-label"
                  style={{
                    padding: "0.5rem",
                  }}
                >
                  Time
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={age}
                  label="Time *"
                  onChange={handleChangeAge}
                >
                  <MenuItem value={8}>8:00 AM</MenuItem>
                  <MenuItem value={10}>10:00 AM</MenuItem>
                  <MenuItem value={20}>3:00 PM</MenuItem>
                  <MenuItem value={30}>8:00 PM</MenuItem>
                </Select>
                <br />
                <TextField
                  required
                  id="outlined-required"
                  label="Full Name"
                  defaultValue=""
                />
                <br />
                <TextField
                  required
                  id="outlined-required"
                  label="Phone Number"
                  defaultValue=""
                />
                <br />
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  defaultValue=""
                />
                <br />
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                />
                <br />
                <button
                  style={{
                    padding: "0.5rem 5rem",
                    color: "white",
                    backgroundColor: "rgb(25, 118, 210)",
                    fontWeight: "600",
                  }}
                >
                  Schedule a Tour
                </button>
                <p style={{ fontSize: "11px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis voluptas corrupti quod nihil culpa suscipit nemo
                  quos eligendi labore dolor?
                </p>
              </FormControl>
            </Grid>
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default NavbarListingItem;
