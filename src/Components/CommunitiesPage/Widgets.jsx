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
const Widgets = ({ areaFromParent, showPagination, placeholderContent }) => {
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
          <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Featured{" "}
                      {areaFromParent.contentLabel
                        ? areaFromParent.contentLabel
                        : area.contentLabel}
                    </h5>
                  </th>
                </tr>
              </thead>

              <tbody className="area-tbody">
                {CommunitiesObj.map((Item, index) => (
                  <tr>
                    <td>
                      <Link to={`/area-page/${Item.pageId}`}>
                        {Item.PageName}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </div>
          </Row>
          <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Browse{" "}
                      {areaFromParent.PageName
                        ? areaFromParent.PageName
                        : area.PageName}{" "}
                      Homes By Type
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <tr>
                  <td>Single Family Homes</td>
                  <td className="right-td">Condos</td>
                </tr>
                <tr>
                  <td>Townhomes</td>
                  <td className="right-td">Luxury Homes</td>
                </tr>
                <tr>
                  <td>Luxury Condos</td>
                  <td className="right-td">Gated Community Homes</td>
                </tr>
                <tr>
                  <td>Pool Homes</td>
                  <td className="right-td">Single Story Homes</td>
                </tr>
                <tr>
                  <td>New Construction Homes</td>
                  <td className="right-td">Beachfront Homes</td>
                </tr>
                <tr>
                  <td>Homes with Guest House</td>
                  <td className="right-td">Homes with Open Floorplan</td>
                </tr>
                <tr>
                  <td>Golf Course Homes</td>
                  <td className="right-td">Ocean View Homes</td>
                </tr>
                <tr>
                  <td>City View Homes</td>
                </tr>
              </tbody>
            </div>
          </Row>
          <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Browse{" "}
                      {areaFromParent.PageName
                        ? areaFromParent.PageName
                        : area.PageName}{" "}
                      Homes by Architectural Style
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <tr>
                  <td>Bungalows </td>
                  <td className="right-td">Contemporary Homes </td>
                </tr>
                <tr>
                  <td>Craftsman Homes</td>
                  <td className="right-td">Custom Homes</td>
                </tr>
                <tr>
                  <td>Mediterranean Homes </td>
                  <td className="right-td">Modern Homes </td>
                </tr>
                <tr>
                  <td>Mid-Century Modern Homes</td>
                  <td className="right-td">Patio Homes</td>
                </tr>
                <tr>
                  <td>Penthouse Ranch Homes</td>
                  <td className="right-td">Spanish Homes</td>
                </tr>
                <tr>
                  <td>Tudor Homes</td>
                  <td className="right-td"> Victorian Homes</td>
                </tr>
              </tbody>
            </div>
          </Row>
          <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Browse{" "}
                      {areaFromParent.PageName
                        ? areaFromParent.PageName
                        : area.PageName}{" "}
                      Homes by Price Range
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <tr>
                  <td>$300k - $400k </td>
                  <td className="right-td">$400k - $500k </td>
                </tr>
                <tr>
                  <td>$500k - $600k </td>
                  <td className="right-td">$600k - $700k</td>
                </tr>
                <tr>
                  <td>$700k - $800k </td>
                  <td className="right-td">$800k - $900k </td>
                </tr>
                <tr>
                  <td>$900k - $1 Million </td>
                  <td className="right-td">Above $1 Million </td>
                </tr>
                <tr>
                  <td>Above $5 Million</td>
                  <td className="right-td">Above $10 Million</td>
                </tr>
              </tbody>
            </div>
          </Row>
          <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Browse{" "}
                      {areaFromParent.PageName
                        ? areaFromParent.PageName
                        : area.PageName}{" "}
                      Homes by Views
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <tr>
                  <td>Canyon View Homes </td>
                  <td className="right-td">City View Homes </td>
                </tr>
                <tr>
                  <td>Coastline View Homes</td>
                  <td className="right-td">Golf Course View Homes</td>
                </tr>
                <tr>
                  <td>Hill View Homes </td>
                  <td className="right-td">Mountain View Homes </td>
                </tr>
                <tr>
                  <td>Ocean View Homes</td>
                  <td className="right-td">Panoramic View Homes</td>
                </tr>
                <tr>
                  <td>Park/Greenbelt View Homes</td>
                  <td className="right-td">Valley View Homes</td>
                </tr>
              </tbody>
            </div>
          </Row>
          <Row className="row-box">
            <div className="searchBox">
              <thead className="area-thead">
                <tr className="area-tr">
                  <th>
                    <h5>
                      Browse{" "}
                      {areaFromParent.PageName
                        ? areaFromParent.PageName
                        : area.PageName}{" "}
                      Homes by Number of Bedrooms
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <tr>
                  <td>2 Bed Homes </td>
                  <td className="right-td"> 3 Bed Homes </td>
                </tr>
                <tr>
                  <td>4 Bed Homes</td>
                  <td className="right-td">5 bed Homes</td>
                </tr>
                <tr>
                  <td>6+ Bed Homes </td>
                </tr>
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
                        : area.contentLabel}
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <tr>
                  <td>
                    {areaFromParent.sideBar
                      ? areaFromParent.sideBar
                      : area.sideBar}
                  </td>
                  <td className="right-td">
                    {areaFromParent.sideBar
                      ? areaFromParent.sideBar
                      : area.sideBar}
                  </td>
                </tr>
                <tr>
                  <td>
                    {areaFromParent.sideBar
                      ? areaFromParent.sideBar
                      : area.sideBar}
                  </td>
                  <td className="right-td">
                    {areaFromParent.sideBar
                      ? areaFromParent.sideBar
                      : area.sideBar}
                  </td>
                </tr>
                <tr>
                  <td>
                    {areaFromParent.sideBar
                      ? areaFromParent.sideBar
                      : area.sideBar}
                  </td>
                  <td className="right-td">
                    {areaFromParent.sideBar
                      ? areaFromParent.sideBar
                      : area.sideBar}
                  </td>
                </tr>
              </tbody>
            </div>
          </Row> */}
        </Container>
      ))}
    </>
  );
};

export default Widgets;
