import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../SearchBarFolder/SearchBar";
import { communitiesArea } from "../api/mlsdata";
import { CommunitiesObj } from "../api/mlsdata";
import "./CommunitiesPage.css";
import Pagination from "@mui/material/Pagination";
import SearchPage from "../SearchPage/SearchPage";

function paginator(items, current_page, per_page_items) {
  let page = current_page || 1,
    per_page = per_page_items || 1,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page_items),
    total_pages = Math.ceil(items.length / per_page);

  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  };
}
const Widgets = ({
  varaitionType,
  areaFromParent,
  showPagination,
  placeholderContent,
  searchBar,
}) => {
  const count = Math.ceil(communitiesArea.length / 1);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(paginator(communitiesArea, value, 1).page);
  };
  return (
    <>
      {paginator(communitiesArea, page, 1).data.map((area, indexKey) => (
        <Container>
          <Row>
            <Col className="pagination-div">
              {showPagination ? (
                <Pagination
                  count={count}
                  page={page}
                  onChange={handleChange}
                  color="primary"
                />
              ) : null}
            </Col>
          </Row>
          {searchBar ? (
            <Row className="row-box">
              <Col className="searchBox">
                <h5>
                  Search{" "}
                  {areaFromParent.PageName
                    ? areaFromParent.PageName
                    : area.PageName}{" "}
                  Home for sale
                </h5>
                <Col
                  className="searchBox-col-searchBar"
                  xs={12}
                  md={12}
                  xm={12}
                  lg={12}
                >
                  <SearchPage ShowHead={false} />
                  {/* <SearchBar placeholderContent={placeholderContent} /> */}
                </Col>
              </Col>
            </Row>
          ) : null}
          <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Los Angeles County {varaitionType} Residential Market
                      Stats
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <Container>
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <td className="td-text">New Listings (last 4 weeks) </td>
                      <td className="td-text">Homes for Sale </td>
                      <td className="td-text">Condos for Sale </td>
                      <td className="td-text">Detached for Sale </td>
                      <td className="td-text">Townhouse for Sale </td>
                      <td className="td-text">Median List Price</td>
                      <td className="td-text">Median Sales Price</td>
                      <td className="td-text">Median Sales Price Change </td>
                      <td className="td-text">Price Changes </td>
                      <td className="td-text">Months of Inventory </td>
                      <td className="td-text">Contracts </td>
                      <td className="td-text">Sales</td>
                      <td className="td-text">Sales Change </td>
                      <td className="td-text">Average Days on Market</td>
                    </Col>
                    <Col
                      xs={6}
                      sm={6}
                      md={6}
                      lg={6}
                      xl={6}
                      className="market-state-col"
                    >
                      <td className="td-text">3,406 </td>
                      <td className="td-text">12,339 </td>
                      <td className="td-text">1,893</td>
                      <td className="td-text">9,700</td>
                      <td className="td-text">746</td>
                      <td className="td-text">$850,000</td>
                      <td className="td-text">$800,000</td>
                      <td className="td-text">0%</td>
                      <td className="td-text">3,180</td>
                      <td className="td-text">4.7</td>
                      <td className="td-text">2,524</td>
                      <td className="td-text">3,423</td>
                      <td className="td-text">0%</td>
                      <td className="td-text">115</td>
                    </Col>
                    <p className="market-state-p">
                      In Los Angeles County there are currently 12,339 homes for
                      sale, of those 1,893 are condos, 9,700 are detached homes,
                      and 746 are townhomes. The median list price is $850,000
                      and the median sales price is $800,000. There have been
                      3,406 new listings in the last 4 weeks and 3,423 sales.
                    </p>
                  </Row>
                </Container>
              </tbody>
            </div>
          </Row>
          {/* <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Featured{" "}
                      {areaFromParent.contentLabel
                        ? areaFromParent.contentLabel
                        : area.contentLabel}{" "}
                      {varaitionType}
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <Container>
                  <Row>
                    {CommunitiesObj.map((Item, index) => (
                      <Col
                        xs={4}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={4}
                        className="element-col"
                      >
                        <td className="td-text">
                          <Link to={`/area-page/${Item.pageId}`}>
                            {Item.PageName}
                          </Link>
                        </td>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </tbody>
            </div>
          </Row> */}
          <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Browse Los Angeles {varaitionType}
                      {areaFromParent.PageName
                        ? areaFromParent.PageName
                        : area.PageName}{" "}
                      Homes By Type
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <Container>
                  <Row>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">
                        <Link to="/area-page/los-angeles/single-family-homes">
                          Single Family Homes
                        </Link>
                      </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Condos</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Townhomes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Luxury Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Luxury Condos</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Gated Community Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Pool Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Single Story Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">New Construction Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Beachfront Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Homes with Guest House</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Homes with Open Floorplan</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Golf Course Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Ocean View Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">City View Homes</td>
                    </Col>
                  </Row>
                </Container>
              </tbody>
            </div>
          </Row>
          <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Browse Los Angeles {varaitionType}
                      {areaFromParent.PageName
                        ? areaFromParent.PageName
                        : area.PageName}{" "}
                      Homes by Architectural Style
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <Container>
                  <Row>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Bungalows </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Contemporary Homes </td>
                    </Col>

                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Craftsman Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Custom Homes</td>
                    </Col>

                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Mediterranean Homes </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Modern Homes </td>
                    </Col>

                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Mid-Century Modern Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Patio Homes</td>
                    </Col>

                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Penthouse Ranch Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Spanish Homes</td>
                    </Col>

                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Tudor Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text"> Victorian Homes</td>
                    </Col>
                  </Row>
                </Container>
              </tbody>
            </div>
          </Row>
          <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Browse Los Angeles {varaitionType}
                      {areaFromParent.PageName
                        ? areaFromParent.PageName
                        : area.PageName}{" "}
                      Homes by Price Range
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <Container>
                  <Row>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">$300k - $400k </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">$400k - $500k </td>
                    </Col>

                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">$500k - $600k </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">$600k - $700k</td>
                    </Col>

                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">$700k - $800k </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">$800k - $900k </td>
                    </Col>

                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">$900k - $1 Million </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Above $1 Million </td>
                    </Col>

                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Above $5 Million</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Above $10 Million</td>
                    </Col>
                  </Row>
                </Container>
              </tbody>
            </div>
          </Row>
          <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Browse Los Angeles {varaitionType}
                      {areaFromParent.PageName
                        ? areaFromParent.PageName
                        : area.PageName}{" "}
                      Homes by Views
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <Container>
                  <Row>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Canyon View Homes </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">City View Homes </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Coastline View Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Golf Course View Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Hill View Homes </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Mountain View Homes </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Ocean View Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Panoramic View Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Park/Greenbelt View Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">Valley View Homes</td>
                    </Col>
                  </Row>
                </Container>
              </tbody>
            </div>
          </Row>
          <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Browse Los Angeles {varaitionType}
                      {areaFromParent.PageName
                        ? areaFromParent.PageName
                        : area.PageName}{" "}
                      Homes by Number of Bedrooms
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <Container>
                  <Row>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">2 Bed Homes </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text"> 3 Bed Homes </td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">4 Bed Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">5 bed Homes</td>
                    </Col>
                    <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      className="element-col"
                    >
                      <td className="td-text">6+ Bed Homes </td>
                    </Col>
                  </Row>
                </Container>
              </tbody>
            </div>
          </Row>
        </Container>
      ))}
    </>
  );
};

export default Widgets;
