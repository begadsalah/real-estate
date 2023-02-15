import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../SearchBarFolder/SearchBar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { communitiesArea } from "../api/mlsdata";
import "./CommunitiesPage.css";
import Pagination from "@mui/material/Pagination";

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
const Widgets = ({ areaFromParent, showPagination }) => {
  const count = Math.ceil(communitiesArea.length / 1);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(paginator(communitiesArea, value, 1).page);
  };
  return (
    <>
      {paginator(communitiesArea, page, 1).data.map((area, indexKey) => (
        <div>
          <Row className="row-box">
            <div className="pagination-div">
              {showPagination ? (
                <Pagination
                  count={count}
                  page={page}
                  onChange={handleChange}
                  color="primary"
                />
              ) : null}
            </div>

            <div className="searchBox">
              <h5>
                Search{" "}
                {areaFromParent.pageName
                  ? areaFromParent.pageName
                  : area.pageName}
              </h5>
              <div className="searchBox-col-searchBar">
                <SearchBar />
              </div>
              <button className="searchBox-button">
                Search Homes
                <ArrowForwardIcon />
              </button>
            </div>
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
                <tr>
                  <td>
                    {areaFromParent.sideBar
                      ? areaFromParent.sideBar
                      : area.sideBar}
                  </td>
                  <td>
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
                  <td>
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
                  <td>
                    {areaFromParent.sideBar
                      ? areaFromParent.sideBar
                      : area.sideBar}
                  </td>
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
                      {areaFromParent.pageName
                        ? areaFromParent.pageName
                        : area.pageName}{" "}
                      Homes by Price Range
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <tr>
                  <td>$300k - $400k </td>
                  <td>$400k - $500k </td>
                  <td>$500k - $600k </td>
                </tr>
                <tr>
                  <td>$600k - $700k</td>
                  <td>$700k - $800k </td>
                  <td>$800k - $900k </td>
                </tr>
                <tr>
                  <td>$900k - $1 Million </td>
                  <td>Above $1 Million </td>
                  <td>Above $5 Million</td>
                </tr>
                <tr>
                  <td>Above $10 Million</td>
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
                      {areaFromParent.pageName
                        ? areaFromParent.pageName
                        : area.pageName}{" "}
                      Homes by Views
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <tr>
                  <td>Canyon View Homes </td>
                  <td>City View Homes </td>
                </tr>
                <tr>
                  <td>Coastline View Homes</td>
                  <td>Golf Course View Homes</td>
                </tr>
                <tr>
                  <td>Hill View Homes </td>
                  <td>Mountain View Homes </td>
                </tr>
                <tr>
                  <td>Ocean View Homes</td>
                  <td>Panoramic View Homes</td>
                </tr>
                <tr>
                  <td>Park/Greenbelt View Homes</td>
                  <td>Valley View Homes</td>
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
                      {areaFromParent.pageName
                        ? areaFromParent.pageName
                        : area.pageName}{" "}
                      Homes by Architectural Style
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody className="area-tbody">
                <tr>
                  <td>Bungalows </td>
                  <td>Contemporary Homes </td>
                </tr>
                <tr>
                  <td>Craftsman Homes</td>
                  <td>Custom Homes</td>
                </tr>
                <tr>
                  <td>Mediterranean Homes </td>
                  <td>Modern Homes </td>
                </tr>
                <tr>
                  <td>Mid-Century Modern Homes</td>
                  <td>Patio Homes</td>
                </tr>
                <tr>
                  <td>Penthouse Ranch Homes</td>
                  <td>Spanish Homes</td>
                </tr>
                <tr>
                  <td>Tudor Homes</td>
                  <td> Victorian Homes</td>
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
                      {areaFromParent.pageName
                        ? areaFromParent.pageName
                        : area.pageName}{" "}
                      Homes by Number of Bedrooms
                    </h5>
                  </th>
                </tr>
              </thead>

              <tbody className="area-tbody">
                <tr>
                  <td>2 Bed Homes </td>
                  <td> 3 Bed Homes </td>
                </tr>
                <tr>
                  <td>4 Bed Homes</td>
                  <td>5 bed Homes</td>
                </tr>
                <tr>
                  <td>6+ Bed Homes </td>
                </tr>
              </tbody>
            </div>
          </Row>
        </div>
      ))}
    </>
  );
};

export default Widgets;
