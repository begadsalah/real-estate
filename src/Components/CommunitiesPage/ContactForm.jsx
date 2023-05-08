import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as Agent1 } from "../../assets/agentsvg.svg";

const ContactForm = ({ showLeftPhoto, ColSize, showTitle }) => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row>
        {showLeftPhoto ? (
          <Col
            xs={12 - ColSize}
            sm={12 - ColSize}
            md={12 - ColSize}
            lg={12 - ColSize}
            xl={12 - ColSize}
          >
            <Agent1 className="connect-agent-image" />
          </Col>
        ) : null}
        <Col xs={ColSize} sm={ColSize} md={ColSize} lg={ColSize} xl={ColSize}>
          {showTitle ? (
            <h2 style={{ textAlign: "center" }}>
              Contact a Real Estate Agent About Los Angeles Home for sale
            </h2>
          ) : null}

          <div className="contact-form-main-div">
            <form action="">
              <Container>
                <Row>
                  <Col>
                    <label htmlFor="">
                      First Name<sup class="star">*</sup>
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                    />
                  </Col>
                  <Col>
                    <label htmlFor="">
                      Last Name<sup class="star">*</sup>
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label htmlFor="">
                      Email Address<sup class="star">*</sup>
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col>
                    <label htmlFor="">
                      Phone Number<sup class="star">*</sup>
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label htmlFor="">Type of Home:</label>
                    <select
                      id="#"
                      name="PropertyType"
                      style={{ color: "#757575" }}
                      placeholder="Select One"
                    >
                      <option value="" disabled selected hidden>
                        Select One
                      </option>
                      <option value="Single Family Home">
                        Single Family Home
                      </option>
                      <option value="Condominium">Condominium</option>
                      <option value="Townhouse">Townhouse</option>
                      <option value="Multi-family">Multi-family</option>
                      <option value="Manufactured Home">
                        Manufactured Home
                      </option>
                      <option value="Land">Land</option>
                    </select>
                  </Col>
                  <Col>
                    <label htmlFor="">Price Range</label>
                    <div className="price-range-divBox">
                      <input
                        type="text"
                        name="min-price"
                        placeholder="Min"
                        style={{ margin: "0 0.3rem" }}
                      />
                      <input
                        type="text"
                        name="max-price"
                        placeholder="Max"
                        style={{ margin: "0 0.3rem" }}
                      />
                    </div>
                  </Col>
                  <Col>
                    <label htmlFor="">Moving When?</label>
                    <select
                      id="#"
                      name="PropertyType"
                      style={{ color: "#757575" }}
                    >
                      <option value="" disabled selected hidden>
                        Select One
                      </option>
                      <option value="asap">ASAP</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="6 - 9 Months">6 - 9 Months</option>
                      <option value="9 - 12 Months">9 - 12 Months</option>
                      <option value="1+ Year">1+ Year</option>
                    </select>
                  </Col>
                </Row>
                <Row className="checkboxes-main-row">
                  <Col className="checkboxes-col">
                    <label htmlFor="">Are You Working with an Agent?</label>
                    <div
                      className="checkboxes-div-container"
                      style={{ top: "-1.5rem" }}
                    >
                      <FormControlLabel control={<Checkbox />} label="Yes" />
                      <FormControlLabel control={<Checkbox />} label="No" />
                    </div>
                  </Col>
                  <Col className="checkboxes-col">
                    <label htmlFor="">Need to Speak with a Lender?</label>
                    <div
                      className="checkboxes-div-container"
                      style={{ top: "-1.5rem" }}
                    >
                      <FormControlLabel control={<Checkbox />} label="Yes" />
                      <FormControlLabel control={<Checkbox />} label="No" />
                    </div>
                  </Col>
                  <Col className="checkboxes-col">
                    <label htmlFor="">Communication Preference</label>
                    <div
                      className="checkboxes-div-container"
                      style={{ top: "-1.5rem" }}
                    >
                      <FormControlLabel control={<Checkbox />} label="Call" />
                      <FormControlLabel control={<Checkbox />} label="Text" />
                      <FormControlLabel control={<Checkbox />} label="Email" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="contact-form-main-div">
                    <input
                      type="submit"
                      value="Submit"
                      style={{
                        width: "50%",
                        margin: "1rem 0",
                        color: "white",
                        backgroundColor: "#ffa840",
                      }}
                    />
                  </Col>
                </Row>
              </Container>
            </form>
            <p style={{ fontSize: "11px" }}>
              By submitting, you expressly consent to receive calls and texts at
              the number you provided, including marketing by auto-dialer,
              pre-recorded or artificial voice, and email, from agents
              associated with TotalLosAngelesHomes.com about real estate related
              matters, but not as a condition of purchase. Message frequency
              varies. You can text Stop to cancel. You also agree to our Privacy
              Policy and to our Terms of service regarding the information
              relating to you. Message and data rates may apply. This consent
              applies even if you are on a corporate, state or national Do Not
              Call list
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
