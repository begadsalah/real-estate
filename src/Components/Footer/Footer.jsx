import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-main-div">
      <Container>
        <Row className="footer-table-row">
          <table className="footer-table">
            <thead className="footer-thead ">
              <tr className="footer-tr">
                <th style={{ color: "#336b9f" }}>CONTACT</th>
                <th>CONNECT</th>
                <th>NAVIGATION</th>
                <th>POPULAR SEARCHES</th>
              </tr>
            </thead>
            <tbody className="footer-tbody">
              <tr className="footer-tbody-tr">
                <td>Real Estate</td>
                <td className="socialMedia-td">
                  <FacebookIcon style={{ color: "#336b9f" }} /> Facebook
                </td>
                <td>Search</td>
                <td>Los Angeles</td>
              </tr>
              <tr className="footer-tbody-tr">
                <td>(123) 123-1234</td>
                <td className="socialMedia-td">
                  <TwitterIcon style={{ color: "#336b9f" }} />
                  Twitter
                </td>
                <td>Hire Agent</td>
                <td>San Bernadino</td>
              </tr>
              <tr className="footer-tbody-tr">
                <td>real-estate@gmail.com</td>
                <td className="socialMedia-td">
                  <InstagramIcon style={{ color: "#336b9f" }} />
                  Instagram
                </td>
                <td>Communities</td>
                <td>Ventura</td>
              </tr>
              <tr className="footer-tbody-tr">
                <td>LOSANGELOS DRE #0123123</td>
                <td className="socialMedia-td">
                  <LinkedInIcon style={{ color: "#336b9f" }} />
                  Linkedin
                </td>
                <td>Help</td>
                <td>Orange County</td>
              </tr>
            </tbody>
          </table>
        </Row>
        <Row>
          <thead className="footer-thead-rights">
            <tr>
              <p style={{ fontSize: "12px" }}>
                Accessibility |Terms of Service |Privacy Policy |DMCA Notice
                |Property Listings |Sitemap © Copyright 2023 Real Estate. All
                Rights Reserved.
              </p>
            </tr>
          </thead>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
