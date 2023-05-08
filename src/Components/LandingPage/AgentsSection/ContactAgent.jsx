import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./AgentsDisplay.css";
import Agent1 from "../../../assets/sec6.png";

const ContactAgent = () => {
  return (
    <div className="connect-agent-mainRow">
      <Container>
        <Row>
          <Col
            className="connect-agent-image-col"
            md={6}
            lg={6}
            xlg={6}
            xs={0}
            sm={0}
          >
            {/* <Agent1 className="connect-agent-image" />{" "} */}
            <img src={`${Agent1}`} alt="" className="connect-agent-image" />
          </Col>
          <Col className="connect-agent-content">
            <span>Connect With a Local Agent</span>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              className="connect-agent-formBox"
            >
              <TextField
                id="filled-required"
                label="Name"
                type="text"
                variant="outlined"
                className="connect-agent-textField"
              />
              <TextField
                id="filled-required"
                label="Email"
                type="email"
                variant="outlined"
                className="connect-agent-textField"
              />
              <TextField
                id="filled-required"
                label="Mobile Phone"
                type="text"
                variant="outlined"
                className="connect-agent-textField"
              />
              <TextField
                multiline
                rows={4}
                defaultValue="Send us a message"
                id="outlined-multiline-static"
                label="Message"
                className="connect-agent-textField"
              />

              <Button variant="outlined" size="large" className="form-button">
                Connect with the Agent
              </Button>
            </Box>
            <p className="connect-agent-bottomP">
              By submitting your information, you agree to share your
              information with its network of real estate & mortgage
              professionals (affiliates) (or through their agents) and consent
              to receive marketing emails, calls, & texts related to your
              inquiry (including via automatic telephone dialing system, or
              artificial or pre-recorded voice technology) or affiliates to the
              email address or number you provided even if your number appears
              on the company, state, or national Do Not Call Registry. You
              further agree that such affiliates may share information with
              Movoto and each other. You also agree to our Terms & Conditions
              and Privacy Policy. Consent not required for purchase.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactAgent;
