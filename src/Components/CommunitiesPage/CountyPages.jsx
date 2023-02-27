import React from "react";
import { useParams } from "react-router-dom";
import { CommunitiesObj } from "../api/mlsdata";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Widgets from "./Widgets";
import { Link } from "react-router-dom";
import GalleryTabs from "../LandingPage/Communities/GalleryTabs";

const CountyPages = () => {
  const { pageId } = useParams();
  console.log(pageId);
  return (
    <div>
      {CommunitiesObj.filter((item) => item.pageId === `${pageId}`).map(
        (CountyItem, index) => (
          <Container key={index}>
            <Row className="communities-breadcrumbs-row">
              <Col className="communities-breadcrumbs-col1">
                <Link className="breadcrumbs-links" to="/">
                  Home
                </Link>
                <Col xs={1} md={1} xm={1} lg={1} className="breadcrumbs-arrow">
                  <span>&#62;</span>
                </Col>
                <Link className="breadcrumbs-links" to="#">
                  {CountyItem.PageName}
                </Link>
              </Col>
            </Row>
            <Row className="title-row">
              <Col>
                <h1 className="title-row-h1">
                  Homes for Sale in {CountyItem.PageName}, CA
                </h1>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8} xm={8} lg={8}>
                <GalleryTabs areaFromParent={pageId} />
              </Col>
              <Col xs={12} md={4} xm={4} lg={4} className="right-side-column">
                <Widgets
                  areaFromParent={CountyItem}
                  showPagination={false}
                  placeholderContent={"Search Homes"}
                />
              </Col>
            </Row>
          </Container>
        )
      )}
    </div>
  );
};

export default CountyPages;
