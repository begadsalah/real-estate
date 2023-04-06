import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ScheduleTourForm from "./ScheduleTourForm";
import Grid from "@mui/material/Unstable_Grid2";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const FullScheduleTourForm = ({
  formWidth,
  formMarginRight,
  formMarginTop,
  formMarginTop2,
  ShowScheduleButton,
  ShowReqInfoButton,
  scheduleInitialState,
  reqInitialState,
  heightOfForm,
}) => {
  const [togglerMeetButton, setTogglerMeetButton] = useState(true);
  const [scheduleATour, setScheduleATour] = useState(scheduleInitialState);
  const [reqInfo, setReqInfo] = useState(reqInitialState);
  return (
    <Grid
      style={{
        padding: "1rem 0",
        marginTop: `${formMarginTop}rem`,
        maxWidth: `${formWidth}`,

        marginRight: `${formMarginRight}rem`,
      }}
    >
      <div
        className="centerd-element"
        style={{
          justifyContent: "flex-start",
          marginLeft: "1rem",
          marginTop: `${formMarginTop2}rem`,
        }}
      >
        {ShowScheduleButton ? (
          <button
            onClick={() => {
              setScheduleATour(true);
              setReqInfo(false);
            }}
            style={{
              color: "rgb(25, 118, 210)",
              fontWeight: "600",
              backgroundColor: "white",
              padding: "1rem",
              paddingLeft: "2rem",
              marginBottom: "-0.1rem",
            }}
            className={scheduleATour ? "scheduleButton" : "noneSelected"}
          >
            Schedule A Tour
          </button>
        ) : null}
        {ShowReqInfoButton ? (
          <button
            onClick={() => {
              setScheduleATour(false);
              setReqInfo(true);
            }}
            style={{
              color: "rgb(25, 118, 210)",
              fontWeight: "600",
              backgroundColor: "white",
              padding: "1rem",
              marginBottom: "-0.1rem",
            }}
            className={reqInfo ? "reqInfoButton" : "noneSelected"}
          >
            Request Info
          </button>
        ) : null}
      </div>
      {scheduleATour ? (
        <Grid
          style={{
            justifyContent: "flex-start",
            paddingTop: "1rem",
            alignItems: "start",
            borderBottom: "1px solid #eeeeee",
            borderRight: "1px solid #eeeeee",
            borderLeft: "1px solid #eeeeee",
            borderTop: "1px solid #eeeeee",
            marginLeft: "1rem",
            flexDirection: "column",
            padding: "1rem 2rem",
            height: `${heightOfForm}`,
            overflowY: "auto",
            overflowX: "hidden",
          }}
          className="centerd-element"
        >
          <h5
            style={{
              textAlign: "left",
              fontWeight: "600",
            }}
          >
            Schedule A Tour
          </h5>
          <div
            style={{
              maxWidth: `${formWidth}`,
            }}
          >
            <div
              className="togglerMeesButtons-div"
              style={{ margin: "0.5rem 0" }}
            >
              <button
                onClick={() => {
                  setTogglerMeetButton(false);
                }}
                style={{ padding: "0.5rem 1rem" }}
                className={togglerMeetButton ? "activeMeetButton" : "notActive"}
              >
                In-Person
              </button>
              <button
                onClick={() => {
                  setTogglerMeetButton(true);
                }}
                style={{ padding: "0.5rem 1rem" }}
                className={togglerMeetButton ? "notActive" : "activeMeetButton"}
              >
                Video Chat
              </button>
            </div>
            <ScheduleTourForm style={{ margin: "0.5rem 0" }} />
            <TextField
              style={{ margin: "0.5rem 0" }}
              required
              id="outlined-required"
              label="Full Name"
              defaultValue=""
              fullWidth
            />
            <TextField
              style={{ marginBottom: "0.5rem" }}
              required
              id="outlined-required"
              label="Phone Number"
              defaultValue=""
              fullWidth
            />
            <TextField
              style={{ marginBottom: "0.5rem" }}
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              fullWidth
            />
            <div>
              <button
                style={{
                  padding: "0.5rem 4rem",
                  color: "white",
                  backgroundColor: "rgb(25, 118, 210)",
                  fontWeight: "600",
                }}
              >
                Schedule a Tour
              </button>
            </div>
          </div>
        </Grid>
      ) : (
        <div
          style={{
            maxWidth: "500px",
            padding: "0 1rem",
            borderBottom: "1px solid #eeeeee",
            borderRight: "1px solid #eeeeee",
            borderLeft: "1px solid #eeeeee",
            borderTop: "1px solid #eeeeee",
          }}
        >
          <Grid
            container
            className="centerd-element"
            style={{
              justifyContent: "flex-start",
              padding: "2rem 0rem",
              alignItems: "start",
              marginLeft: "1rem",
              flexDirection: "column",
            }}
          >
            <h5 style={{ marginBottom: "1rem", fontWeight: "600" }}>
              Request Info About 5654 Sheila Ave
            </h5>
            <TextField
              style={{ marginBottom: "0.5rem" }}
              required
              id="outlined-required"
              label="Full Name"
              defaultValue=""
              fullWidth
            />

            <TextField
              style={{ marginBottom: "0.5rem" }}
              required
              id="outlined-required"
              label="Phone Number"
              defaultValue=""
              fullWidth
            />
            <TextField
              style={{ marginBottom: "0.5rem" }}
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              fullWidth
            />
            <TextField
              style={{ marginBottom: "0.5rem" }}
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={3}
              fullWidth
            />
            <FormControlLabel
              control={<Checkbox />}
              label="I want to talk about financing"
            />
            <div>
              <button
                style={{
                  padding: "0.5rem 4rem",
                  color: "white",
                  backgroundColor: "rgb(25, 118, 210)",
                  fontWeight: "600",
                  margin: "0.1rem 0",
                }}
              >
                Request More Info
              </button>
            </div>
          </Grid>
        </div>
      )}
    </Grid>
  );
};

export default FullScheduleTourForm;
