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
    <Container>
      <Row className="div-flex">
        <h2 className="text-center h3-title">
          <span className="span-title">Los Angeles</span> Real Estate Listings
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
    </Container>
  );
};

export default CommunitiesSection;
