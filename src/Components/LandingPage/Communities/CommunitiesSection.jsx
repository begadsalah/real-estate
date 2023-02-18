import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TabPanelComponent from "./TabPanelComponent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./CommunitiesSection.css";
const CommunitiesSection = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className="communities-container">
      <div className="communities-section" style={{ backgroundColor: "white" }}>
        <Row className="div-flex" style={{ backgroundColor: "white" }}>
          <h2
            className="text-center h3-title"
            style={{ backgroundColor: "white" }}
          >
            Los Angeles Real Estate Listings
          </h2>
        </Row>
        <Row>
          <TabPanelComponent />
        </Row>
        {/* <Row>
        <div className="center">
          <div className="btn-1">
            <a href="">
              <span>See More Like This</span>
            </a>
          </div>
        </div>
      </Row> */}
      </div>
    </Container>
  );
};

export default CommunitiesSection;
