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
import ScheduleTourForm from "./ScheduleTourForm";
import FullScheduleTourForm from "./FullScheduleTourForm";

const NavbarListingItem = () => {
  const [tourDropdown, setTourDropdown] = useState(false);
  const [reqInfoDropdown, setReqInfoDropdown] = useState(false);
  const [togglerMeetButton2, setTogglerMeetButton2] = useState(true);

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
        padding: "1rem 0.3rem",
      }}
      className="centerd-element AppearingNavbar-container"
      onScroll={() => setTourDropdown(false)}
    >
      <Grid xs={4}>
        <h4 style={{ fontWeight: "600", marginTop: "0.5rem" }}>
          5654 Sheila Ave Las Vegas, NV 89108
        </h4>
      </Grid>
      <Grid
        xs={1}
        style={{ justifyContent: "flex-start" }}
        className="centerd-element"
      >
        <h4
          style={{
            fontWeight: "600",
            textAlign: "right",
            marginLeft: "3.1rem",
            marginTop: "0.5rem",
          }}
        >
          $745,000
        </h4>
      </Grid>
      <Grid className="centerd-element" xs={5}>
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
              width: "100%",
            }}
            onClick={() => {
              if (tourDropdown || reqInfoDropdown) {
                setTourDropdown(false);
                setReqInfoDropdown(false);
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
                justifyContent: "flex-start",
                alignItems: "start",
                flexDirection: "column",
                overflow: "auto",
                height: "70vh",
                position: "absolute",
                backgroundColor: "white",
                left: "60%",
                border: "2px solid lightgray",
                zIndex: "32000",
              }}
            >
              <FullScheduleTourForm
                formWidth={"-webkit-fill-available"}
                formMarginRight={0}
                formMarginTop={0}
                formMarginTop2={0}
                ShowScheduleButton={false}
                ShowReqInfoButton={false}
                scheduleInitialState={true}
                reqInitialState={false}
              />
            </Grid>
          ) : null}
        </div>
        <div>
          <Button
            variant="outlined"
            style={{
              margin: "0.1rem",
              width: "100%",
              backgroundColor: "white",
            }}
            onClick={() => {
              if (tourDropdown || reqInfoDropdown) {
                setReqInfoDropdown(false);
                setTourDropdown(false);
              } else {
                setReqInfoDropdown(true);
              }
            }}
          >
            Request Info
          </Button>
          {reqInfoDropdown ? (
            <Grid
              xs={4}
              className="centerd-element"
              style={{
                justifyContent: "flex-start",
                alignItems: "start",
                flexDirection: "column",
                overflow: "auto",
                height: "70vh",
                position: "absolute",
                backgroundColor: "white",
                left: "60%",
                border: "2px solid lightgray",
                zIndex: "32000",
              }}
            >
              <FullScheduleTourForm
                formWidth={"-webkit-fill-available"}
                formMarginRight={0}
                formMarginTop={0}
                formMarginTop2={0}
                ShowScheduleButton={false}
                scheduleInitialState={false}
                reqInitialState={true}
                heightOfForm={"fit-content"}
              />
            </Grid>
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default NavbarListingItem;
