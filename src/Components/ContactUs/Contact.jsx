import React from "react";
import "./Contact.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid xs={12}>
        <div className="full-bg-image-contact">
          <div className="Contact-content">
            <h1 className="homeSection-h1">
              Contact <span className="homeSection-h1-span"> Us</span>
            </h1>
          </div>
        </div>
      </Grid>
      <Grid
        container
        spacing={12}
        className="centerd-div"
        style={{ margin: "2rem 0" }}
      >
        <Grid xs={4}>
          <h5 style={{ fontWeight: "600" }}>
            LOS ANGELES <span style={{ color: "#52A9FF" }}>\\</span>{" "}
            HEADQUARTERS
          </h5>
          <h6 style={{ maxWidth: "230px" }}>
            1234 Los Angeles Rd. Suite 100 Los Angeles, USA 123123
          </h6>
          <span style={{ color: "gray" }}>Tel: 123.123.1233</span>
          <br />
          <span style={{ color: "gray" }}>Fax: 123.123.1233</span>
        </Grid>
        <Grid xs={3}>
          <h5 style={{ fontWeight: "600" }}>
            VENTURA<span style={{ color: "#52A9FF" }}> \\</span>
          </h5>
          <h6 style={{ maxWidth: "230px" }}>
            1234 Los Angeles Rd. Suite 100 Los Angeles, USA 123123
          </h6>
          <span style={{ color: "gray" }}>Tel: 123.123.1233</span>
          <br />
          <span style={{ color: "gray" }}>Fax: 123.123.1233</span>
        </Grid>
        <Grid xs={3}>
          <h5 style={{ fontWeight: "600" }}>
            RIVERSIDE <span style={{ color: "#52A9FF" }}>\\</span>
          </h5>
          <h6 style={{ maxWidth: "230px" }}>
            1234 Los Angeles Rd. Suite 100 Los Angeles, USA 123123
          </h6>
          <span style={{ color: "gray" }}>Tel: 123.123.1233</span>
          <br />
          <span style={{ color: "gray" }}>Fax: 123.123.1233</span>
        </Grid>
        <Grid xs={10} className="centerd-div">
          <hr
            style={{
              width: "100%",
              color: "lightgray",
              borderTop: "2.6px solid lightgray",
            }}
          ></hr>
        </Grid>
        <Grid xs={10} container>
          <Grid
            xs={6}
            style={{
              justifyContent: "flex-start",
              padding: "2rem 0rem",
              alignItems: "start",
              marginLeft: "1rem",
              flexDirection: "column",
            }}
          >
            <h4 style={{ marginBottom: "1rem", fontWeight: "600" }}>
              CONTACT US
            </h4>
            <h6 style={{ marginBottom: "2rem" }}>
              If you have questions, please fill out the following form and we
              will be in touch as soon as possible.
            </h6>
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
              label="Accept a phone call"
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
                Send
              </button>
            </div>
          </Grid>
          <Grid
            xs={5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontWeight: "600", color: "gray", margin: "1.5rem" }}>
              Reach out to us throught our Community plateforms
            </h2>
            <br />
            <div className="centerd-div">
              <FacebookIcon
                style={{
                  fontSize: "4rem",
                  color: "rgb(82, 169, 255)",
                  margin: "1rem",
                  cursor: "pointer",
                }}
              />
              <TwitterIcon
                style={{
                  fontSize: "4rem",
                  color: "rgb(82, 169, 255)",
                  margin: "1rem",
                  cursor: "pointer",
                }}
              />
              <InstagramIcon
                style={{
                  fontSize: "4rem",
                  color: "rgb(82, 169, 255)",
                  margin: "1rem",
                  cursor: "pointer",
                }}
              />
              <LinkedInIcon
                style={{
                  fontSize: "4rem",
                  color: "rgb(82, 169, 255)",
                  margin: "1rem",
                  cursor: "pointer",
                }}
              />
            </div>
          </Grid>
        </Grid>
        <Grid xs={10} className="centerd-element">
          <hr
            style={{
              width: "100%",
              color: "lightgray",
              borderTop: "2.6px solid lightgray",
            }}
          ></hr>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
