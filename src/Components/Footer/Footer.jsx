import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter-sign.png";
import instagram from "../../assets/instagram.png";
import google from "../../assets/google.png";

import "./Footer.css";
const Footer = () => {
  return (
    <Container style={{ marginTop: "3rem" }}>
      <Row
        style={{ padding: "2rem 0", borderBottom: "1.2px solid #222222" }}
        className="footer-mainRow"
      >
        <h5 style={{ fontWeight: "600" }}>Popular Searches</h5>
        <br />
        <br />
        <Col>
          <span>Agoura Hills Real Estate</span>
          <br />
          <span>Bel Air Real Estate</span>
          <br />
          <span>Beverly Hills Real Estate</span>
          <br />
          <span>Burbank Real Estate</span>
          <br />
          <span>Corona Del Mar Real Estate</span>
          <br />
          <span>Encino Real Estate</span>
          <br />
          <span>Glendale Real Estate</span>
          <br />
          <span>Hermosa Beach Real Estate</span>
          <br />
        </Col>
        <Col>
          <span>Hollywood Hills Real Estate</span>
          <br />
          <span>Huntington Beach Real Estate</span>
          <br />
          <span>Irvine Real Estate</span>
          <br />
          <span>La Jolla Real Estate</span>
          <br />
          <span>Laguna Beach Real Estate</span>
          <br />
          <span>Long Beach Real Estate</span>
          <br />
          <span>Los Angeles Real Estate</span>
          <br />
          <span>Los Feliz Real Estate</span>
          <br />
        </Col>
        <Col>
          <span>Malibu Real Estate</span>
          <br />
          <span>Newport Beach Real Estate</span>
          <br />
          <span>Orange County Real Estate</span>
          <br />
          <span>Palm Springs Real Estate</span>
          <br />
          <span>Pasadena Real Estate</span>
          <br />
          <span>Rancho Mirage Real Estate</span>
          <br />
          <span>Riverside Real Estate</span>
          <br />
          <span>San Bernadino Real Estate</span>
          <br />
        </Col>
        <Col>
          <span>San Diego Real Estate</span>
          <br />
          <span>Santa Ana Real Estate</span>
          <br />
          <span>Santa Barbara Real Estate</span>
          <br />
          <span>Santa Monica Real Estate</span>
          <br />
          <span>Sherman Oaks Real Estate</span>
          <br />
          <span>Silver Lake Real Estate</span>
          <br />
          <span>Ventura Real Estate</span>
          <br />
          <span>West Hollywood Real Estate</span>
          <br />
        </Col>
      </Row>
      <Row
        style={{ padding: "2rem 0", borderBottom: "1.2px solid #222222" }}
        className="footer-mainRow"
      >
        <Col className="footer-col">
          <span>About Us</span>
          <br />
          <br />
          <span>Create Account</span>
          <br />
          <br />
          <span>Join Agent Network</span>
          <br />
          <br />
          <span>Blog</span>
          <br />
          <br />
        </Col>
        <Col className="footer-col">
          <span>Contact Us</span>
          <br />
          <br />
          <span>1308 E Colorado Blvd #2034</span>
          <br />
          <br />
          <span>Pasadena, CA 91106</span>
          <br />
          <br />
          <span>
            <Row>
              <img
                src={`${facebook}`}
                alt="social Media logos"
                style={{ width: "50px", height: "30px" }}
              />
              <img
                src={`${instagram}`}
                alt="social Media logos"
                style={{ width: "50px", height: "30px" }}
              />
              <img
                src={`${google}`}
                alt="social Media logos"
                style={{ width: "50px", height: "30px" }}
              />
              <img
                src={`${twitter}`}
                alt="social Media logos"
                style={{ width: "50px", height: "30px" }}
              />
            </Row>
          </span>
          <br />
          <br />
        </Col>
        <Col className="footer-col">
          <span>Sell Your Home</span>
          <br />
          <br />
          <span>Free Home Valuation</span>
          <br />
          <br />
          <span>Connect With Agent</span>
          <br />
          <br />
          <span>Market Report</span>
          <br />
          <br />
        </Col>
        <Col className="footer-col">
          <span>Home Buyers</span>
          <br />
          <br />
          <span>Manage Account</span>
          <br />
          <br />
          <span>Open Houses</span>
          <br />
          <br />
          <span>Recently Reduced</span>
          <br />
          <br />
        </Col>
      </Row>
      <Row style={{ padding: "2rem 0" }} className="footer-mainRow">
        <Col>
          <span>Matiah Fischer, Realtor® – CA DRE Lic #02080453 – CURB</span>
          <br />
          <br />
          <span>
            © Copyright 2023 Matiah Fischer LLC, AllHomesLosAngeles.com. All
            Rights Reserved.
          </span>
          <br />
          <br />
          <span>
            Accessibility | Privacy Policy | Terms & Conditions | DMCA Notice |
            Sitemap
          </span>
          <br />
          <br />
          <span>
            The IDX information being provided on this website is exclusively
            for the consumers'
          </span>
          <br />
          <br />
          <span>
            personal, noncommercial use and may not be used for any purpose
            other than to identify
          </span>
          <br />
          <span>
            prospective properties consumers may be interested in purchasing.
            Information deemed
          </span>
          <br />
          <br />
          <span>
            reliable but not guaranteed to be accurate. Buyer to verify all
            information.
          </span>
          <br />
          <br />
          <span>Equal Housing Opportunity Logo | REALTOR® Logo </span>
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
