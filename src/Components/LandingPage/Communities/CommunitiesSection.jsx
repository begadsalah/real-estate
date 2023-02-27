import React from "react";
import Container from "react-bootstrap/Container";
import StyledTabs from "./StyledTabs";
import "./CommunitiesSection.css";
const CommunitiesSection = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sections-main-container">
      <Container>
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

          <StyledTabs CardsNumber={3} />
        </div>
      </Container>
    </div>
  );
};

export default CommunitiesSection;
