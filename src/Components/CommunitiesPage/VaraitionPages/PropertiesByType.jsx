import React from "react";
import { useState } from "react";
import SearchPage from "../../SearchPage/SearchPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { propertyDetails } from "../../api/mlsdata";
import { CommunitiesObj } from "../../api/mlsdata";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import CardComponent from "../../LandingPage/Communities/CardComponent";
import PropertiesGallery from "../../LandingPage/Communities/PropertiesGallery";
import Widgets from "../Widgets";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapSearch from "../../MapSearch/MapSearch";
import Sreach from "../../MapListting/search";
import ContactForm from "../ContactForm";
import MoreDropdown from "../MoreDropdown";
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
const PropertiesByType = () => {
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
  const moreButtonToggle = () => {
    setShowed5(true);
    setShowed1(false);
    setShowed3(false);
    setShowed4(false);
    setShowed2(false);
  };
  const setShowed5Handler = () => {
    setShowed5(false);
  };
  return (
    <Container style={{ marginTop: "5rem" }}>
      <Row className="communities-breadcrumbs-row">
        <h1>Los Angeles Single Family Homes For Sale</h1>
        <Col className="communities-breadcrumbs-col1">
          <Link className="breadcrumbs-links" to="/">
            Home
          </Link>
          <span style={{ margin: "0 1rem" }}>&#62;</span>
          <Link className="breadcrumbs-links" to="#">
            Los Angeles
          </Link>
          <span style={{ margin: "0 1rem" }}>&#62;</span>
          <Link className="breadcrumbs-links" to="#">
            Single Family Homes
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
                <MoreDropdown
                  Showed1={Showed1}
                  Showed2={Showed2}
                  Showed3={Showed3}
                  Showed4={Showed4}
                  Showed5={Showed5}
                  moreButtonToggle={moreButtonToggle}
                  handleChangeNumberOfBaths={handleChangeNumberOfBaths}
                  numberOfBaths={numberOfBaths}
                  setShowed5Handler={setShowed5Handler}
                />
              </Row>
            </Col>
          </Row>
        </Box>
        <TabPanel value={value} index={0}>
          <PropertiesGallery
            areaFromParent={3}
            size={3}
            numberOfCoulmns={32}
            fullTheme={false}
            ShowUpperPagintaion={true}
          />
          <ContactForm showLeftPhoto={true} ColSize={7} showTitle={true} />
          <Row>
            <Widgets
              // varaitionType={"Single Family Homes"}
              searchBar={false}
              areaFromParent={"Los Angeles"}
              showPagination={false}
              placeholderContent={"Search Homes"}
            />
          </Row>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Row>
            <Col
              xs={12}
              sm={5}
              md={5}
              lg={5}
              xl={5}
              style={{ marginTop: "0rem" }}
            >
              <MapSearch mapHeight="70vh" mapWidth="auto" />
            </Col>
            <Col
              xs={12}
              sm={7}
              md={7}
              lg={7}
              xl={7}
              style={{ height: "70vh", overflow: "auto", marginTop: "0rem" }}
            >
              <PropertiesGallery
                areaFromParent={"los Angeles"}
                size={6}
                numberOfCoulmns={32}
                fullTheme={false}
                ShowUpperPagintaion={false}
              />
              <ContactForm
                showLeftPhoto={false}
                ColSize={12}
                showTitle={true}
              />
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

export default PropertiesByType;
