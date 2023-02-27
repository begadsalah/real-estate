import React from "react";
import "./CommunitiesPage.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Widgets from "./Widgets";
import { CommunitiesObj } from "../api/mlsdata";

const CommunitiesPage = () => {
  return (
    <div>
      <Container className="communities-page-container">
        <Row className="communities-page-container">
          <Col xs={12} md={9} xm={9} lg={9}>
            <Row className="communities-page-row">
              <Col xs={1} md={1} xm={1} lg={1}>
                <Link className="breadcrumbs-links" to="/">
                  Home
                </Link>
              </Col>
              <Col xs={1} md={1} xm={1} lg={1}>
                <span>&#62;</span>
              </Col>
              <Col xs={1} md={1} xm={1} lg={1}>
                <Link to="/communities" className="breadcrumbs-links">
                  Communities
                </Link>
              </Col>
            </Row>
            <Row className="title-row">
              <h1>Communities & Neighborhoods List</h1>
            </Row>
            <Row className="p-row">
              <Col xs={11} md={11} xm={11} lg={11}>
                <p className="para-communities">
                  Use the list below to search homes for sale in Across
                  Calfornia and including Each of these pages contains the
                  active real estate listings for that area, updated every day.
                  If you already know which communities you like, be sure to
                  <span className="color-theme-small-word">
                    Sign up for email alerts of new listings
                  </span>
                  as soon as they hit the market.
                </p>
                <p className="para-communities">
                  When you are ready to visit any Calfornia area community or
                  neighborhood, call or text
                  <span className="color-theme-small-word">(102) 123-1234</span>
                  to speak with one of our real estate agent or
                  <span className="color-theme-small-word">contact us</span>
                  today.
                </p>
              </Col>
            </Row>
            <Row className="subtitle-row" xs={12} md={12} xm={12} lg={12}>
              <h4>Featured Communities</h4>
            </Row>
            <Container>
              {CommunitiesObj.map((item, index) => (
                <Row key={index}>
                  <Col className="featured-communities-col">
                    <h6>
                      <Link to="/area-page">{item.PageName}</Link>
                    </h6>
                  </Col>
                  <Col className="featured-communities-col">
                    <h6>{item.ContentLabel}</h6>
                  </Col>
                  <Col className="featured-communities-col">
                    <h6>{item.Section}</h6>
                  </Col>
                </Row>
              ))}
            </Container>
          </Col>
          <Col xs={12} md={3} xm={3} lg={3} style={{ marginTop: "4rem" }}>
            <Widgets areaFromParent={false} showPagination={true} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CommunitiesPage;
