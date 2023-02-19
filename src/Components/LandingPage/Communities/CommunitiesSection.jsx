import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TabPanelComponent from "./TabPanelComponent";
import "./CommunitiesSection.css";
const CommunitiesSection = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className="communities-container">
      <div className="communities-section" style={{ backgroundColor: "white" }}>
        <div
          className="headLines-div-container"
          style={{ backgroundColor: "white" }}
        >
          <h2
            className="text-center h3-title"
            style={{ backgroundColor: "white" }}
          >
            Los Angeles Real Estate Listings
          </h2>
        </div>
        <TabPanelComponent />
      </div>
    </Container>
  );
};

export default CommunitiesSection;
