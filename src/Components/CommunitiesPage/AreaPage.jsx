import * as React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "@mui/material/Pagination";
import ListtingTabs from "./ListtingTabs";
import Widgets from "./Widgets";
import { communitiesArea } from "../api/mlsdata";
import "./CommunitiesPage.css";
import StyledTabs from "../LandingPage/Communities/StyledTabs";
import CommunityPage from "./CommunityPage";

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
const propFromChildToParent = () => {};
const AreaPage = () => {
  const count = Math.ceil(communitiesArea.length / 1);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(paginator(communitiesArea, value, 1).page);
  };
  const [dataFromChildComp, setDataFromChildComp] = React.useState(null);

  const propFromChildToParent = (data) => {
    setDataFromChildComp(data);
  };

  const [checked, setChecked] = React.useState([]);
  const handleOnChange = (e, index) => {
    let prev = checked;
    let itemIndex = prev.indexOf(index);
    if (itemIndex !== -1) {
      prev.splice(itemIndex, 1);
    } else {
      prev.push(index);
    }
    setChecked([...prev]);
  };

  const [value, setValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const current_date =
    months[date.getMonth() + 1] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  return (
    <div className="communities-page-container flex">
      <CommunityPage />
      {/* {paginator(communitiesArea, page, 1).data.map((area, indexKey) => (
        <Container key={indexKey}>
          <Row className="communities-breadcrumbs-row">
            <Col className="communities-breadcrumbs-col1">
              <Link className="breadcrumbs-links" to="/">
                Home
              </Link>
              <span>&#62;</span>
              <Link className="breadcrumbs-links" to="#">
                {area.pageName}
              </Link>
            </Col>
          </Row>
          <Row className="title-row">
            <Col>
              <h1 className="title-row-h1">
                Homes for Sale in {area.pageName}, CA
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8} xm={8} lg={8}>
              <StyledTabs pageName={area.pageName} CardsNumber={2} />
            </Col>
            <Col xs={12} md={4} xm={4} lg={4} className="right-side-column">
              <Widgets
                areaFromParent={area}
                showPagination={false}
                placeholderContent={"Search Homes"}
              />
            </Col>
          </Row>
        </Container>
      ))} */}
    </div>
  );
};

export default AreaPage;
