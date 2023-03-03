import React from "react";
import { useState } from "react";
import SearchPage from "../SearchPage/SearchPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { propertyDetails } from "../api/mlsdata";
import { CommunitiesObj } from "../api/mlsdata";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import CardComponent from "../LandingPage/Communities/CardComponent";
import Test from "../LandingPage/Communities/Test";
import Widgets from "./Widgets";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapSearch from "../MapSearch/MapSearch";
import Sreach from "../MapListting/search";
import ContactForm from "./ContactForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const CommunityPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [numberOfBeds, setNumberOfbeds] = useState("Any");
  const [numberOfBaths, setNumberOfBaths] = useState("Any");
  const [Showed1, setShowed1] = useState(false);
  const [Showed2, setShowed2] = useState(false);
  const [Showed3, setShowed3] = useState(false);
  const [Showed4, setShowed4] = useState(false);
  const [Showed5, setShowed5] = useState(false);
  const handleChangeNumberOfBeds = (event, numBeds) => {
    setNumberOfbeds(numBeds);
  };
  const handleChangeNumberOfBaths = (event, numBaths) => {
    setNumberOfBaths(numBaths);
  };
  return (
    <Container style={{ marginBottom: "3rem" }}>
      <Row className="communities-breadcrumbs-row">
        <h1> Los Angeles Homes For Sale</h1>
        <Col className="communities-breadcrumbs-col1">
          <Link className="breadcrumbs-links" to="/">
            Home
          </Link>
          <span style={{ margin: "0 1rem" }}>&#62;</span>
          <Link className="breadcrumbs-links" to="#">
            Los Angeles
          </Link>
        </Col>
      </Row>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            className="basic-tabs"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Tab
              icon={<GridViewIcon />}
              label="Gallery"
              {...a11yProps(0)}
              iconPosition="start"
            />

            <Tab
              icon={<LocationOnIcon />}
              label="Map"
              {...a11yProps(1)}
              iconPosition="start"
            />
          </Tabs>
          <Row className="filters-row" style={{ marginTop: "1rem" }}>
            <Col
              className="filter-component-col-search"
              xs={5}
              sm={5}
              md={5}
              lg={5}
              xl={5}
            >
              <SearchPage searchPadding={"1.2rem"} />
            </Col>
            <Col xs={7} sm={7} md={7} lg={7} xl={7}>
              <Row className="filters-main-right-row">
                <Col className="filter-component-col">
                  <label htmlFor="">
                    Price
                    {Showed1 ? (
                      <KeyboardArrowUpIcon
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          setShowed1(false);
                        }}
                      />
                    ) : (
                      <KeyboardArrowDownIcon
                        style={{
                          color: "rgba(51, 107, 159, 1)",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setShowed1(true);
                          setShowed2(false);
                          setShowed3(false);
                          setShowed4(false);
                          setShowed5(false);
                        }}
                      />
                    )}
                  </label>
                  {Showed1 ? (
                    <div
                      className="price-range-divBox dropDown-div-box"
                      style={{ flexDirection: "row" }}
                    >
                      <input
                        type="text"
                        name="min-price"
                        placeholder="Min Price .."
                      />
                      <input
                        type="text"
                        name="max-price"
                        placeholder="Max Price .."
                      />
                    </div>
                  ) : null}
                </Col>
                <Col className="filter-component-col">
                  <label htmlFor="">
                    Beds
                    {Showed2 ? (
                      <KeyboardArrowUpIcon
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          setShowed2(false);
                        }}
                      />
                    ) : (
                      <KeyboardArrowDownIcon
                        style={{
                          color: "rgba(51, 107, 159, 1)",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setShowed2(true);
                          setShowed1(false);
                          setShowed3(false);
                          setShowed4(false);
                          setShowed5(false);
                        }}
                      />
                    )}
                  </label>
                  {Showed2 ? (
                    <div className="dropDown-div-box">
                      <ToggleButtonGroup
                        color="primary"
                        value={numberOfBeds}
                        exclusive
                        onChange={handleChangeNumberOfBeds}
                        aria-label="Beds number"
                      >
                        <ToggleButton value="Any">Any</ToggleButton>
                        <ToggleButton value="1+">1+</ToggleButton>
                        <ToggleButton value="2+">2+</ToggleButton>
                        <ToggleButton value="3+">3+</ToggleButton>
                        <ToggleButton value="4+">4+</ToggleButton>
                        <ToggleButton value="5+">5+</ToggleButton>
                        <ToggleButton value="6+">6+</ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                  ) : null}
                </Col>
                <Col className="filter-component-col">
                  <label htmlFor="">
                    Baths
                    {Showed3 ? (
                      <KeyboardArrowUpIcon
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          setShowed3(false);
                        }}
                      />
                    ) : (
                      <KeyboardArrowDownIcon
                        style={{
                          color: "rgba(51, 107, 159, 1)",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setShowed3(true);
                          setShowed2(false);
                          setShowed1(false);
                          setShowed4(false);
                          setShowed5(false);
                        }}
                      />
                    )}
                  </label>
                  {Showed3 ? (
                    <div className="dropDown-div-box">
                      <ToggleButtonGroup
                        color="primary"
                        value={numberOfBaths}
                        exclusive
                        onChange={handleChangeNumberOfBaths}
                        aria-label="Baths number"
                      >
                        <ToggleButton value="Any">Any</ToggleButton>
                        <ToggleButton value="1+">1+</ToggleButton>
                        <ToggleButton value="2+">2+</ToggleButton>
                        <ToggleButton value="3+">3+</ToggleButton>
                        <ToggleButton value="4+">4+</ToggleButton>
                        <ToggleButton value="5+">5+</ToggleButton>
                        <ToggleButton value="6+">6+</ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                  ) : null}
                </Col>
                <Col className="filter-component-col">
                  <label htmlFor="">
                    Types
                    {Showed4 ? (
                      <KeyboardArrowUpIcon
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          setShowed4(false);
                        }}
                      />
                    ) : (
                      <KeyboardArrowDownIcon
                        style={{
                          color: "rgba(51, 107, 159, 1)",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setShowed4(true);
                          setShowed1(false);
                          setShowed3(false);
                          setShowed2(false);
                          setShowed5(false);
                        }}
                      />
                    )}
                  </label>
                  {Showed4 ? (
                    <div className="dropDown-div-box">
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Resdential"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Lots / Land"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Multi-Family"
                      />
                      <FormControlLabel control={<Checkbox />} label="Rental" />
                    </div>
                  ) : null}
                </Col>
                <Col className="filter-component-col">
                  <label htmlFor="">
                    More
                    {Showed5 ? (
                      <KeyboardArrowUpIcon
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          setShowed5(false);
                        }}
                      />
                    ) : (
                      <KeyboardArrowDownIcon
                        style={{
                          color: "rgba(51, 107, 159, 1)",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setShowed5(true);
                          setShowed1(false);
                          setShowed3(false);
                          setShowed4(false);
                          setShowed2(false);
                        }}
                      />
                    )}
                  </label>
                  {Showed5 ? (
                    <div
                      className="dropDown-div-box"
                      style={{ left: "auto !important", right: "0" }}
                    >
                      <Container>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div>
                              <label htmlFor="">Status</label>
                              <br />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Pending"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Active"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Sold"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <label htmlFor="">Home Type</label>
                            <br />
                            <Row>
                              {propertyDetails.map((item, index) => (
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    key={`${index}-x`}
                                    control={<Checkbox />}
                                    label={`${item.type}`}
                                  />
                                </Col>
                              ))}
                            </Row>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                            <label htmlFor="">Square Feet</label>
                            <div className="price-range-divBox-2">
                              <input
                                type="text"
                                name="min-price"
                                placeholder="Min"
                                style={{ margin: "0.3rem 0.3rem" }}
                              />
                              <br />
                              <input
                                type="text"
                                name="max-price"
                                placeholder="Max"
                                style={{ margin: "0.3rem 0.3rem" }}
                              />
                            </div>
                          </Col>
                          <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                            <label htmlFor="">Lot Size (Sq. Ft.)</label>
                            <div className="price-range-divBox-2">
                              <input
                                type="text"
                                name="min-price"
                                placeholder="Min"
                                style={{ margin: "0.3rem 0.3rem" }}
                              />
                              <input
                                type="text"
                                name="max-price"
                                placeholder="Max"
                                style={{ margin: "0.3rem 0.3rem" }}
                              />
                            </div>
                          </Col>
                          <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                            <label htmlFor="">Year Built</label>
                            <div className="price-range-divBox-2">
                              <input
                                type="text"
                                name="min-price"
                                placeholder="Min"
                                style={{ margin: "0.3rem 0.3rem" }}
                              />

                              <input
                                type="text"
                                name="max-price"
                                placeholder="Max"
                                style={{ margin: "0.3rem 0.3rem" }}
                              />
                            </div>
                          </Col>
                          <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                            <label htmlFor="">HOA Fee</label>
                            <div className="price-range-divBox-2">
                              <input
                                type="text"
                                name="min-price"
                                placeholder="Min"
                                style={{ margin: "0.3rem 0.3rem" }}
                              />
                              <input
                                type="text"
                                name="max-price"
                                placeholder="Max"
                                style={{ margin: "0.3rem 0.3rem" }}
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <label htmlFor="">Garage Space</label>
                            <div>
                              <ToggleButtonGroup
                                color="primary"
                                value={numberOfBaths}
                                exclusive
                                onChange={handleChangeNumberOfBaths}
                                aria-label="Garage Space"
                              >
                                <ToggleButton value="Any">Any</ToggleButton>
                                <ToggleButton value="1+">1+</ToggleButton>
                                <ToggleButton value="2+">2+</ToggleButton>
                                <ToggleButton value="3+">3+</ToggleButton>
                                <ToggleButton value="4+">4+</ToggleButton>
                              </ToggleButtonGroup>
                            </div>
                          </Col>
                          <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                            <label htmlFor="">Price Reduction (%)</label>
                            <select
                              id="#"
                              name="PropertyType"
                              style={{ color: "#757575" }}
                              placeholder="Select One"
                              className="select-input-option"
                            >
                              <option value="" disabled selected hidden>
                                ...
                              </option>
                              <option value="">At Least 1%</option>
                              <option value="Single Family Home">
                                At Least 5%
                              </option>
                              <option value="Condominium">At Least 10%</option>
                              <option value="Townhouse">At Least 15%</option>
                              <option value="Multi-family">At Least 20%</option>
                              <option value="Manufactured Home">
                                At Least 25%
                              </option>
                            </select>
                          </Col>
                          <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                            <label htmlFor="">Price Reduction Date</label>
                            <select
                              id="#"
                              name="PropertyType"
                              style={{ color: "#757575" }}
                              placeholder="Select One"
                              className="select-input-option"
                            >
                              <option value="" disabled selected hidden>
                                ...
                              </option>
                              <option value="Single Family Home">Today</option>
                              <option value="Condominium">Past Two Days</option>
                              <option value="Townhouse">Past Three Days</option>
                              <option value="Multi-family">Past Week</option>
                            </select>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <label htmlFor="">Open House Date</label>
                            <select
                              id="#"
                              name="PropertyType"
                              style={{ color: "#757575" }}
                              placeholder="Select One"
                              className="select-input-option"
                            >
                              <option value="" disabled selected hidden>
                                ...
                              </option>
                              <option value="Single Family Home">Today</option>
                              <option value="Condominium">
                                Today or Tomorrow
                              </option>
                              <option value="Townhouse">
                                In the next 3 Days
                              </option>
                              <option value="Multi-family">
                                In the Next Week
                              </option>
                            </select>
                          </Col>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <label htmlFor="">Open House Type</label>
                            <select
                              id="#"
                              name="PropertyType"
                              style={{ color: "#757575" }}
                              placeholder="Select One"
                              className="select-input-option"
                            >
                              <option value="" disabled selected hidden>
                                ...
                              </option>
                              <option value="Single Family Home">
                                In Person and Virtual
                              </option>
                              <option value="Condominium">
                                In Person Only
                              </option>
                              <option value="Townhouse">Virtual Only</option>
                            </select>
                          </Col>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <label htmlFor="">Days on Site</label>
                            <br />
                            <select
                              id="#"
                              name="PropertyType"
                              style={{ color: "#757575" }}
                              placeholder="Select One"
                              className="select-input-option"
                            >
                              <option value="" disabled selected hidden>
                                ...
                              </option>
                              <option value="Single Family Home">
                                Less than 3 days
                              </option>
                              <option value="Condominium">
                                Less than 7 days
                              </option>
                              <option value="Townhouse">
                                Less than 14 days
                              </option>
                              <option value="Multi-family">
                                Less than 30 days
                              </option>
                              <option value="Multi-family">
                                More than 7 days
                              </option>
                              <option value="Multi-family">
                                More than 14 days
                              </option>
                              <option value="Multi-family">
                                More than 30 days
                              </option>
                            </select>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col className="checkboxes-col">
                            <label htmlFor="">Show Only </label>
                            <div className="checkboxes-div-container">
                              <FormControlLabel
                                control={<Checkbox />}
                                label="New Construction"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Lender-owned (REO)"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Short Sale"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col className="checkboxes-col">
                            <label htmlFor="">Property Sub-Type</label>
                            <div className="checkboxes-div-container">
                              <Row>
                                {propertyDetails.map((item, index) => (
                                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <FormControlLabel
                                      control={<Checkbox />}
                                      label={`${item.type}`}
                                    />
                                  </Col>
                                ))}
                              </Row>
                            </div>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col className="checkboxes-col">
                            <label htmlFor="">Pets Allowed </label>
                            <div className="checkboxes-div-container">
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Breed Restrictions"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Call"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Cats OK"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Dogs OK"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="No"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Number Limit"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Size Limit"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Yes"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col className="checkboxes-col">
                            <label htmlFor="">Interior</label>
                            <div className="checkboxes-div-container">
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Fireplace"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Skylight"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Laundry"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Guest House"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Theater"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Wine Cellar"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Elevator"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col className="checkboxes-col">
                            <label htmlFor="">Exterior</label>
                            <div className="checkboxes-div-container">
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Private Pool"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Private Spa"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Patio"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col className="checkboxes-col">
                            <label htmlFor="">Lot Features</label>
                            <div className="checkboxes-div-container">
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Water Front"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Bay Front"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Horse Property"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="On Golf Course"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Ocean View"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Gated Community"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col className="checkboxes-col">
                            <label htmlFor="">Levels</label>
                            <div className="checkboxes-div-container">
                              <FormControlLabel
                                control={<Checkbox />}
                                label="One"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Two"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Three Or More"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Multi/Split"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col className="checkboxes-col">
                            <label htmlFor="">Senior Community</label>
                            <div className="checkboxes-div-container">
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Yes"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="No"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <Col className="checkboxes-col">
                            <label htmlFor="">Parking Features</label>
                            <div className="checkboxes-div-container">
                              <Row>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Asphalt"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Assigned"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Attached Carport"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Boat"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Carport"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  {" "}
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Circular Driveway"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Community Structure"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Concrete"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Controlled Entrance"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Converted Garage"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Covered"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  {" "}
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Deck"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Detached Carport"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Direct Access"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Door-Multi"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Door-Single"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  {" "}
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Driveway"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Driveway Blind"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Driveway Down Slope From Street"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Driveway Level"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Driveway Up Slope From Street"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  {" "}
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Electric Gate"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  {" "}
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Electric Vehicle Charging Stations"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Garage"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Garage Door Opener"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Garage Faces Front"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Garage Faces Rear"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Garage Faces Side"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Gated"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Gravel"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Guarded"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Guest"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Heated Garage"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Metered"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="No Driveway"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Off site"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Off street"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="One Space"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="On Site"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="On street"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Oversized"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Paved"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Permit Required"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Porte-Cochere"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Private"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Public"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  {" "}
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Pull-through"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="RV Access/Parking"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="RV Garage"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="RV Gated"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="RV Hook-Ups"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="RV Potential"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Shared Driveway"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Side by Side"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Storage"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Tandem"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Unassigned"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Uncovered"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Underground"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  {" "}
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Unpaved"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  {" "}
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Valet"
                                  />
                                </Col>
                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Workshop in Garage"
                                  />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>HOA Amenities</label>
                            <Row
                              id="featureGroup93"
                              data-id="93"
                              data-selectiontype="0"
                              data-label="HOA Amenities"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7179"
                                    value="7179"
                                    data-value="AA1696"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Barbecue"
                                  />
                                  <label for="feature7179">Barbecue</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7180"
                                    value="7180"
                                    data-value="AA89668"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Billiard Room"
                                  />
                                  <label for="feature7180">Billiard Room</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7181"
                                    value="7181"
                                    data-value="AA89667"
                                    data-property="MLSFeaturesCondition"
                                    data-label="BoatDock"
                                  />
                                  <label for="feature7181">BoatDock</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7182"
                                    value="7182"
                                    data-value="AA1791"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Boathouse"
                                  />
                                  <label for="feature7182">Boathouse</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7183"
                                    value="7183"
                                    data-value="AA89729"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Bocce Court"
                                  />
                                  <label for="feature7183">Bocce Court</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7184"
                                    value="7184"
                                    data-value="AA6344"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Cable TV"
                                  />
                                  <label for="feature7184">Cable TV</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7185"
                                    value="7185"
                                    data-value="AA89683"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Call for Rules"
                                  />
                                  <label for="feature7185">
                                    Call for Rules
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7186"
                                    value="7186"
                                    data-value="AA2151"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Clubhouse"
                                  />
                                  <label for="feature7186">Clubhouse</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7187"
                                    value="7187"
                                    data-value="AA89721"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Controlled Access"
                                  />
                                  <label for="feature7187">
                                    Controlled Access
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7188"
                                    value="7188"
                                    data-value="AA89644"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dog Park"
                                  />
                                  <label for="feature7188">Dog Park</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7189"
                                    value="7189"
                                    data-value="AA89813"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dues Paid Annually"
                                  />
                                  <label for="feature7189">
                                    Dues Paid Annually
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7190"
                                    value="7190"
                                    data-value="AA89807"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dues Paid Monthly"
                                  />
                                  <label for="feature7190">
                                    Dues Paid Monthly
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7191"
                                    value="7191"
                                    data-value="AA89816"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dues Paid Quarterly"
                                  />
                                  <label for="feature7191">
                                    Dues Paid Quarterly
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7192"
                                    value="7192"
                                    data-value="AA89810"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dues Paid Semi-Annually"
                                  />
                                  <label for="feature7192">
                                    Dues Paid Semi-Annually
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7193"
                                    value="7193"
                                    data-value="AA1728"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Electricity"
                                  />
                                  <label for="feature7193">Electricity</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7194"
                                    value="7194"
                                    data-value="AA89760"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Fire Pit"
                                  />
                                  <label for="feature7194">Fire Pit</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7195"
                                    value="7195"
                                    data-value="AA89684"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Fitness Center"
                                  />
                                  <label for="feature7195">
                                    Fitness Center
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7196"
                                    value="7196"
                                    data-value="AA89740"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Game Room"
                                  />
                                  <label for="feature7196">Game Room</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7197"
                                    value="7197"
                                    data-value="AA1729"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gas"
                                  />
                                  <label for="feature7197">Gas</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7198"
                                    value="7198"
                                    data-value="AA89734"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Golf Course"
                                  />
                                  <label for="feature7198">Golf Course</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7199"
                                    value="7199"
                                    data-value="AA1718"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Guard"
                                  />
                                  <label for="feature7199">Guard</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7200"
                                    value="7200"
                                    data-value="AA89758"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Horse Trails"
                                  />
                                  <label for="feature7200">Horse Trails</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7201"
                                    value="7201"
                                    data-value="AA89713"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Hot Water"
                                  />
                                  <label for="feature7201">Hot Water</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7202"
                                    value="7202"
                                    data-value="AA1710"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Insurance"
                                  />
                                  <label for="feature7202">Insurance</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7203"
                                    value="7203"
                                    data-value="AA89645"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Jogging Path"
                                  />
                                  <label for="feature7203">Jogging Path</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7204"
                                    value="7204"
                                    data-value="AA1798"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Kennel"
                                  />
                                  <label for="feature7204">Kennel</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7205"
                                    value="7205"
                                    data-value="AA89735"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Lake or Pond"
                                  />
                                  <label for="feature7205">Lake or Pond</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7206"
                                    value="7206"
                                    data-value="AA89794"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Maid Service"
                                  />
                                  <label for="feature7206" data-uw-rm-mod="">
                                    Maid Service
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7207"
                                    value="7207"
                                    data-value="AA89685"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Maintenance Front Yard"
                                  />
                                  <label for="feature7207">
                                    Maintenance Front Yard
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7208"
                                    value="7208"
                                    data-value="AA5075"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Maintenance Grounds"
                                  />
                                  <label for="feature7208">
                                    Maintenance Grounds
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7209"
                                    value="7209"
                                    data-value="AA2159"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Management"
                                  />
                                  <label for="feature7209">Management</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7210"
                                    value="7210"
                                    data-value="AA89670"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Meeting/Banquet/Party Room"
                                  />
                                  <label for="feature7210">
                                    Meeting/Banquet
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7211"
                                    value="7211"
                                    data-value="AA89669"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Meeting Room"
                                  />
                                  <label for="feature7211">Meeting Room</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7212"
                                    value="7212"
                                    data-value="AA89748"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Other Courts"
                                  />
                                  <label for="feature7212">Other Courts</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7213"
                                    value="7213"
                                    data-value="AA89646"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Outdoor Cooking Area"
                                  />
                                  <label for="feature7213">
                                    Outdoor Cooking Area
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7214"
                                    value="7214"
                                    data-value="AA89761"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Paddle Tennis"
                                  />
                                  <label for="feature7214">Paddle Tennis</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7215"
                                    value="7215"
                                    data-value="AA2950"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Park"
                                  />
                                  <label for="feature7215">Park</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7216"
                                    value="7216"
                                    data-value="AA89722"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pet Restrictions"
                                  />
                                  <label for="feature7216">
                                    Pet Restrictions
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7217"
                                    value="7217"
                                    data-value="AA89686"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pets Allowed"
                                  />
                                  <label for="feature7217">Pets Allowed</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7218"
                                    value="7218"
                                    data-value="AA89795"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pets Not Allowed"
                                  />
                                  <label for="feature7218">
                                    Pets Not Allowed
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7219"
                                    value="7219"
                                    data-value="AA89629"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Picnic Area"
                                  />
                                  <label for="feature7219">Picnic Area</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7220"
                                    value="7220"
                                    data-value="AA1764"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pier"
                                  />
                                  <label for="feature7220">Pier</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7221"
                                    value="7221"
                                    data-value="AA1688"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Playground"
                                  />
                                  <label for="feature7221">Playground</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7222"
                                    value="7222"
                                    data-value="AA1677"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pool"
                                  />
                                  <label for="feature7222">Pool</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7223"
                                    value="7223"
                                    data-value="AA2176"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Racquetball"
                                  />
                                  <label for="feature7223">Racquetball</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7224"
                                    value="7224"
                                    data-value="AA89723"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Recreation Room"
                                  />
                                  <label for="feature7224">
                                    Recreation Room
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7225"
                                    value="7225"
                                    data-value="AA89759"
                                    data-property="MLSFeaturesCondition"
                                    data-label="RV Parking"
                                  />
                                  <label for="feature7225">RV Parking</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7226"
                                    value="7226"
                                    data-value="AA1721"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Sauna"
                                  />
                                  <label for="feature7226">Sauna</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7227"
                                    value="7227"
                                    data-value="AA1700"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Security"
                                  />
                                  <label for="feature7227">Security</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7228"
                                    value="7228"
                                    data-value="AA89630"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Spa Hot/Tub"
                                  />
                                  <label for="feature7228">Spa Hot/Tub</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7229"
                                    value="7229"
                                    data-value="AA89643"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Sport Court"
                                  />
                                  <label for="feature7229">Sport Court</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7230"
                                    value="7230"
                                    data-value="AA2158"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Storage"
                                  />
                                  <label for="feature7230">Storage</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7231"
                                    value="7231"
                                    data-value="AA89647"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Tennis Court(s)"
                                  />
                                  <label for="feature7231">
                                    Tennis Court(s)
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7232"
                                    value="7232"
                                    data-value="AA89631"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Trails"
                                  />
                                  <label for="feature7232">Trails</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7233"
                                    value="7233"
                                    data-value="AA1712"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Trash"
                                  />
                                  <label for="feature7233">Trash</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7234"
                                    value="7234"
                                    data-value="AA1730"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Utilities"
                                  />
                                  <label for="feature7234">Utilities</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7235"
                                    value="7235"
                                    data-value="AA1732"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Water"
                                  />
                                  <label for="feature7235">Water</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Styles</label>
                            <Row
                              id="featureGroup94"
                              data-id="94"
                              data-selectiontype="0"
                              data-label="Styles"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7236"
                                    value="7236"
                                    data-value="Bungalow"
                                    data-property="MLSStyle"
                                    data-label="Bungalow"
                                  />
                                  <label for="feature7236">Bungalow</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7237"
                                    value="7237"
                                    data-value="Cabin"
                                    data-property="MLSStyle"
                                    data-label="Cabin"
                                  />
                                  <label for="feature7237">Cabin</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7238"
                                    value="7238"
                                    data-value="Cape Cod"
                                    data-property="MLSStyle"
                                    data-label="Cape Cod"
                                  />
                                  <label for="feature7238">Cape Cod</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7239"
                                    value="7239"
                                    data-value="Colonial"
                                    data-property="MLSStyle"
                                    data-label="Colonial"
                                  />
                                  <label for="feature7239">Colonial</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7240"
                                    value="7240"
                                    data-value="Contemporary"
                                    data-property="MLSStyle"
                                    data-label="Contemporary"
                                  />
                                  <label for="feature7240">Contemporary</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7241"
                                    value="7241"
                                    data-value="Cottage"
                                    data-property="MLSStyle"
                                    data-label="Cottage"
                                  />
                                  <label for="feature7241">Cottage</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7242"
                                    value="7242"
                                    data-value="Craftsman"
                                    data-property="MLSStyle"
                                    data-label="Craftsman"
                                  />
                                  <label for="feature7242">Craftsman</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7243"
                                    value="7243"
                                    data-value="Custom"
                                    data-property="MLSStyle"
                                    data-label="Custom"
                                  />
                                  <label for="feature7243">Custom</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7244"
                                    value="7244"
                                    data-value="Dock"
                                    data-property="MLSStyle"
                                    data-label="Dock"
                                  />
                                  <label for="feature7244">Dock</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7245"
                                    value="7245"
                                    data-value="Duplex"
                                    data-property="MLSStyle"
                                    data-label="Duplex"
                                  />
                                  <label for="feature7245">Duplex</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7246"
                                    value="7246"
                                    data-value="English"
                                    data-property="MLSStyle"
                                    data-label="English"
                                  />
                                  <label for="feature7246">English</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7247"
                                    value="7247"
                                    data-value="Flex"
                                    data-property="MLSStyle"
                                    data-label="Flex"
                                  />
                                  <label for="feature7247">Flex</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7248"
                                    value="7248"
                                    data-value="French"
                                    data-property="MLSStyle"
                                    data-label="French"
                                  />
                                  <label for="feature7248">French</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7249"
                                    value="7249"
                                    data-value="Georgian"
                                    data-property="MLSStyle"
                                    data-label="Georgian"
                                  />
                                  <label for="feature7249">Georgian</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7250"
                                    value="7250"
                                    data-value="Hotel/Motel"
                                    data-property="MLSStyle"
                                    data-label="Hotel/Motel"
                                  />
                                  <label for="feature7250">Hotel/Motel</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7251"
                                    value="7251"
                                    data-value="House"
                                    data-property="MLSStyle"
                                    data-label="House"
                                  />
                                  <label for="feature7251">House</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7252"
                                    value="7252"
                                    data-value="Industrial"
                                    data-property="MLSStyle"
                                    data-label="Industrial"
                                  />
                                  <label for="feature7252">Industrial</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7253"
                                    value="7253"
                                    data-value="Loft"
                                    data-property="MLSStyle"
                                    data-label="Loft"
                                  />
                                  <label for="feature7253">Loft</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7254"
                                    value="7254"
                                    data-value="Log Home"
                                    data-property="MLSStyle"
                                    data-label="Log Home"
                                  />
                                  <label for="feature7254">Log Home</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7255"
                                    value="7255"
                                    data-value="Manufactured House"
                                    data-property="MLSStyle"
                                    data-label="Manufactured House"
                                  />
                                  <label for="feature7255">
                                    Manufactured House
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7256"
                                    value="7256"
                                    data-value="Mediterranean"
                                    data-property="MLSStyle"
                                    data-label="Mediterranean"
                                  />
                                  <label for="feature7256">Mediterranean</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7257"
                                    value="7257"
                                    data-value="Mid-Century Modern"
                                    data-property="MLSStyle"
                                    data-label="Mid-Century Modern"
                                  />
                                  <label for="feature7257">
                                    Mid-Century Modern
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7258"
                                    value="7258"
                                    data-value="Mixed Use"
                                    data-property="MLSStyle"
                                    data-label="Mixed Use"
                                  />
                                  <label for="feature7258">Mixed Use</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7259"
                                    value="7259"
                                    data-value="Mobile Home"
                                    data-property="MLSStyle"
                                    data-label="Mobile Home"
                                  />
                                  <label for="feature7259">Mobile Home</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7260"
                                    value="7260"
                                    data-value="Modern"
                                    data-property="MLSStyle"
                                    data-label="Modern"
                                  />
                                  <label for="feature7260">Modern</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7261"
                                    value="7261"
                                    data-value="Multi Family"
                                    data-property="MLSStyle"
                                    data-label="Multi Family"
                                  />
                                  <label for="feature7261">Multi Family</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7262"
                                    value="7262"
                                    data-value="Patio Home"
                                    data-property="MLSStyle"
                                    data-label="Patio Home"
                                  />
                                  <label for="feature7262">Patio Home</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7263"
                                    value="7263"
                                    data-value="Penthouse"
                                    data-property="MLSStyle"
                                    data-label="Penthouse"
                                  />
                                  <label for="feature7263">Penthouse</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7264"
                                    value="7264"
                                    data-value="Quadruplex"
                                    data-property="MLSStyle"
                                    data-label="Quadruplex"
                                  />
                                  <label for="feature7264">Quadruplex</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7265"
                                    value="7265"
                                    data-value="Ranch"
                                    data-property="MLSStyle"
                                    data-label="Ranch"
                                  />
                                  <label for="feature7265">Ranch</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7266"
                                    value="7266"
                                    data-value="Retail"
                                    data-property="MLSStyle"
                                    data-label="Retail"
                                  />
                                  <label for="feature7266">Retail</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7267"
                                    value="7267"
                                    data-value="Spanish"
                                    data-property="MLSStyle"
                                    data-label="Spanish"
                                  />
                                  <label for="feature7267">Spanish</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7268"
                                    value="7268"
                                    data-value="Townhouse"
                                    data-property="MLSStyle"
                                    data-label="Townhouse"
                                  />
                                  <label for="feature7268">Townhouse</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7269"
                                    value="7269"
                                    data-value="Traditional"
                                    data-property="MLSStyle"
                                    data-label="Traditional"
                                  />
                                  <label for="feature7269">Traditional</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7270"
                                    value="7270"
                                    data-value="Triplex"
                                    data-property="MLSStyle"
                                    data-label="Triplex"
                                  />
                                  <label for="feature7270">Triplex</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7271"
                                    value="7271"
                                    data-value="Tudor"
                                    data-property="MLSStyle"
                                    data-label="Tudor"
                                  />
                                  <label for="feature7271">Tudor</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7272"
                                    value="7272"
                                    data-value="Victorian"
                                    data-property="MLSStyle"
                                    data-label="Victorian"
                                  />
                                  <label for="feature7272">Victorian</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7273"
                                    value="7273"
                                    data-value="Warehouse"
                                    data-property="MLSStyle"
                                    data-label="Warehouse"
                                  />
                                  <label for="feature7273">Warehouse</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Pool</label>
                            <Row
                              id="featureGroup107"
                              data-id="107"
                              data-selectiontype="0"
                              data-label="Pool"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7757"
                                    value="7757"
                                    data-value="PO89789"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Above Ground"
                                  />
                                  <label for="feature7757">Above Ground</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7758"
                                    value="7758"
                                    data-value="PO1474"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Association"
                                  />
                                  <label for="feature7758">Association</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7759"
                                    value="7759"
                                    data-value="PO89764"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Black Bottom"
                                  />
                                  <label for="feature7759">Black Bottom</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7760"
                                    value="7760"
                                    data-value="PO2005"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Community"
                                  />
                                  <label for="feature7760">Community</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7761"
                                    value="7761"
                                    data-value="PO89757"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Diving Board"
                                  />
                                  <label for="feature7761">Diving Board</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7762"
                                    value="7762"
                                    data-value="PO89705"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Electric Heat"
                                  />
                                  <label for="feature7762">Electric Heat</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7763"
                                    value="7763"
                                    data-value="PO154"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Exercise Pool"
                                  />
                                  <label for="feature7763">Exercise Pool</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7764"
                                    value="7764"
                                    data-value="PO167"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Fenced"
                                  />
                                  <label for="feature7764">Fenced</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7765"
                                    value="7765"
                                    data-value="PO90"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Fiberglass"
                                  />
                                  <label for="feature7765">Fiberglass</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7766"
                                    value="7766"
                                    data-value="PO159"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Filtered"
                                  />
                                  <label for="feature7766">Filtered</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7767"
                                    value="7767"
                                    data-value="PO89651"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gas Heat"
                                  />
                                  <label for="feature7767">Gas Heat</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7768"
                                    value="7768"
                                    data-value="PO67"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gunite"
                                  />
                                  <label for="feature7768">Gunite</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7769"
                                    value="7769"
                                    data-value="PO137"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Heated"
                                  />
                                  <label for="feature7769">Heated</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7770"
                                    value="7770"
                                    data-value="PO1942"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Heated with Propane"
                                  />
                                  <label for="feature7770">
                                    Heated with Propane
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7771"
                                    value="7771"
                                    data-value="PO89707"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Heated Passively"
                                  />
                                  <label for="feature7771">
                                    Heated Passively
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7772"
                                    value="7772"
                                    data-value="PO91"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Indoor"
                                  />
                                  <label for="feature7772">Indoor</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7773"
                                    value="7773"
                                    data-value="PO2168"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Infinity"
                                  />
                                  <label for="feature7773">Infinity</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7774"
                                    value="7774"
                                    data-value="PO3455"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Inground"
                                  />
                                  <label for="feature7774">Inground</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7775"
                                    value="7775"
                                    data-value="PO494"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Lap"
                                  />
                                  <label for="feature7775">Lap</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7776"
                                    value="7776"
                                    data-value="PO1947"
                                    data-property="MLSFeaturesCondition"
                                    data-label="None"
                                  />
                                  <label for="feature7776">None</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7777"
                                    value="7777"
                                    data-value="PO89796"
                                    data-property="MLSFeaturesCondition"
                                    data-label="No Permits"
                                  />
                                  <label for="feature7777">No Permits</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7778"
                                    value="7778"
                                    data-value="PO1937"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pebble"
                                  />
                                  <label for="feature7778">Pebble</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7779"
                                    value="7779"
                                    data-value="PO156"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Permits"
                                  />
                                  <label for="feature7779">Permits</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7780"
                                    value="7780"
                                    data-value="PO89776"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pool Cover"
                                  />
                                  <label for="feature7780">Pool Cover</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7781"
                                    value="7781"
                                    data-value="PO1372"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Private"
                                  />
                                  <label for="feature7781">Private</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7782"
                                    value="7782"
                                    data-value="PO89784"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Propane Heat"
                                  />
                                  <label for="feature7782">Propane Heat</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7783"
                                    value="7783"
                                    data-value="PO89808"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Roof Top"
                                  />
                                  <label for="feature7783">Roof Top</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7784"
                                    value="7784"
                                    data-value="PO1938"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Saltwater"
                                  />
                                  <label for="feature7784">Saltwater</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7785"
                                    value="7785"
                                    data-value="PO89769"
                                    data-property="MLSFeaturesCondition"
                                    data-label="SolarHeat"
                                  />
                                  <label for="feature7785">SolarHeat</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7786"
                                    value="7786"
                                    data-value="PO1948"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Tile"
                                  />
                                  <label for="feature7786">Tile</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7787"
                                    value="7787"
                                    data-value="PO1949"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Vinyl"
                                  />
                                  <label for="feature7787">Vinyl</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7788"
                                    value="7788"
                                    data-value="PO1945"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Waterfall"
                                  />
                                  <label for="feature7788">Waterfall</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>View</label>
                            <Row
                              id="featureGroup108"
                              data-id="108"
                              data-selectiontype="0"
                              data-label="View"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7303"
                                    value="7303"
                                    data-value="V89768"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Back Bay"
                                  />
                                  <label for="feature7303">Back Bay</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7304"
                                    value="7304"
                                    data-value="V13"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Bay"
                                  />
                                  <label for="feature7304">Bay</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7305"
                                    value="7305"
                                    data-value="V152"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Bluff"
                                  />
                                  <label for="feature7305">Bluff</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7306"
                                    value="7306"
                                    data-value="V56"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Bridge(s)"
                                  />
                                  <label for="feature7306">Bridge(s)</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7307"
                                    value="7307"
                                    data-value="V589"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Canal"
                                  />
                                  <label for="feature7307">Canal</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7308"
                                    value="7308"
                                    data-value="V59"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Canyon"
                                  />
                                  <label for="feature7308">Canyon</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7309"
                                    value="7309"
                                    data-value="V587"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Catalina"
                                  />
                                  <label for="feature7309">Catalina</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7310"
                                    value="7310"
                                    data-value="V89691"
                                    data-property="MLSFeaturesCondition"
                                    data-label="City Lights"
                                  />
                                  <label for="feature7310">City Lights</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7311"
                                    value="7311"
                                    data-value="V561"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Coastline"
                                  />
                                  <label for="feature7311">Coastline</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7312"
                                    value="7312"
                                    data-value="V301"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Courtyard"
                                  />
                                  <label for="feature7312">Courtyard</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7313"
                                    value="7313"
                                    data-value="V89780"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Creek/Stream"
                                  />
                                  <label for="feature7313">Creek/Stream</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7314"
                                    value="7314"
                                    data-value="V588"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Desert"
                                  />
                                  <label for="feature7314">Desert</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7315"
                                    value="7315"
                                    data-value="V89736"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Golf Course"
                                  />
                                  <label for="feature7315">Golf Course</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7316"
                                    value="7316"
                                    data-value="V566"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Harbor"
                                  />
                                  <label for="feature7316">Harbor</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7317"
                                    value="7317"
                                    data-value="V53"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Hills"
                                  />
                                  <label for="feature7317">Hills</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7318"
                                    value="7318"
                                    data-value="V61"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Lake"
                                  />
                                  <label for="feature7318">Lake</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7319"
                                    value="7319"
                                    data-value="V304"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Landmark"
                                  />
                                  <label for="feature7319">Landmark</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7320"
                                    value="7320"
                                    data-value="V72"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Marina"
                                  />
                                  <label for="feature7320">Marina</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7321"
                                    value="7321"
                                    data-value="V217"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Meadow"
                                  />
                                  <label for="feature7321">Meadow</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7322"
                                    value="7322"
                                    data-value="V41"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Mountain(s)"
                                  />
                                  <label for="feature7322">Mountain(s)</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7323"
                                    value="7323"
                                    data-value="V269"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Neighborhood"
                                  />
                                  <label for="feature7323">Neighborhood</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7324"
                                    value="7324"
                                    data-value="V1"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Ocean"
                                  />
                                  <label for="feature7324">Ocean</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7325"
                                    value="7325"
                                    data-value="V73"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Orchard/Grove"
                                  />
                                  <label for="feature7325">Orchard/Grove</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7326"
                                    value="7326"
                                    data-value="V2"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Panoramic"
                                  />
                                  <label for="feature7326">Panoramic</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7327"
                                    value="7327"
                                    data-value="V89621"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Park/Greenbelt"
                                  />
                                  <label for="feature7327">
                                    Park/Greenbelt
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7328"
                                    value="7328"
                                    data-value="V54"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pasture"
                                  />
                                  <label for="feature7328">Pasture</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7329"
                                    value="7329"
                                    data-value="V89652"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Peek-A-Boo"
                                  />
                                  <label for="feature7329">Peek-A-Boo</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7330"
                                    value="7330"
                                    data-value="V564"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pier"
                                  />
                                  <label for="feature7330">Pier</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7331"
                                    value="7331"
                                    data-value="V309"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pond"
                                  />
                                  <label for="feature7331">Pond</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7332"
                                    value="7332"
                                    data-value="V272"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pool"
                                  />
                                  <label for="feature7332">Pool</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7333"
                                    value="7333"
                                    data-value="V342"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Reservoir"
                                  />
                                  <label for="feature7333">Reservoir</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7334"
                                    value="7334"
                                    data-value="V291"
                                    data-property="MLSFeaturesCondition"
                                    data-label="River"
                                  />
                                  <label for="feature7334">River</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7335"
                                    value="7335"
                                    data-value="V319"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Rocks"
                                  />
                                  <label for="feature7335">Rocks</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7336"
                                    value="7336"
                                    data-value="V89671"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Trees/Woods"
                                  />
                                  <label for="feature7336">Trees/Woods</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7337"
                                    value="7337"
                                    data-value="V42"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Valley"
                                  />
                                  <label for="feature7337">Valley</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7338"
                                    value="7338"
                                    data-value="V55"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Vineyard"
                                  />
                                  <label for="feature7338">Vineyard</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7339"
                                    value="7339"
                                    data-value="V45"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Water"
                                  />
                                  <label for="feature7339">Water</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Land Lease</label>
                            <Row
                              id="featureGroup120"
                              data-id="120"
                              data-selectiontype="0"
                              data-label="Land Lease"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature2021"
                                    value="2021"
                                    data-value="LP2021"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Yes"
                                  />
                                  <label for="feature2021">Yes</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature2022"
                                    value="2022"
                                    data-value="LP2022"
                                    data-property="MLSFeaturesCondition"
                                    data-label="No"
                                  />
                                  <label for="feature2022">No</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Specialty Searches</label>
                            <Row
                              id="featureGroup151"
                              data-id="151"
                              data-selectiontype="0"
                              data-label="Specialty Searches"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature2428"
                                    value="2428"
                                    data-value="SH1204"
                                    data-property="MLSFeaturesCondition"
                                    data-label="BMR"
                                  />
                                  <label for="feature2428">BMR</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature2429"
                                    value="2429"
                                    data-value="SH1203"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Eichler Homes"
                                  />
                                  <label for="feature2429">Eichler Homes</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature2430"
                                    value="2430"
                                    data-value="SH1201"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Hobby Vineyards"
                                  />
                                  <label for="feature2430">
                                    Hobby Vineyards
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature2431"
                                    value="2431"
                                    data-value="SH1202"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Modern Homes"
                                  />
                                  <label for="feature2431">Modern Homes</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Common Walls</label>
                            <Row
                              id="featureGroup155"
                              data-id="155"
                              data-selectiontype="0"
                              data-label="Common Walls"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7341"
                                    value="7341"
                                    data-value="CW89622"
                                    data-property="MLSFeaturesCondition"
                                    data-label="1 Common Wall"
                                  />
                                  <label for="feature7341">1 Common Wall</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7342"
                                    value="7342"
                                    data-value="CW89653"
                                    data-property="MLSFeaturesCondition"
                                    data-label="2+ Common Walls"
                                  />
                                  <label for="feature7342">
                                    2+ Common Walls
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7340"
                                    value="7340"
                                    data-value="CW89648"
                                    data-property="MLSFeaturesCondition"
                                    data-label="End Unit"
                                  />
                                  <label for="feature7340">End Unit</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7343"
                                    value="7343"
                                    data-value="CW89632"
                                    data-property="MLSFeaturesCondition"
                                    data-label="No Common Walls"
                                  />
                                  <label for="feature7343">
                                    No Common Walls
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7344"
                                    value="7344"
                                    data-value="CW89694"
                                    data-property="MLSFeaturesCondition"
                                    data-label="No One Above"
                                  />
                                  <label for="feature7344">No One Above</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7345"
                                    value="7345"
                                    data-value="CW89695"
                                    data-property="MLSFeaturesCondition"
                                    data-label="No One Below"
                                  />
                                  <label for="feature7345">No One Below</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Property Attached</label>
                            <Row
                              id="featureGroup156"
                              data-id="156"
                              data-selectiontype="0"
                              data-label="Property Attached"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature2455"
                                    value="2455"
                                    data-value="AH2382"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Yes"
                                  />
                                  <label for="feature2455">Yes</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature2454"
                                    value="2454"
                                    data-value="AH2383"
                                    data-property="MLSFeaturesCondition"
                                    data-label="No"
                                  />
                                  <label for="feature2454">No</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Main Floor Bedroom</label>
                            <Row
                              id="featureGroup157"
                              data-id="157"
                              data-selectiontype="0"
                              data-label="Main Floor Bedroom"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature2501"
                                    value="2501"
                                    data-value="BE2411"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Yes"
                                  />
                                  <label for="feature2501">Yes</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature2500"
                                    value="2500"
                                    data-value="BE2412"
                                    data-property="MLSFeaturesCondition"
                                    data-label="No"
                                  />
                                  <label for="feature2500">No</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label data-uw-rm-mod="">
                              Main Floor Master Bedroom
                            </label>
                            <Row
                              id="featureGroup158"
                              data-id="158"
                              data-selectiontype="0"
                              data-label="Main Floor Master Bedroom"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature2503"
                                    value="2503"
                                    data-value="MB2413"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Yes"
                                  />
                                  <label for="feature2503">Yes</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature2502"
                                    value="2502"
                                    data-value="MB2414"
                                    data-property="MLSFeaturesCondition"
                                    data-label="No"
                                  />
                                  <label for="feature2502">No</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Waterfront Features</label>
                            <Row
                              id="featureGroup221"
                              data-id="221"
                              data-selectiontype="0"
                              data-label="Waterfront Features"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7346"
                                    value="7346"
                                    data-value="W89738"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Across the Road from Lake/Ocean"
                                  />
                                  <label for="feature7346">
                                    Across Lake/Ocean
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7347"
                                    value="7347"
                                    data-value="W89774"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Across the Road Water Frontage"
                                  />
                                  <label for="feature7347">
                                    Across Water Frontage
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7348"
                                    value="7348"
                                    data-value="W89750"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Bay Front"
                                  />
                                  <label for="feature7348">Bay Front</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7349"
                                    value="7349"
                                    data-value="W89745"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Beach Access"
                                  />
                                  <label for="feature7349">Beach Access</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7350"
                                    value="7350"
                                    data-value="W1583"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Beach Front"
                                  />
                                  <label for="feature7350">Beach Front</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7351"
                                    value="7351"
                                    data-value="W89801"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Boat Ramp/Lift Access"
                                  />
                                  <label for="feature7351">
                                    Boat Ramp/Lift Access
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7352"
                                    value="7352"
                                    data-value="W89751"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Canal Front"
                                  />
                                  <label for="feature7352">Canal Front</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7353"
                                    value="7353"
                                    data-value="W2632"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Creek"
                                  />
                                  <label for="feature7353">Creek</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7354"
                                    value="7354"
                                    data-value="W89752"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dock Access"
                                  />
                                  <label for="feature7354">Dock Access</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7355"
                                    value="7355"
                                    data-value="W3136"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Lagoon"
                                  />
                                  <label for="feature7355">Lagoon</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7356"
                                    value="7356"
                                    data-value="W2662"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Lake"
                                  />
                                  <label for="feature7356">Lake</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7357"
                                    value="7357"
                                    data-value="W89770"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Lake Front"
                                  />
                                  <label for="feature7357">Lake Front</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7358"
                                    value="7358"
                                    data-value="W89749"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Lake Privileges"
                                  />
                                  <label for="feature7358">
                                    Lake Privileges
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7359"
                                    value="7359"
                                    data-value="W89753"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Navigable Water"
                                  />
                                  <label for="feature7359">
                                    Navigable Water
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7360"
                                    value="7360"
                                    data-value="W89746"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Ocean Access"
                                  />
                                  <label for="feature7360">Ocean Access</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7361"
                                    value="7361"
                                    data-value="W1582"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Ocean Front"
                                  />
                                  <label for="feature7361">Ocean Front</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7362"
                                    value="7362"
                                    data-value="W89739"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Ocean Side of Freeway"
                                  />
                                  <label for="feature7362">
                                    Ocean Side of Freeway
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7363"
                                    value="7363"
                                    data-value="W89754"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Ocean Side of Highway"
                                  />
                                  <label for="feature7363">
                                    Ocean Side of Highway
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7364"
                                    value="7364"
                                    data-value="W3134"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pond"
                                  />
                                  <label for="feature7364">Pond</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7365"
                                    value="7365"
                                    data-value="W89798"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Reservoir in Community"
                                  />
                                  <label for="feature7365">
                                    Reservoir in Community
                                  </label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7366"
                                    value="7366"
                                    data-value="W89799"
                                    data-property="MLSFeaturesCondition"
                                    data-label="River Front"
                                  />
                                  <label for="feature7366">River Front</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7367"
                                    value="7367"
                                    data-value="W3137"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Seawall"
                                  />
                                  <label for="feature7367">Seawall</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7368"
                                    value="7368"
                                    data-value="W3135"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Stream"
                                  />
                                  <label for="feature7368">Stream</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Other Structures</label>
                            <Row
                              id="featureGroup222"
                              data-id="222"
                              data-selectiontype="0"
                              data-label="Other Structures"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7369"
                                    value="7369"
                                    data-value="SR89806"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Airplane Hangar"
                                  />
                                  <label for="feature7369">
                                    Airplane Hangar
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7370"
                                    value="7370"
                                    data-value="SR3151"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Aviary"
                                  />
                                  <label for="feature7370">Aviary</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7371"
                                    value="7371"
                                    data-value="SR89778"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Barn(s)"
                                  />
                                  <label for="feature7371">Barn(s)</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7372"
                                    value="7372"
                                    data-value="SR89771"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Boat House"
                                  />
                                  <label for="feature7372">Boat House</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7373"
                                    value="7373"
                                    data-value="SR89690"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Cabana"
                                  />
                                  <label for="feature7373">Cabana</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7374"
                                    value="7374"
                                    data-value="SR89766"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Corral(s)"
                                  />
                                  <label for="feature7374">Corral(s)</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7375"
                                    value="7375"
                                    data-value="SR2893"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gazebo"
                                  />
                                  <label for="feature7375">Gazebo</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7376"
                                    value="7376"
                                    data-value="SR2901"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Greenhouse"
                                  />
                                  <label for="feature7376">Greenhouse</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7377"
                                    value="7377"
                                    data-value="SR2915"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Guest House"
                                  />
                                  <label for="feature7377">Guest House</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7378"
                                    value="7378"
                                    data-value="SR2846"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Outbuilding"
                                  />
                                  <label for="feature7378">Outbuilding</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7379"
                                    value="7379"
                                    data-value="SR89779"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Sauna Private"
                                  />
                                  <label for="feature7379">Sauna Private</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7380"
                                    value="7380"
                                    data-value="SR89733"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Second Garage"
                                  />
                                  <label for="feature7380">Second Garage</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7381"
                                    value="7381"
                                    data-value="SR89672"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Shed(s)"
                                  />
                                  <label for="feature7381">Shed(s)</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7382"
                                    value="7382"
                                    data-value="SR89790"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Stable(s)"
                                  />
                                  <label for="feature7382">Stable(s)</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7383"
                                    value="7383"
                                    data-value="SR3159"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Storage"
                                  />
                                  <label for="feature7383">Storage</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7384"
                                    value="7384"
                                    data-value="SR89743"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Tennis Court(s)"
                                  />
                                  <label for="feature7384">
                                    Tennis Court(s)
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7385"
                                    value="7385"
                                    data-value="SR89775"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Two On A Lot"
                                  />
                                  <label for="feature7385">Two On A Lot</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7386"
                                    value="7386"
                                    data-value="SR2483"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Workshop"
                                  />
                                  <label for="feature7386">Workshop</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Units in Community</label>
                            <Row
                              id="featureGroup252"
                              data-id="252"
                              data-selectiontype="0"
                              data-label="Units in Community"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature3926"
                                    value="3926"
                                    data-value="TU3447"
                                    data-property="MLSFeaturesCondition"
                                    data-label="2 Units"
                                  />
                                  <label for="feature3926">2 Units</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature3927"
                                    value="3927"
                                    data-value="TU3448"
                                    data-property="MLSFeaturesCondition"
                                    data-label="3 Units"
                                  />
                                  <label for="feature3927">3 Units</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature3928"
                                    value="3928"
                                    data-value="TU3449"
                                    data-property="MLSFeaturesCondition"
                                    data-label="4 Units"
                                  />
                                  <label for="feature3928">4 Units</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature3929"
                                    value="3929"
                                    data-value="TU3450"
                                    data-property="MLSFeaturesCondition"
                                    data-label="4+ Units"
                                  />
                                  <label for="feature3929">4+ Units</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Number of Units</label>
                            <Row
                              id="featureGroup290"
                              data-id="290"
                              data-selectiontype="0"
                              data-label="Number of Units"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature4564"
                                    value="4564"
                                    data-value="NU3969"
                                    data-property="MLSFeaturesCondition"
                                    data-label="1"
                                  />
                                  <label for="feature4564">1</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature4565"
                                    value="4565"
                                    data-value="NU3970"
                                    data-property="MLSFeaturesCondition"
                                    data-label="2"
                                  />
                                  <label for="feature4565">2</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature4566"
                                    value="4566"
                                    data-value="NU3971"
                                    data-property="MLSFeaturesCondition"
                                    data-label="3"
                                  />
                                  <label for="feature4566">3</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature4567"
                                    value="4567"
                                    data-value="NU3972"
                                    data-property="MLSFeaturesCondition"
                                    data-label="4"
                                  />
                                  <label for="feature4567">4</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature4568"
                                    value="4568"
                                    data-value="NU3973"
                                    data-property="MLSFeaturesCondition"
                                    data-label="5"
                                  />
                                  <label for="feature4568">5</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature4569"
                                    value="4569"
                                    data-value="NU3974"
                                    data-property="MLSFeaturesCondition"
                                    data-label="6"
                                  />
                                  <label for="feature4569">6</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature4570"
                                    value="4570"
                                    data-value="NU3975"
                                    data-property="MLSFeaturesCondition"
                                    data-label="7"
                                  />
                                  <label for="feature4570">7</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature4571"
                                    value="4571"
                                    data-value="NU3976"
                                    data-property="MLSFeaturesCondition"
                                    data-label="8"
                                  />
                                  <label for="feature4571">8</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature4572"
                                    value="4572"
                                    data-value="NU3977"
                                    data-property="MLSFeaturesCondition"
                                    data-label="9"
                                  />
                                  <label for="feature4572">9</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature4573"
                                    value="4573"
                                    data-value="NU3978"
                                    data-property="MLSFeaturesCondition"
                                    data-label="10+"
                                  />
                                  <label for="feature4573">10+</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Laundry</label>
                            <Row
                              id="featureGroup310"
                              data-id="310"
                              data-selectiontype="0"
                              data-label="Laundry"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7387"
                                    value="7387"
                                    data-value="LA89623"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Common Area"
                                  />
                                  <label for="feature7387">Common Area</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7388"
                                    value="7388"
                                    data-value="LA89654"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Electric Dryer Hookup"
                                  />
                                  <label for="feature7388">
                                    Electric Dryer Hookup
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7389"
                                    value="7389"
                                    data-value="LA89649"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gas Dryer Hookup"
                                  />
                                  <label for="feature7389">
                                    Gas Dryer Hookup
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7390"
                                    value="7390"
                                    data-value="LA89777"
                                    data-property="MLSFeaturesCondition"
                                    data-label="In Carport"
                                  />
                                  <label for="feature7390">In Carport</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7391"
                                    value="7391"
                                    data-value="LA89636"
                                    data-property="MLSFeaturesCondition"
                                    data-label="In Garage"
                                  />
                                  <label for="feature7391">In Garage</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7392"
                                    value="7392"
                                    data-value="LA89687"
                                    data-property="MLSFeaturesCondition"
                                    data-label="In Kitchen"
                                  />
                                  <label for="feature7392">In Kitchen</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7393"
                                    value="7393"
                                    data-value="LA4082"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Inside"
                                  />
                                  <label for="feature7393">Inside</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7394"
                                    value="7394"
                                    data-value="LA89762"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Laundry Chute"
                                  />
                                  <label for="feature7394">Laundry Chute</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7395"
                                    value="7395"
                                    data-value="LA89628"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Laundry Closet"
                                  />
                                  <label for="feature7395">
                                    Laundry Closet
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7396"
                                    value="7396"
                                    data-value="LA89633"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Laundry Room"
                                  />
                                  <label for="feature7396">Laundry Room</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7397"
                                    value="7397"
                                    data-value="LA4119"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Outside"
                                  />
                                  <label for="feature7397">Outside</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7398"
                                    value="7398"
                                    data-value="LA89781"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Propane Dryer Hookup"
                                  />
                                  <label for="feature7398">
                                    Propane Dryer Hookup
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7399"
                                    value="7399"
                                    data-value="LA4635"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Stacked"
                                  />
                                  <label for="feature7399">Stacked</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7400"
                                    value="7400"
                                    data-value="LA89650"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Upper Level"
                                  />
                                  <label for="feature7400">Upper Level</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7401"
                                    value="7401"
                                    data-value="LA89642"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Washer Hookup"
                                  />
                                  <label for="feature7401">Washer Hookup</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Appliances</label>
                            <Row
                              id="featureGroup311"
                              data-id="311"
                              data-selectiontype="0"
                              data-label="Appliances"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7402"
                                    value="7402"
                                    data-value="AM89677"
                                    data-property="MLSFeaturesCondition"
                                    data-label="6 Burner Stove"
                                  />
                                  <label for="feature7402">
                                    6 Burner Stove
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7403"
                                    value="7403"
                                    data-value="AM4086"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Barbecue"
                                  />
                                  <label for="feature7403">Barbecue</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7404"
                                    value="7404"
                                    data-value="AM89793"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Built-In"
                                  />
                                  <label for="feature7404">Built-In</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7405"
                                    value="7405"
                                    data-value="AM89655"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Built-In Range"
                                  />
                                  <label for="feature7405">
                                    Built-In Range
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7406"
                                    value="7406"
                                    data-value="AM89800"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Coal Water Heater"
                                  />
                                  <label for="feature7406">
                                    Coal Water Heater
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7407"
                                    value="7407"
                                    data-value="AM89656"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Convection Oven"
                                  />
                                  <label for="feature7407">
                                    Convection Oven
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7408"
                                    value="7408"
                                    data-value="AM4137"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Cooktop"
                                  />
                                  <label for="feature7408">Cooktop</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7409"
                                    value="7409"
                                    data-value="AM89725"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Counter Top"
                                  />
                                  <label for="feature7409">Counter Top</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7410"
                                    value="7410"
                                    data-value="AM4068"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dishwasher"
                                  />
                                  <label for="feature7410">Dishwasher</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7411"
                                    value="7411"
                                    data-value="AM4070"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Disposal"
                                  />
                                  <label for="feature7411">Disposal</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7412"
                                    value="7412"
                                    data-value="AM89657"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Double Oven"
                                  />
                                  <label for="feature7412">Double Oven</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7413"
                                    value="7413"
                                    data-value="AM89626"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dryer"
                                  />
                                  <label for="feature7413">Dryer</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7414"
                                    value="7414"
                                    data-value="AM89709"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Electric Cooking"
                                  />
                                  <label for="feature7414">
                                    Electric Cooking
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7415"
                                    value="7415"
                                    data-value="AM89719"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Electric Cooktop"
                                  />
                                  <label for="feature7415">
                                    Electric Cooktop
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7416"
                                    value="7416"
                                    data-value="AM89659"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Electric Oven"
                                  />
                                  <label for="feature7416">Electric Oven</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7417"
                                    value="7417"
                                    data-value="AM89624"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Electric Range"
                                  />
                                  <label for="feature7417">
                                    Electric Range
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7418"
                                    value="7418"
                                    data-value="AM89727"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Electric Water Heater"
                                  />
                                  <label for="feature7418">
                                    Electric Water Heater
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7419"
                                    value="7419"
                                    data-value="AM89688"
                                    data-property="MLSFeaturesCondition"
                                    data-label="ENERGY STAR Qualified Appliances"
                                  />
                                  <label for="feature7419">
                                    ES. Q. Appliances
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7420"
                                    value="7420"
                                    data-value="AM89658"
                                    data-property="MLSFeaturesCondition"
                                    data-label="ENERGY STAR Qualified Water Heater"
                                  />
                                  <label for="feature7420">
                                    ES. Q. Water Heater
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7421"
                                    value="7421"
                                    data-value="AM89718"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Exhaust Fan"
                                  />
                                  <label for="feature7421">Exhaust Fan</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7422"
                                    value="7422"
                                    data-value="AM89803"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Free Standing"
                                  />
                                  <label for="feature7422">Free Standing</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7423"
                                    value="7423"
                                    data-value="AM89679"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Free-Standing Range"
                                  />
                                  <label for="feature7423">
                                    Free-Standing Range
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7424"
                                    value="7424"
                                    data-value="AM4069"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Freezer"
                                  />
                                  <label for="feature7424">Freezer</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7425"
                                    value="7425"
                                    data-value="AM89701"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gas Cooking"
                                  />
                                  <label for="feature7425">Gas Cooking</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7426"
                                    value="7426"
                                    data-value="AM89637"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gas Cooktop"
                                  />
                                  <label for="feature7426">Gas Cooktop</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7427"
                                    value="7427"
                                    data-value="AM89674"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gas Oven"
                                  />
                                  <label for="feature7427">Gas Oven</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7428"
                                    value="7428"
                                    data-value="AM89625"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gas Range"
                                  />
                                  <label for="feature7428">Gas Range</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7429"
                                    value="7429"
                                    data-value="AM89660"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gas Water Heater"
                                  />
                                  <label for="feature7429">
                                    Gas Water Heater
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7430"
                                    value="7430"
                                    data-value="AM89680"
                                    data-property="MLSFeaturesCondition"
                                    data-label="High Efficiency Water Heater"
                                  />
                                  <label for="feature7430">
                                    HF Water Heater
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7431"
                                    value="7431"
                                    data-value="AM89681"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Hot Water Circulator"
                                  />
                                  <label for="feature7431">
                                    Hot Water Circulator
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7432"
                                    value="7432"
                                    data-value="AM89700"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Ice Maker"
                                  />
                                  <label for="feature7432">Ice Maker</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7433"
                                    value="7433"
                                    data-value="AM89710"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Indoor Grill"
                                  />
                                  <label for="feature7433">Indoor Grill</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7434"
                                    value="7434"
                                    data-value="AM4074"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Microwave"
                                  />
                                  <label for="feature7434">Microwave</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7435"
                                    value="7435"
                                    data-value="AM89785"
                                    data-property="MLSFeaturesCondition"
                                    data-label="No Hot Water"
                                  />
                                  <label for="feature7435">No Hot Water</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7436"
                                    value="7436"
                                    data-value="AM4100"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Oven"
                                  />
                                  <label for="feature7436">Oven</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7437"
                                    value="7437"
                                    data-value="AM89797"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Portable Dishwasher"
                                  />
                                  <label for="feature7437">
                                    Portable Dishwasher
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7438"
                                    value="7438"
                                    data-value="AM89804"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Propane Cooking"
                                  />
                                  <label for="feature7438">
                                    Propane Cooking
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7439"
                                    value="7439"
                                    data-value="AM89767"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Propane Cooktop"
                                  />
                                  <label for="feature7439">
                                    Propane Cooktop
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7440"
                                    value="7440"
                                    data-value="AM89728"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Propane Oven"
                                  />
                                  <label for="feature7440">Propane Oven</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7441"
                                    value="7441"
                                    data-value="AM89724"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Propane Range"
                                  />
                                  <label for="feature7441">Propane Range</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7442"
                                    value="7442"
                                    data-value="AM89782"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Propane Water Heater"
                                  />
                                  <label for="feature7442">
                                    Propane Water Heater
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7443"
                                    value="7443"
                                    data-value="AM4101"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Range"
                                  />
                                  <label for="feature7443">Range</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7444"
                                    value="7444"
                                    data-value="AM89661"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Range Hood"
                                  />
                                  <label for="feature7444">Range Hood</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7445"
                                    value="7445"
                                    data-value="AM4076"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Refrigerator"
                                  />
                                  <label for="feature7445">Refrigerator</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7446"
                                    value="7446"
                                    data-value="AM89662"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Self Cleaning Oven"
                                  />
                                  <label for="feature7446">
                                    Self Cleaning Oven
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7447"
                                    value="7447"
                                    data-value="AM89673"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Solar Hot Water"
                                  />
                                  <label for="feature7447">
                                    Solar Hot Water
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7448"
                                    value="7448"
                                    data-value="AM89678"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Tankless Water Heater"
                                  />
                                  <label for="feature7448">
                                    Tankless Water Heater
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7449"
                                    value="7449"
                                    data-value="AM89663"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Trash Compactor"
                                  />
                                  <label for="feature7449">
                                    Trash Compactor
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7450"
                                    value="7450"
                                    data-value="AM89682"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Vented Exhaust Fan"
                                  />
                                  <label for="feature7450">
                                    Vented Exhaust Fan
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7451"
                                    value="7451"
                                    data-value="AM89755"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Warming Drawer"
                                  />
                                  <label for="feature7451">
                                    Warming Drawer
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7452"
                                    value="7452"
                                    data-value="AM89627"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Washer"
                                  />
                                  <label for="feature7452">Washer</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7453"
                                    value="7453"
                                    data-value="AM89666"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Water Heater"
                                  />
                                  <label for="feature7453">Water Heater</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7454"
                                    value="7454"
                                    data-value="AM89665"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Water Purifier"
                                  />
                                  <label for="feature7454">
                                    Water Purifier
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7455"
                                    value="7455"
                                    data-value="AM89715"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Water Softener"
                                  />
                                  <label for="feature7455">
                                    Water Softener
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7456"
                                    value="7456"
                                    data-value="AM89664"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Water to Refrigerator"
                                  />
                                  <label for="feature7456">
                                    Water to Refrigerator
                                  </label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Special Listing Conditions</label>
                            <Row
                              id="featureGroup334"
                              data-id="334"
                              data-selectiontype="0"
                              data-label="Special Listing Conditions"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7457"
                                    value="7457"
                                    data-value="FN2330"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Auction"
                                  />
                                  <label for="feature7457">Auction</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7458"
                                    value="7458"
                                    data-value="FN89788"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Bankruptcy Property"
                                  />
                                  <label for="feature7458">
                                    Bankruptcy Property
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7459"
                                    value="7459"
                                    data-value="FN2329"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Conservatorship"
                                  />
                                  <label for="feature7459">
                                    Conservatorship
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7460"
                                    value="7460"
                                    data-value="FN89805"
                                    data-property="MLSFeaturesCondition"
                                    data-label="HUD Owned"
                                  />
                                  <label for="feature7460">HUD Owned</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7461"
                                    value="7461"
                                    data-value="FN89802"
                                    data-property="MLSFeaturesCondition"
                                    data-label="No Smoking"
                                  />
                                  <label for="feature7461">No Smoking</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7462"
                                    value="7462"
                                    data-value="FN89787"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Notice Of Default"
                                  />
                                  <label for="feature7462">
                                    Notice Of Default
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7463"
                                    value="7463"
                                    data-value="FN89706"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Probate Listing"
                                  />
                                  <label for="feature7463">
                                    Probate Listing
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7464"
                                    value="7464"
                                    data-value="FN89692"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Real Estate Owned"
                                  />
                                  <label for="feature7464">
                                    Real Estate Owned
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7465"
                                    value="7465"
                                    data-value="FN89783"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Short Sale"
                                  />
                                  <label for="feature7465">Short Sale</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7466"
                                    value="7466"
                                    data-value="FN2323"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Standard"
                                  />
                                  <label for="feature7466">Standard</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7467"
                                    value="7467"
                                    data-value="FN89772"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Third Party Approval"
                                  />
                                  <label for="feature7467">
                                    Third Party Approval
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7468"
                                    value="7468"
                                    data-value="FN2324"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Trust"
                                  />
                                  <label for="feature7468">Trust</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Probate Authority</label>
                            <Row
                              id="featureGroup335"
                              data-id="335"
                              data-selectiontype="0"
                              data-label="Probate Authority"
                              class="js-feature-group"
                            >
                              <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature5240"
                                    value="5240"
                                    data-value="PU4267"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Court Confirmation Not Required"
                                  />
                                  <label for="feature5240">
                                    Court Confirmation Not Required
                                  </label>
                                </div>
                              </Col>

                              <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature5241"
                                    value="5241"
                                    data-value="PU4266"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Court Confirmation Required"
                                  />
                                  <label for="feature5241">
                                    Court Confirmation Required
                                  </label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>High Rise</label>
                            <Row
                              id="featureGroup379"
                              data-id="379"
                              data-selectiontype="0"
                              data-label="High Rise"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature6202"
                                    value="6202"
                                    data-value="BV4684"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Less than 5 stories"
                                  />
                                  <label for="feature6202">
                                    Less than 5 stories
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature6201"
                                    value="6201"
                                    data-value="BV4685"
                                    data-property="MLSFeaturesCondition"
                                    data-label="5 or more stories"
                                  />
                                  <label for="feature6201">
                                    5 or more stories
                                  </label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Interior Features</label>
                            <Row
                              id="featureGroup408"
                              data-id="408"
                              data-selectiontype="0"
                              data-label="Interior Features"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7469"
                                    value="7469"
                                    data-value="IF89839"
                                    data-property="MLSFeaturesCondition"
                                    data-label="All Bedrooms Down"
                                  />
                                  <label for="feature7469">
                                    All Bedrooms Down
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7470"
                                    value="7470"
                                    data-value="IF89850"
                                    data-property="MLSFeaturesCondition"
                                    data-label="All Bedrooms Up"
                                  />
                                  <label for="feature7470">
                                    All Bedrooms Up
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7471"
                                    value="7471"
                                    data-value="IF4252"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Atrium"
                                  />
                                  <label for="feature7471">Atrium</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7472"
                                    value="7472"
                                    data-value="IF4142"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Attic"
                                  />
                                  <label for="feature7472">Attic</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7473"
                                    value="7473"
                                    data-value="IF89842"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Balcony"
                                  />
                                  <label for="feature7473">Balcony</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7474"
                                    value="7474"
                                    data-value="IF89879"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Bar"
                                  />
                                  <label for="feature7474">Bar</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7475"
                                    value="7475"
                                    data-value="IF89869"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Beamed Ceilings"
                                  />
                                  <label for="feature7475">
                                    Beamed Ceilings
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7476"
                                    value="7476"
                                    data-value="IF89843"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Bedroomon Main Level"
                                  />
                                  <label for="feature7476">
                                    Bedroomon Main Level
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7477"
                                    value="7477"
                                    data-value="IF89883"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Block Walls"
                                  />
                                  <label for="feature7477">Block Walls</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7478"
                                    value="7478"
                                    data-value="IF89891"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Brick Walls"
                                  />
                                  <label for="feature7478">Brick Walls</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7479"
                                    value="7479"
                                    data-value="IF89858"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Built-in Features"
                                  />
                                  <label for="feature7479">
                                    Built-in Features
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7480"
                                    value="7480"
                                    data-value="IF89847"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Cathedral Ceilings"
                                  />
                                  <label for="feature7480">
                                    Cathedral Ceilings
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7481"
                                    value="7481"
                                    data-value="IF89833"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Ceiling Fans"
                                  />
                                  <label for="feature7481">Ceiling Fans</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7482"
                                    value="7482"
                                    data-value="IF89871"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Central Vacuum"
                                  />
                                  <label for="feature7482">
                                    Central Vacuum
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7483"
                                    value="7483"
                                    data-value="IF4210"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Ceramic Counters"
                                  />
                                  <label for="feature7483">
                                    Ceramic Counters
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7484"
                                    value="7484"
                                    data-value="IF89874"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Chair Rail"
                                  />
                                  <label for="feature7484">Chair Rail</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7485"
                                    value="7485"
                                    data-value="IF89875"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Coffered Ceilings"
                                  />
                                  <label for="feature7485">
                                    Coffered Ceilings
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7486"
                                    value="7486"
                                    data-value="IF89834"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Crown Molding"
                                  />
                                  <label for="feature7486">Crown Molding</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7487"
                                    value="7487"
                                    data-value="IF89860"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dressing Area"
                                  />
                                  <label for="feature7487">Dressing Area</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7488"
                                    value="7488"
                                    data-value="IF89870"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dry Bar"
                                  />
                                  <label for="feature7488">Dry Bar</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7489"
                                    value="7489"
                                    data-value="IF2717"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dumbwaiter"
                                  />
                                  <label for="feature7489">Dumbwaiter</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7490"
                                    value="7490"
                                    data-value="IF2719"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Elevator"
                                  />
                                  <label for="feature7490">Elevator</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7491"
                                    value="7491"
                                    data-value="IF89840"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Entrance Foyer"
                                  />
                                  <label for="feature7491">
                                    Entrance Foyer
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7492"
                                    value="7492"
                                    data-value="IF89886"
                                    data-property="MLSFeaturesCondition"
                                    data-label="French Doors/Atrium Doors"
                                  />
                                  <label for="feature7492">
                                    French Doors/Atrium Doors
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7493"
                                    value="7493"
                                    data-value="IF2673"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Furnished"
                                  />
                                  <label for="feature7493">Furnished</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7494"
                                    value="7494"
                                    data-value="IF89854"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Galley Kitchen"
                                  />
                                  <label for="feature7494">
                                    Galley Kitchen
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7495"
                                    value="7495"
                                    data-value="IF89845"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Granite Counters"
                                  />
                                  <label for="feature7495">
                                    Granite Counters
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7496"
                                    value="7496"
                                    data-value="IF89835"
                                    data-property="MLSFeaturesCondition"
                                    data-label="High Ceilings"
                                  />
                                  <label for="feature7496">High Ceilings</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7497"
                                    value="7497"
                                    data-value="IF89887"
                                    data-property="MLSFeaturesCondition"
                                    data-label="In Law Floorplan"
                                  />
                                  <label for="feature7497">
                                    In Law Floorplan
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7498"
                                    value="7498"
                                    data-value="IF89867"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Instant Hot Water"
                                  />
                                  <label for="feature7498">
                                    Instant Hot Water
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7499"
                                    value="7499"
                                    data-value="IF89851"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Jack-and-Jill Bath"
                                  />
                                  <label for="feature7499">
                                    Jack-and-Jill Bath
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7500"
                                    value="7500"
                                    data-value="IF89852"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Laminate Counters"
                                  />
                                  <label for="feature7500">
                                    Laminate Counters
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7501"
                                    value="7501"
                                    data-value="IF89876"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Living Room Deck Attached"
                                  />
                                  <label for="feature7501">
                                    Living Room Deck Attached
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7502"
                                    value="7502"
                                    data-value="IF4190"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Loft"
                                  />
                                  <label for="feature7502">Loft</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7503"
                                    value="7503"
                                    data-value="IF89844"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Main Level Master"
                                  />
                                  <label for="feature7503" data-uw-rm-mod="">
                                    Main Level Master
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7504"
                                    value="7504"
                                    data-value="IF89848"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Multiple Master Suites"
                                  />
                                  <label for="feature7504" data-uw-rm-mod="">
                                    Multiple Master Suites
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7505"
                                    value="7505"
                                    data-value="IF89859"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Multiple Staircases"
                                  />
                                  <label for="feature7505">
                                    Multiple Staircases
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7506"
                                    value="7506"
                                    data-value="IF89846"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Open Floorplan"
                                  />
                                  <label for="feature7506">
                                    Open Floorplan
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7507"
                                    value="7507"
                                    data-value="IF89866"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Paneling/Wainscoting"
                                  />
                                  <label for="feature7507">
                                    Paneling/Wainscoting
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7508"
                                    value="7508"
                                    data-value="IF1114"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pantry"
                                  />
                                  <label for="feature7508">Pantry</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7509"
                                    value="7509"
                                    data-value="IF89864"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Partially Furnished"
                                  />
                                  <label for="feature7509">
                                    Partially Furnished
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7510"
                                    value="7510"
                                    data-value="IF89877"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Phone System"
                                  />
                                  <label for="feature7510">Phone System</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7511"
                                    value="7511"
                                    data-value="IF89882"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pull Down Attic Stairs"
                                  />
                                  <label for="feature7511">
                                    Pull Down Attic Stairs
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7512"
                                    value="7512"
                                    data-value="IF89837"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Recessed Lighting"
                                  />
                                  <label for="feature7512">
                                    Recessed Lighting
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7513"
                                    value="7513"
                                    data-value="IF89890"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Smart Home"
                                  />
                                  <label for="feature7513">Smart Home</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7514"
                                    value="7514"
                                    data-value="IF89893"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Solid Surface Counters"
                                  />
                                  <label for="feature7514">
                                    Solid Surface Counters
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7515"
                                    value="7515"
                                    data-value="IF89897"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Stair Climber"
                                  />
                                  <label for="feature7515">Stair Climber</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7516"
                                    value="7516"
                                    data-value="IF89836"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Stone Counters"
                                  />
                                  <label for="feature7516">
                                    Stone Counters
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7517"
                                    value="7517"
                                    data-value="IF4187"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Storage"
                                  />
                                  <label for="feature7517">Storage</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7518"
                                    value="7518"
                                    data-value="IF4667"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Sunken Living Room"
                                  />
                                  <label for="feature7518">
                                    Sunken Living Room
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7519"
                                    value="7519"
                                    data-value="IF89878"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Suspended Ceilings"
                                  />
                                  <label for="feature7519">
                                    Suspended Ceilings
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7520"
                                    value="7520"
                                    data-value="IF89881"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Tandem"
                                  />
                                  <label for="feature7520">Tandem</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7521"
                                    value="7521"
                                    data-value="IF89849"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Tile Counters"
                                  />
                                  <label for="feature7521">Tile Counters</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7522"
                                    value="7522"
                                    data-value="IF89884"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Track Lighting"
                                  />
                                  <label for="feature7522">
                                    Track Lighting
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7523"
                                    value="7523"
                                    data-value="IF89880"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Trash Chute"
                                  />
                                  <label for="feature7523">Trash Chute</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7524"
                                    value="7524"
                                    data-value="IF89873"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Tray Ceilings"
                                  />
                                  <label for="feature7524">Tray Ceilings</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7525"
                                    value="7525"
                                    data-value="IF89857"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Two Story Ceilings"
                                  />
                                  <label for="feature7525">
                                    Two Story Ceilings
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7526"
                                    value="7526"
                                    data-value="IF89895"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Unfinished Walls"
                                  />
                                  <label for="feature7526">
                                    Unfinished Walls
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7527"
                                    value="7527"
                                    data-value="IF89838"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Unfurnished"
                                  />
                                  <label for="feature7527">Unfurnished</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7528"
                                    value="7528"
                                    data-value="IF89855"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Utility Room"
                                  />
                                  <label for="feature7528">Utility Room</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7529"
                                    value="7529"
                                    data-value="IF89841"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Walk-In Closet(s)"
                                  />
                                  <label for="feature7529">
                                    Walk-In Closet(s)
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7530"
                                    value="7530"
                                    data-value="IF89861"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Walk-In Pantry"
                                  />
                                  <label for="feature7530">
                                    Walk-In Pantry
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7531"
                                    value="7531"
                                    data-value="IF89863"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Wet Bar"
                                  />
                                  <label for="feature7531">Wet Bar</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7532"
                                    value="7532"
                                    data-value="IF89856"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Wine Cellar"
                                  />
                                  <label for="feature7532">Wine Cellar</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7533"
                                    value="7533"
                                    data-value="IF89889"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Wired for Data"
                                  />
                                  <label for="feature7533">
                                    Wired for Data
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7534"
                                    value="7534"
                                    data-value="IF89865"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Wired for Sound"
                                  />
                                  <label for="feature7534">
                                    Wired for Sound
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7535"
                                    value="7535"
                                    data-value="IF89853"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Wood Product Walls"
                                  />
                                  <label for="feature7535">
                                    Wood Product Walls
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7536"
                                    value="7536"
                                    data-value="IF4183"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Workshop"
                                  />
                                  <label for="feature7536">Workshop</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Exterior Features</label>
                            <Row
                              id="featureGroup409"
                              data-id="409"
                              data-selectiontype="0"
                              data-label="Exterior Features"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7537"
                                    value="7537"
                                    data-value="EF89862"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Awnings"
                                  />
                                  <label for="feature7537">Awnings</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7538"
                                    value="7538"
                                    data-value="EF4189"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Barbecue"
                                  />
                                  <label for="feature7538">Barbecue</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7539"
                                    value="7539"
                                    data-value="EF89896"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Boat Lift"
                                  />
                                  <label for="feature7539">Boat Lift</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7540"
                                    value="7540"
                                    data-value="EF89898"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Boat Slip"
                                  />
                                  <label for="feature7540">Boat Slip</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7541"
                                    value="7541"
                                    data-value="EF89872"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Brick Driveway"
                                  />
                                  <label for="feature7541">
                                    Brick Driveway
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7542"
                                    value="7542"
                                    data-value="EF2593"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dock"
                                  />
                                  <label for="feature7542">Dock</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7543"
                                    value="7543"
                                    data-value="EF89888"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Kennel"
                                  />
                                  <label for="feature7543">Kennel</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7544"
                                    value="7544"
                                    data-value="EF89892"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Koi Pond"
                                  />
                                  <label for="feature7544">Koi Pond</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7545"
                                    value="7545"
                                    data-value="EF4155"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Lighting"
                                  />
                                  <label for="feature7545">Lighting</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7546"
                                    value="7546"
                                    data-value="EF89894"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Misting System"
                                  />
                                  <label for="feature7546">
                                    Misting System
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7547"
                                    value="7547"
                                    data-value="EF89832"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Rain Gutters"
                                  />
                                  <label for="feature7547">Rain Gutters</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7548"
                                    value="7548"
                                    data-value="EF89868"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Sport Court"
                                  />
                                  <label for="feature7548">Sport Court</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7549"
                                    value="7549"
                                    data-value="EF89885"
                                    data-property="MLSFeaturesCondition"
                                    data-label="TV Antenna"
                                  />
                                  <label for="feature7549">TV Antenna</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Spa</label>
                            <Row
                              id="featureGroup413"
                              data-id="413"
                              data-selectiontype="0"
                              data-label="Spa"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7789"
                                    value="7789"
                                    data-value="SP90259"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Above Ground"
                                  />
                                  <label for="feature7789">Above Ground</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7790"
                                    value="7790"
                                    data-value="SP90256"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Association"
                                  />
                                  <label for="feature7790">Association</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7791"
                                    value="7791"
                                    data-value="SP90266"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Bath"
                                  />
                                  <label for="feature7791">Bath</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7792"
                                    value="7792"
                                    data-value="SP220"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Community"
                                  />
                                  <label for="feature7792">Community</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7793"
                                    value="7793"
                                    data-value="SP249"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Fiberglass"
                                  />
                                  <label for="feature7793">Fiberglass</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7794"
                                    value="7794"
                                    data-value="SP312"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gunite"
                                  />
                                  <label for="feature7794">Gunite</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7795"
                                    value="7795"
                                    data-value="SP90260"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Heated"
                                  />
                                  <label for="feature7795">Heated</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7796"
                                    value="7796"
                                    data-value="SP90257"
                                    data-property="MLSFeaturesCondition"
                                    data-label="In Ground"
                                  />
                                  <label for="feature7796">In Ground</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7797"
                                    value="7797"
                                    data-value="SP90258"
                                    data-property="MLSFeaturesCondition"
                                    data-label="None"
                                  />
                                  <label for="feature7797">None</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7798"
                                    value="7798"
                                    data-value="SP90267"
                                    data-property="MLSFeaturesCondition"
                                    data-label="No Permits"
                                  />
                                  <label for="feature7798">No Permits</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7799"
                                    value="7799"
                                    data-value="SP90261"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Permits"
                                  />
                                  <label for="feature7799">Permits</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7800"
                                    value="7800"
                                    data-value="SP274"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Private"
                                  />
                                  <label for="feature7800">Private</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7801"
                                    value="7801"
                                    data-value="SP90264"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Roof Top"
                                  />
                                  <label for="feature7801">Roof Top</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature7802"
                                    value="7802"
                                    data-value="SP90262"
                                    data-property="MLSFeaturesCondition"
                                    data-label="SolarHeat"
                                  />
                                  <label for="feature7802">SolarHeat</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Cooling</label>
                            <Row
                              id="featureGroup434"
                              data-id="434"
                              data-selectiontype="0"
                              data-label="Cooling"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9726"
                                    value="9726"
                                    data-value="CO91531"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Attic Fan"
                                  />
                                  <label for="feature9726">Attic Fan</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9727"
                                    value="9727"
                                    data-value="CO91519"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Central Air"
                                  />
                                  <label for="feature9727">Central Air</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9728"
                                    value="9728"
                                    data-value="CO89414"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Dual"
                                  />
                                  <label for="feature9728">Dual</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9729"
                                    value="9729"
                                    data-value="CO9090"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Ductless"
                                  />
                                  <label for="feature9729">Ductless</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9730"
                                    value="9730"
                                    data-value="CO89436"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Electric"
                                  />
                                  <label for="feature9730">Electric</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9731"
                                    value="9731"
                                    data-value="CO91530"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Energystar Qualified Equipment"
                                  />
                                  <label for="feature9731">Energystar</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9732"
                                    value="9732"
                                    data-value="CO91529"
                                    data-property="MLSFeaturesCondition"
                                    data-label="EvaporativeCooling"
                                  />
                                  <label for="feature9732">
                                    EvaporativeCooling
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9733"
                                    value="9733"
                                    data-value="CO89474"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gas"
                                  />
                                  <label for="feature9733">Gas</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9734"
                                    value="9734"
                                    data-value="CO91535"
                                    data-property="MLSFeaturesCondition"
                                    data-label="HeatPump"
                                  />
                                  <label for="feature9734">HeatPump</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9735"
                                    value="9735"
                                    data-value="CO91527"
                                    data-property="MLSFeaturesCondition"
                                    data-label="High Efficiency"
                                  />
                                  <label for="feature9735">
                                    High Efficiency
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9736"
                                    value="9736"
                                    data-value="CO91539"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Humidity Control"
                                  />
                                  <label for="feature9736">
                                    Humidity Control
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9737"
                                    value="9737"
                                    data-value="CO91524"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Wall Window Units"
                                  />
                                  <label for="feature9737">
                                    Wall Window Units
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9738"
                                    value="9738"
                                    data-value="CO91526"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Whole House Fan"
                                  />
                                  <label for="feature9738">
                                    Whole House Fan
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9739"
                                    value="9739"
                                    data-value="CO90889"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Zoned"
                                  />
                                  <label for="feature9739">Zoned</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Heating</label>
                            <Row
                              id="featureGroup435"
                              data-id="435"
                              data-selectiontype="0"
                              data-label="Heating"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9740"
                                    value="9740"
                                    data-value="HE2442"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Baseboard"
                                  />
                                  <label for="feature9740">Baseboard</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9741"
                                    value="9741"
                                    data-value="HE3169"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Central"
                                  />
                                  <label for="feature9741">Central</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9742"
                                    value="9742"
                                    data-value="HE89423"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Combination"
                                  />
                                  <label for="feature9742">Combination</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9743"
                                    value="9743"
                                    data-value="HE9091"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Ductless"
                                  />
                                  <label for="feature9743">Ductless</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9744"
                                    value="9744"
                                    data-value="HE2432"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Electric"
                                  />
                                  <label for="feature9744">Electric</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9745"
                                    value="9745"
                                    data-value="HE91533"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Energystar Qualified Equipment"
                                  />
                                  <label for="feature9745">Energystar</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9746"
                                    value="9746"
                                    data-value="HE91520"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Fireplaces"
                                  />
                                  <label for="feature9746">Fireplaces</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9747"
                                    value="9747"
                                    data-value="HE91532"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Floor Furnace"
                                  />
                                  <label for="feature9747">Floor Furnace</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9748"
                                    value="9748"
                                    data-value="HE91522"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Forced Air"
                                  />
                                  <label for="feature9748">Forced Air</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9749"
                                    value="9749"
                                    data-value="HE89475"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Gravity"
                                  />
                                  <label for="feature9749">Gravity</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9750"
                                    value="9750"
                                    data-value="HE91523"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Heat Pump"
                                  />
                                  <label for="feature9750">Heat Pump</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9751"
                                    value="9751"
                                    data-value="HE91534"
                                    data-property="MLSFeaturesCondition"
                                    data-label="High Efficiency"
                                  />
                                  <label for="feature9751">
                                    High Efficiency
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9752"
                                    value="9752"
                                    data-value="HE91537"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Humidity Control"
                                  />
                                  <label for="feature9752">
                                    Humidity Control
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9753"
                                    value="9753"
                                    data-value="HE91538"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Kerosene"
                                  />
                                  <label for="feature9753">Kerosene</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9754"
                                    value="9754"
                                    data-value="HE91521"
                                    data-property="MLSFeaturesCondition"
                                    data-label="NaturalGas"
                                  />
                                  <label for="feature9754">NaturalGas</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9755"
                                    value="9755"
                                    data-value="HE3357"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Oil"
                                  />
                                  <label for="feature9755">Oil</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9756"
                                    value="9756"
                                    data-value="HE91536"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Pellet Stove"
                                  />
                                  <label for="feature9756">Pellet Stove</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9757"
                                    value="9757"
                                    data-value="HE2433"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Propane"
                                  />
                                  <label for="feature9757">Propane</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9758"
                                    value="9758"
                                    data-value="HE2452"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Radiant"
                                  />
                                  <label for="feature9758">Radiant</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9759"
                                    value="9759"
                                    data-value="HE2448"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Solar"
                                  />
                                  <label for="feature9759">Solar</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9760"
                                    value="9760"
                                    data-value="HE91525"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Space Heater"
                                  />
                                  <label for="feature9760">Space Heater</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9761"
                                    value="9761"
                                    data-value="HE91518"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Wall Furnace"
                                  />
                                  <label for="feature9761">Wall Furnace</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9762"
                                    value="9762"
                                    data-value="HE89480"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Wood"
                                  />
                                  <label for="feature9762">Wood</label>
                                </div>
                              </Col>
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9763"
                                    value="9763"
                                    data-value="HE91528"
                                    data-property="MLSFeaturesCondition"
                                    data-label="WoodStove"
                                  />
                                  <label for="feature9763">WoodStove</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature9764"
                                    value="9764"
                                    data-value="HE89421"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Zoned"
                                  />
                                  <label for="feature9764">Zoned</label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Row
                          style={{ margin: "2rem 0" }}
                          className="dropDown-more-button-row"
                        >
                          <div class="si-app-section js-collapse-group">
                            <label>Lease Terms</label>
                            <Row
                              id="featureGroup453"
                              data-id="453"
                              data-selectiontype="0"
                              data-label="Lease Terms"
                              class="js-feature-group"
                            >
                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature10057"
                                    value="10057"
                                    data-value="RT92039"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Weekly"
                                  />
                                  <label for="feature10057">Weekly</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature10053"
                                    value="10053"
                                    data-value="RT92043"
                                    data-property="MLSFeaturesCondition"
                                    data-label="6 Months"
                                  />
                                  <label for="feature10053">6 Months</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature10051"
                                    value="10051"
                                    data-value="RT92040"
                                    data-property="MLSFeaturesCondition"
                                    data-label="12 Months"
                                  />
                                  <label for="feature10051">12 Months</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature10052"
                                    value="10052"
                                    data-value="RT92044"
                                    data-property="MLSFeaturesCondition"
                                    data-label="24 Months"
                                  />
                                  <label for="feature10052">24 Months</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature10054"
                                    value="10054"
                                    data-value="RT92038"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Month To Month"
                                  />
                                  <label for="feature10054">
                                    Month To Month
                                  </label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature10055"
                                    value="10055"
                                    data-value="RT92042"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Negotiable"
                                  />
                                  <label for="feature10055">Negotiable</label>
                                </div>
                              </Col>

                              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                <div class="si-sapp-checkbox">
                                  <input
                                    type="checkbox"
                                    id="feature10056"
                                    value="10056"
                                    data-value="RT92041"
                                    data-property="MLSFeaturesCondition"
                                    data-label="Short Term Lease"
                                  />
                                  <label for="feature10056">
                                    Short Term Lease
                                  </label>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                      </Container>
                    </div>
                  ) : null}
                </Col>
              </Row>
            </Col>
          </Row>
        </Box>
        <TabPanel value={value} index={0}>
          <Test
            areaFromParent={3}
            size={3}
            numberOfCoulmns={32}
            fullTheme={false}
            ShowUpperPagintaion={true}
          />
          <ContactForm showLeftPhoto={true} ColSize={7} />
          <Row>
            <Widgets
              searchBar={false}
              areaFromParent={"Los Angeles"}
              showPagination={false}
              placeholderContent={"Search Homes"}
            />
          </Row>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Row>
            <Col xs={12} sm={5} md={5} lg={5} xl={5}>
              <MapSearch />
            </Col>
            <Col
              xs={12}
              sm={7}
              md={7}
              lg={7}
              xl={7}
              style={{ height: "70vh", overflow: "auto", marginTop: "2.5rem" }}
            >
              <Test
                areaFromParent={"los Angeles"}
                size={6}
                numberOfCoulmns={32}
                fullTheme={false}
                ShowUpperPagintaion={false}
              />
              <ContactForm showLeftPhoto={false} ColSize={12} />
              <Row>
                <Widgets
                  searchBar={false}
                  areaFromParent={"Los Angeles"}
                  showPagination={false}
                  placeholderContent={"Search Homes"}
                />
              </Row>
            </Col>
          </Row>
        </TabPanel>
      </Box>
    </Container>
  );
};

export default CommunityPage;
