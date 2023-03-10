import React, { useState } from "react";
import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import PaidIcon from "@mui/icons-material/Paid";
import SchoolIcon from "@mui/icons-material/School";
import StoreIcon from "@mui/icons-material/Store";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button } from "@mui/material";
import MapSearch from "../MapSearch/MapSearch";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import DeckIcon from "@mui/icons-material/Deck";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import TableViewIcon from "@mui/icons-material/TableView";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ListingsCarousel from "../LandingPage/ListingsCarousel/ListingsCarousel";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SellIcon from "@mui/icons-material/Sell";
import FlagIcon from "@mui/icons-material/Flag";
import ListingItemPopUp from "./ListingItemPopUp";
import NewMap from "./NewMap";
import MortgageCalculator from "./MortgageCalculator/MortgageCalculator";
import NavbarListingItem from "./NavbarListingItem";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import ReqTourPic from "../../assets/reqTour.jpg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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
window.onscroll = function () {
  scrollFunction();
};
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbarListingItem").style.top = "0";
  } else {
    document.getElementById("navbarListingItem").style.top = "-200px";
  }
};
const ListingPage = () => {
  const [isActive, setIsActive] = useState(false);
  const handleColorchange = () => {
    setIsActive((current) => !current);
  };
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [seeMoreContent, setSeeMoreContent] = useState(false);
  const [seeMoreContent2, setSeeMoreContent2] = useState(false);
  const [ShowNavbar, setShowNavbar] = useState(false);
  const [alignment, setAlignment] = React.useState("web");
  const handleChangeAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [age, setAge] = React.useState("");
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const [scheduleATour, setScheduleATour] = useState(true);
  const [reqInfo, setReqInfo] = useState(false);
  const [navbarDropdown, setNavbarDropdown] = useState(true);
  return (
    <>
      <div id="navbarListingItem">
        <NavbarListingItem />
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid xs={4} sm={4} md={4} lg={4} xl={4} className="centerd-element">
            <Link to="/area-page" style={{ color: "#2FA8E6" }}>
              <WestIcon style={{ margin: "0 0.4rem" }} />
              Back to Search
            </Link>
          </Grid>
          <Grid className="centerd-element">
            <span>For Sale</span>
            <span style={{ margin: "0 0.4rem" }}>&#62;</span>
            <span style={{ color: "#2FA8E6" }}>State</span>
            <span style={{ margin: "0 0.4rem" }}>&#62;</span>
            <span style={{ color: "#2FA8E6" }}>City</span>
            <span style={{ margin: "0 0.4rem" }}>&#62;</span>
            <span style={{ color: "#2FA8E6" }}>Zip Code</span>
            <span style={{ margin: "0 0.4rem" }}>&#62;</span>
            <span style={{ color: "#2FA8E6" }}>
              Street Number, Street Name, Location
            </span>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="centerd-element grid-div-gallery"
            style={{ flexDirection: "column" }}
          >
            <ListingItemPopUp />
          </Grid>
          <Box sx={{ flexGrow: 1 }} className="centerd-element">
            <Grid
              container
              spacing={1}
              className="centerd-element"
              style={{ alignItems: "start" }}
            >
              <Grid xs={6}>
                <h2 style={{ fontWeight: "600" }}> 5654 Sheila Ave</h2>
                <h6>
                  Las Vegas, NV 89108{" "}
                  <span
                    style={{
                      color: "#1976d2",
                      borderBottom: "1px solid #1976d2",
                    }}
                  >
                    Michael Way
                  </span>
                </h6>
                <div className="flex-row">
                  <div className="card-body-content">
                    <span
                      className="houseCardInfo card-address centerd-element"
                      style={{ marginRight: "1rem", fontSize: "1rem" }}
                    >
                      <KingBedIcon
                        style={{
                          color: "gray",
                          fontSize: "1.5rem",
                          marginRight: "0.3rem",
                        }}
                      />
                      5 Beds
                    </span>
                    <span
                      className="houseCardInfo card-address centerd-element"
                      style={{ marginRight: "1rem", fontSize: "1rem" }}
                    >
                      <BathtubIcon
                        style={{
                          color: "gray",
                          fontSize: "1.4rem",
                          marginRight: "0.3rem",
                        }}
                      />
                      2 Baths
                    </span>
                    <span
                      className="houseCardInfo card-address centerd-element"
                      style={{ marginRight: "1rem", fontSize: "0.9rem" }}
                    >
                      <SquareFootIcon
                        style={{
                          color: "gray",
                          fontSize: "1.5rem",
                          marginRight: "0.3rem",
                        }}
                      />
                      2,464 sqft (on 0.47 acres)
                    </span>
                  </div>
                </div>
              </Grid>
              <Grid xs={3}>
                <h2 style={{ fontWeight: "600" }}>$745,000</h2>
                <h6>Est. Mortgage $4,375/mo*</h6>
                <span>
                  <PaidIcon style={{ color: "#1976d2", fontSize: "1.9rem" }} />{" "}
                  <span
                    style={{
                      color: "#1976d2",
                      borderBottom: "1px solid #1976d2",
                    }}
                  >
                    Get Pre-Qualified
                  </span>
                </span>
              </Grid>
              <Grid
                xs={3}
                style={{
                  border: "1px solid lightgray",
                  padding: "1rem",
                }}
              >
                <div style={{}}>
                  <h6 style={{ textAlign: "center", fontSize: "1.1rem" }}>
                    Request a tour as early as <br />
                    <span style={{ fontWeight: "600", textAlign: "center" }}>
                      Today at 10:00AM
                    </span>
                  </h6>
                  <div
                    className="centerd-element"
                    style={{
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        margin: "0.3rem",
                        fontSize: "1rem",
                        width: "100%",
                      }}
                    >
                      Schedule a Tour
                    </Button>
                    <Button
                      variant="outlined"
                      style={{
                        margin: "0.5rem",
                        fontSize: "1rem",
                        width: "100%",
                      }}
                    >
                      Request Info
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container className="centerd-element">
            <Grid
              xs={8}
              style={{
                marginTop: "2rem",
                border: "1px solid lightgray",
                padding: "1rem",
              }}
            >
              <h5 style={{ fontWeight: "600", marginBottom: "-0.5rem" }}>
                Neighborhood Information
              </h5>
              <Tabs
                className="basic-tabs"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Tab
                  icon={<LocationOnIcon />}
                  label="Map"
                  {...a11yProps(0)}
                  iconPosition="start"
                />
                <Tab
                  icon={<SchoolIcon />}
                  label="Schools"
                  {...a11yProps(1)}
                  iconPosition="start"
                />
                <Tab
                  icon={<StoreIcon />}
                  label="Shop & Eat"
                  {...a11yProps(2)}
                  iconPosition="start"
                />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Grid>
                  <MapSearch mapHeight="40vh" mapWidth="52vw" />
                  <h5 style={{ fontWeight: "600", margin: "2rem 0" }}>
                    Property Description
                  </h5>
                  <p style={{ maxWidth: "52vw" }}>
                    Must see this large Las Vegas two story home on just under a
                    half-acre lot in this custom home neighborhood!! Perfect for
                    a large family! Huge Backyard is a blank slate with space
                    for a pool, guesthouse or an additional garage for all your
                    toys! RV! Zoned for horses! Home has been updated with two
                    new air conditioners, new roof, new paint inside and out!
                    New kitchen countertops, appliances with a view of the
                    backyard! Updated bathrooms! New tile and carpet throughout!
                    Four large bedrooms with an optional fifth or a den
                    downstairs along with family room, living room and a dining
                    room off the kitchen! New front yard desert landscaping!
                    Perfect home for your large family! Don't hesitate or it
                    will be gone!! Hard to find lot at this price
                  </p>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <MapSearch mapHeight="40vh" mapWidth="52vw" />
                <h5 style={{ fontWeight: "600", margin: "2rem" }}>
                  Property Description
                </h5>
                <p style={{ maxWidth: "52vw" }}>
                  Must see this large Las Vegas two story home on just under a
                  half-acre lot in this custom home neighborhood!! Perfect for a
                  large family! Huge Backyard is a blank slate with space for a
                  pool, guesthouse or an additional garage for all your toys!
                  RV! Zoned for horses! Home has been updated with two new air
                  conditioners, new roof, new paint inside and out! New kitchen
                  countertops, appliances with a view of the backyard! Updated
                  bathrooms! New tile and carpet throughout! Four large bedrooms
                  with an optional fifth or a den downstairs along with family
                  room, living room and a dining room off the kitchen! New front
                  yard desert landscaping! Perfect home for your large family!
                  Don't hesitate or it will be gone!! Hard to find lot at this
                  price
                </p>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <MapSearch mapHeight="40vh" mapWidth="52vw" />
                <h5 style={{ fontWeight: "600", margin: "2rem" }}>
                  Property Description
                </h5>
                <p style={{ maxWidth: "52vw" }}>
                  Must see this large Las Vegas two story home on just under a
                  half-acre lot in this custom home neighborhood!! Perfect for a
                  large family! Huge Backyard is a blank slate with space for a
                  pool, guesthouse or an additional garage for all your toys!
                  RV! Zoned for horses! Home has been updated with two new air
                  conditioners, new roof, new paint inside and out! New kitchen
                  countertops, appliances with a view of the backyard! Updated
                  bathrooms! New tile and carpet throughout! Four large bedrooms
                  with an optional fifth or a den downstairs along with family
                  room, living room and a dining room off the kitchen! New front
                  yard desert landscaping! Perfect home for your large family!
                  Don't hesitate or it will be gone!! Hard to find lot at this
                  price
                </p>
              </TabPanel>
            </Grid>
            <Grid
              xs={8}
              style={{
                marginTop: "2rem",
                border: "1px solid lightgray",
                padding: "1rem",
              }}
            >
              <h5 style={{ fontWeight: "600", margin: "1rem 0" }}>
                Property Highlights
              </h5>
              <Grid className="centerd-element">
                <Grid
                  xs={3}
                  className="centerd-element"
                  style={{ flexDirection: "column", alignItems: "start" }}
                >
                  <span
                    style={{
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    <LocalParkingIcon
                      style={{
                        color: "gray",
                        marginRight: "0.5rem",
                        fontSize: "2rem",
                      }}
                    />{" "}
                    Parking
                  </span>
                  <span
                    style={{
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    <DeckIcon
                      style={{
                        color: "gray",
                        marginRight: "0.5rem",
                        fontSize: "2rem",
                      }}
                    />{" "}
                    Outdoor
                  </span>
                  <span
                    style={{
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    <DeviceThermostatIcon
                      style={{
                        color: "gray",
                        marginRight: "0.5rem",
                        fontSize: "2rem",
                      }}
                    />{" "}
                    A/C
                  </span>
                </Grid>
                <Grid
                  xs={3}
                  className="centerd-element"
                  style={{ flexDirection: "column", alignItems: "start" }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "0.7rem",
                    }}
                  >
                    2 Car Garage
                  </span>
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "0.7rem",
                    }}
                  >
                    No Info
                  </span>
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "0.7rem",
                    }}
                  >
                    Heating & Cooling
                  </span>
                </Grid>
                <Grid
                  xs={3}
                  className="centerd-element"
                  style={{ flexDirection: "column", alignItems: "start" }}
                >
                  <span
                    style={{
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    <TableViewIcon
                      style={{
                        color: "gray",
                        marginRight: "0.5rem",
                        fontSize: "2rem",
                      }}
                    />{" "}
                    HOA
                  </span>
                  <span
                    style={{
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    <SquareFootIcon
                      style={{
                        color: "gray",
                        marginRight: "0.5rem",
                        fontSize: "2rem",
                      }}
                    />{" "}
                    Price/Sqft
                  </span>
                  <span
                    style={{
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    <CalendarMonthIcon
                      style={{
                        color: "gray",
                        marginRight: "0.5rem",
                        fontSize: "2rem",
                      }}
                    />{" "}
                    Listed
                  </span>
                </Grid>
                <Grid
                  xs={3}
                  className="centerd-element"
                  style={{ flexDirection: "column", alignItems: "start" }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "0.7rem",
                    }}
                  >
                    No HOA Fee
                  </span>
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "0.7rem",
                    }}
                  >
                    $221
                  </span>
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "0.7rem",
                    }}
                  >
                    1 day ago
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              xs={8}
              style={{
                marginTop: "2rem",
                border: "1px solid lightgray",
                padding: "1rem",
              }}
            >
              <h5
                style={{
                  fontWeight: "600",
                  marginTop: "1rem",
                  marginBottom: "0.8rem",
                }}
              >
                Home Details for 5654 Sheila Ave
              </h5>
              <Grid xs={12} style={{ padding: "1rem" }}>
                <h6
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {/* <NightShelterIcon
                  style={{
                    color: "rgb(25, 118, 210)",
                    fontSize: "2rem",
                    marginRight: "0.5rem",
                    marginBottom: "0.2rem",
                  }}
                /> */}
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    Interior Features
                  </span>
                </h6>
                <Grid style={{ marginTop: "-1rem", marginLeft: "1rem" }}>
                  <h6 style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                    Interior Details
                  </h6>
                  <Grid container style={{ justifyContent: "flex-start" }}>
                    <Grid
                      xs={4}
                      className="centerd-element"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <span
                        style={{ fontSize: "1.8rem", marginRight: "0.2rem" }}
                      >
                        &#8226;
                      </span>
                      Number of Rooms:
                      <span style={{ fontWeight: "600", marginLeft: "0.5rem" }}>
                        5
                      </span>
                    </Grid>
                    <Grid
                      xs={4}
                      className="centerd-element"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <span
                        style={{ fontSize: "1.8rem", marginRight: "0.2rem" }}
                      >
                        &#8226;
                      </span>
                      Types of Rooms:
                      <span style={{ fontWeight: "600", marginLeft: "0.5rem" }}>
                        Kitchen
                      </span>
                    </Grid>
                  </Grid>
                  <h6 style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                    Beds & Baths
                  </h6>
                  <Grid container style={{ justifyContent: "flex-start" }}>
                    <Grid
                      xs={4}
                      className="centerd-element"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <span
                        style={{ fontSize: "1.8rem", marginRight: "0.2rem" }}
                      >
                        &#8226;
                      </span>
                      Number of Bedrooms:
                      <span style={{ fontWeight: "600", marginLeft: "0.5rem" }}>
                        4
                      </span>
                    </Grid>
                    <Grid
                      xs={4}
                      className="centerd-element"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <span
                        style={{ fontSize: "1.8rem", marginRight: "0.2rem" }}
                      >
                        &#8226;
                      </span>
                      Number of Bathrooms:
                      <span style={{ fontWeight: "600", marginLeft: "0.5rem" }}>
                        3
                      </span>
                    </Grid>
                    <Grid
                      xs={4}
                      className="centerd-element"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <span
                        style={{ fontSize: "1.8rem", marginRight: "0.2rem" }}
                      >
                        &#8226;
                      </span>
                      Number of Bathrooms (full):
                      <span style={{ fontWeight: "600", marginLeft: "0.5rem" }}>
                        2
                      </span>
                    </Grid>
                    <Grid
                      xs={4}
                      className="centerd-element"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <span
                        style={{ fontSize: "1.8rem", marginRight: "0.2rem" }}
                      >
                        &#8226;
                      </span>
                      Number of Bathrooms (half):
                      <span style={{ fontWeight: "600", marginLeft: "0.5rem" }}>
                        1
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {seeMoreContent ? (
                <>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <YardIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "1.1rem",
                          marginBottom: "1rem",
                        }}
                      >
                        Exterior Features
                      </span>
                    </h6>
                    <Grid style={{ marginTop: "-1rem", marginLeft: "1rem" }}>
                      <h6 style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Exterior Home Features
                      </h6>
                      <Grid container style={{ justifyContent: "flex-start" }}>
                        <Grid
                          xs={4}
                          className="centerd-element"
                          style={{ justifyContent: "flex-start" }}
                        >
                          <span
                            style={{
                              fontSize: "1.8rem",
                              marginRight: "0.2rem",
                            }}
                          >
                            &#8226;
                          </span>
                          Number of Rooms:
                          <span
                            style={{ fontWeight: "600", marginLeft: "0.5rem" }}
                          >
                            5
                          </span>
                        </Grid>
                        <Grid
                          xs={4}
                          className="centerd-element"
                          style={{ justifyContent: "flex-start" }}
                        >
                          <span
                            style={{
                              fontSize: "1.8rem",
                              marginRight: "0.2rem",
                            }}
                          >
                            &#8226;
                          </span>
                          Types of Rooms:
                          <span
                            style={{ fontWeight: "600", marginLeft: "0.5rem" }}
                          >
                            Kitchen
                          </span>
                        </Grid>
                      </Grid>
                      <h6 style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Parking & Garage
                      </h6>
                      <Grid container style={{ justifyContent: "flex-start" }}>
                        <Grid
                          xs={4}
                          className="centerd-element"
                          style={{ justifyContent: "flex-start" }}
                        >
                          <span
                            style={{
                              fontSize: "1.8rem",
                              marginRight: "0.2rem",
                            }}
                          >
                            &#8226;
                          </span>
                          Number of Bedrooms:
                          <span
                            style={{ fontWeight: "600", marginLeft: "0.5rem" }}
                          >
                            4
                          </span>
                        </Grid>
                        <Grid
                          xs={4}
                          className="centerd-element"
                          style={{ justifyContent: "flex-start" }}
                        >
                          <span
                            style={{
                              fontSize: "1.8rem",
                              marginRight: "0.2rem",
                            }}
                          >
                            &#8226;
                          </span>
                          Number of Bathrooms:
                          <span
                            style={{ fontWeight: "600", marginLeft: "0.5rem" }}
                          >
                            3
                          </span>
                        </Grid>
                        <Grid
                          xs={4}
                          className="centerd-element"
                          style={{ justifyContent: "flex-start" }}
                        >
                          <span
                            style={{
                              fontSize: "1.8rem",
                              marginRight: "0.2rem",
                            }}
                          >
                            &#8226;
                          </span>
                          Number of Bathrooms (full):
                          <span
                            style={{ fontWeight: "600", marginLeft: "0.5rem" }}
                          >
                            2
                          </span>
                        </Grid>
                        <Grid
                          xs={4}
                          className="centerd-element"
                          style={{ justifyContent: "flex-start" }}
                        >
                          <span
                            style={{
                              fontSize: "1.8rem",
                              marginRight: "0.2rem",
                            }}
                          >
                            &#8226;
                          </span>
                          Number of Bathrooms (half):
                          <span
                            style={{ fontWeight: "600", marginLeft: "0.5rem" }}
                          >
                            1
                          </span>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <CalendarMonthIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Days on Market
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <HomeWorkIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Property Information
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <SellIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Price & Status
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <PendingActionsIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Active Status
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <PlayCircleFilledIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Media
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <LocationOnIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Location
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <AssignmentIndIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Agent Information
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <ApartmentIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Building
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <HolidayVillageIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Community
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <Diversity3Icon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        HOA
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <GrassIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Lot Information
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <RequestQuoteIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Offer
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <MarkEmailReadIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Compensation
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {/* <PendingIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Miscellaneous
                      </span>
                    </h6>
                  </Grid>
                  <Grid xs={12} style={{ padding: "1rem" }}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginBottom: "0.8rem",
                      }}
                    >
                      {/* <InfoIcon
                      style={{
                        color: "rgb(25, 118, 210)",
                        fontSize: "1.65rem",
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    /> */}
                      <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                        Additional Information
                      </span>
                    </h6>
                  </Grid>
                </>
              ) : null}
              <button
                onClick={() => {
                  if (seeMoreContent) {
                    setSeeMoreContent(false);
                  } else {
                    setSeeMoreContent(true);
                  }
                }}
                className="show-more-content-toggler-button"
              >
                See More{" "}
                {seeMoreContent ? (
                  <KeyboardArrowUpIcon style={{ color: "red" }} />
                ) : (
                  <KeyboardArrowDownIcon
                    style={{ color: "rgb(25, 118, 210)" }}
                  />
                )}
              </button>
            </Grid>
            <Grid
              xs={8}
              style={{
                marginTop: "2rem",
                border: "1px solid lightgray",
                padding: "1rem",
              }}
            >
              <h5 style={{ fontWeight: "600", marginTop: "1rem" }}>
                Price History for 5654 Sheila Ave
              </h5>
              <table
                className="Table-latbb5-3 hMYIhS table-of-priceHistory"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr className="Table__TableRow-latbb5-0 ezcNaI">
                    <th
                      width="0.25"
                      className="Table__TableHeadCell-latbb5-1 eYVelx"
                    >
                      <span className="Text__TextBase-sc-1cait9d-0 iTXUhg">
                        Date
                      </span>
                    </th>
                    <th
                      width="0.25"
                      className="Table__TableHeadCell-latbb5-1 eYVelx"
                    >
                      <span className="Text__TextBase-sc-1cait9d-0 iTXUhg">
                        Price
                      </span>
                    </th>
                    <th
                      width="0.25"
                      className="Table__TableHeadCell-latbb5-1 eYVelx"
                    >
                      <span className="Text__TextBase-sc-1cait9d-0 iTXUhg">
                        Event
                      </span>
                    </th>
                    <th
                      width="0.25"
                      className="Table__TableHeadCell-latbb5-1 eYVelx"
                    >
                      <span className="Text__TextBase-sc-1cait9d-0 iTXUhg">
                        Source
                      </span>
                    </th>
                  </tr>
                </thead>
                <tr className="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span className="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      03/04/2023
                    </span>
                  </td>
                  <td
                    width="auto"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span className="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      $545,000
                    </span>
                  </td>
                  <td
                    width="auto"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span className="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      Listed For Sale
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span
                      data-testid="price-history-attribution-desktop-source"
                      className="Text__TextBase-sc-1cait9d-0 iTXUhg"
                    >
                      GLVAR #2478649
                    </span>
                  </td>
                </tr>
                <tr className="Table__TableRow-latbb5-0 cdWvbO">
                  <td
                    width="auto"
                    colspan="4"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl className="Grid__GridContainer-sc-144isrp-1 cSOwYb"></dl>
                  </td>
                </tr>
                <tr className="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span className="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      03/04/2023
                    </span>
                  </td>
                  <td
                    width="auto"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  ></td>
                  <td
                    width="auto"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span className="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      ListingRemoved
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span
                      data-testid="price-history-attribution-desktop-source"
                      className="Text__TextBase-sc-1cait9d-0 iTXUhg"
                    >
                      GLVAR #2445251
                    </span>
                  </td>
                </tr>
                <tr
                  className="Table__TableRow-latbb5-0 cdWvbO"
                  style={{ display: "none" }}
                >
                  <td
                    width="auto"
                    colspan="4"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl class="Grid__GridContainer-sc-144isrp-1 cSOwYb"></dl>
                  </td>
                </tr>
                <tr className="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      10/08/2022
                    </span>
                  </td>
                  <td
                    width="auto"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      $550,000
                    </span>
                  </td>
                  <td
                    width="auto"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      Listed For Sale
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span
                      data-testid="price-history-attribution-desktop-source"
                      className="Text__TextBase-sc-1cait9d-0 iTXUhg"
                    >
                      GLVAR #2445251
                    </span>
                  </td>
                </tr>
                <tr
                  class="Table__TableRow-latbb5-0 cdWvbO"
                  style={{ display: "none" }}
                >
                  <td
                    width="auto"
                    colspan="4"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl class="Grid__GridContainer-sc-144isrp-1 cSOwYb"></dl>
                  </td>
                </tr>
                <tr className="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span className="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      08/01/2022
                    </span>
                  </td>
                  <td
                    width="auto"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span className="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      $365,000
                    </span>
                  </td>
                  <td
                    width="auto"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span className="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      Sold
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <div className="MediaBlock__MediaContainer-skmvlj-0 krAWpL">
                      <div className="MediaBlock__MediaContent-skmvlj-1 bgzWtF">
                        <span
                          data-testid="price-history-attribution-desktop-source"
                          className="Text__TextBase-sc-1cait9d-0 iTXUhg"
                        >
                          GLVAR #2389089
                        </span>
                      </div>
                      <button
                        type="button"
                        data-testid="expand-button"
                        aria-label="Show Details"
                        aria-expanded="false"
                        theme="light"
                        className="FloatingActionButton-sc-6olq4f-0 jLkiXh"
                      >
                        <div class="getUiSvgContainer__SvgContainer-sc-1cdn1ln-0 GMFpC">
                          <svg
                            role="img"
                            aria-label=""
                            aria-hidden="true"
                            class="svg"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z"
                              fill="#869099"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr
                  className="Table__TableRow-latbb5-0 cdWvbO"
                  style={{ display: "none" }}
                >
                  <td
                    width="auto"
                    colspan="4"
                    className="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl class="Grid__GridContainer-sc-144isrp-1 cSOwYb">
                      <div
                        width="0.5,0.5,0.5,0.5,0.25"
                        className="Grid__CellBox-sc-144isrp-0 iwrZDM"
                      >
                        <dt className="Text__TextBase-sc-1cait9d-0-div Text__TextContainerBase-sc-1cait9d-1 gzoTrA gUnlde">
                          Recording Date
                        </dt>
                        <dd
                          className="Text__TextBase-sc-1cait9d-0-div Text__TextContainerBase-sc-1cait9d-1 csrRqu gUnlde"
                          style={{ margin: "0px" }}
                        >
                          08/01/2022
                        </dd>
                      </div>
                      <div
                        width="0.5,0.5,0.5,0.5,0.25"
                        class="Grid__CellBox-sc-144isrp-0 iwrZDM"
                      >
                        <dt class="Text__TextBase-sc-1cait9d-0-div Text__TextContainerBase-sc-1cait9d-1 gzoTrA gUnlde">
                          County Transfer Tax
                        </dt>
                        <dd
                          class="Text__TextBase-sc-1cait9d-0-div Text__TextContainerBase-sc-1cait9d-1 csrRqu gUnlde"
                          style={{ margin: "0px" }}
                        >
                          N/A
                        </dd>
                      </div>
                      <div
                        width="0.5,0.5,0.5,0.5,0.25"
                        class="Grid__CellBox-sc-144isrp-0 iwrZDM"
                      >
                        <dt class="Text__TextBase-sc-1cait9d-0-div Text__TextContainerBase-sc-1cait9d-1 gzoTrA gUnlde">
                          Total Transfer Tax
                        </dt>
                        <dd
                          class="Text__TextBase-sc-1cait9d-0-div Text__TextContainerBase-sc-1cait9d-1 csrRqu gUnlde"
                          style={{ margin: "0px" }}
                        >
                          N/A
                        </dd>
                      </div>
                    </dl>
                  </td>
                </tr>
                <tr class="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      04/20/2022
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      $365,000
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      Pending
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span
                      data-testid="price-history-attribution-desktop-source"
                      class="Text__TextBase-sc-1cait9d-0 iTXUhg"
                    >
                      GLVAR #2389089
                    </span>
                  </td>
                </tr>
                <tr
                  class="Table__TableRow-latbb5-0 cdWvbO"
                  style={{ display: "none" }}
                >
                  <td
                    width="auto"
                    colspan="4"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl class="Grid__GridContainer-sc-144isrp-1 cSOwYb"></dl>
                  </td>
                </tr>
                <tr class="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      04/20/2022
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      $365,000
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      Listed For Sale
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span
                      data-testid="price-history-attribution-desktop-source"
                      class="Text__TextBase-sc-1cait9d-0 iTXUhg"
                    >
                      GLVAR #2389089
                    </span>
                  </td>
                </tr>
                <tr
                  class="Table__TableRow-latbb5-0 cdWvbO"
                  style={{ display: "none" }}
                >
                  <td
                    width="auto"
                    colspan="4"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl class="Grid__GridContainer-sc-144isrp-1 cSOwYb"></dl>
                  </td>
                </tr>
                <tr class="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      10/29/2021
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  ></td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      ListingRemoved
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span
                      data-testid="price-history-attribution-desktop-source"
                      class="Text__TextBase-sc-1cait9d-0 iTXUhg"
                    >
                      GLVAR #2336041
                    </span>
                  </td>
                </tr>
                <tr
                  class="Table__TableRow-latbb5-0 cdWvbO"
                  style={{ display: "none" }}
                >
                  <td
                    width="auto"
                    colspan="4"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl class="Grid__GridContainer-sc-144isrp-1 cSOwYb"></dl>
                  </td>
                </tr>
                <tr class="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      10/19/2021
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      $350,000
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      Pending
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span
                      data-testid="price-history-attribution-desktop-source"
                      class="Text__TextBase-sc-1cait9d-0 iTXUhg"
                    >
                      GLVAR #2336041
                    </span>
                  </td>
                </tr>
                <tr
                  class="Table__TableRow-latbb5-0 cdWvbO"
                  style={{ display: "none" }}
                >
                  <td
                    width="auto"
                    colspan="4"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl class="Grid__GridContainer-sc-144isrp-1 cSOwYb"></dl>
                  </td>
                </tr>
                <tr class="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      10/13/2021
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      $350,000
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      PendingToActive
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span
                      data-testid="price-history-attribution-desktop-source"
                      class="Text__TextBase-sc-1cait9d-0 iTXUhg"
                    >
                      GLVAR #2336041
                    </span>
                  </td>
                </tr>
                <tr
                  class="Table__TableRow-latbb5-0 cdWvbO"
                  style={{ display: "none" }}
                >
                  <td
                    width="auto"
                    colspan="4"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl class="Grid__GridContainer-sc-144isrp-1 cSOwYb"></dl>
                  </td>
                </tr>
                <tr class="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      10/08/2021
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      $350,000
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      Pending
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span
                      data-testid="price-history-attribution-desktop-source"
                      class="Text__TextBase-sc-1cait9d-0 iTXUhg"
                    >
                      GLVAR #2336041
                    </span>
                  </td>
                </tr>
                <tr
                  class="Table__TableRow-latbb5-0 cdWvbO"
                  style={{ display: "none" }}
                >
                  <td
                    width="auto"
                    colspan="4"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl class="Grid__GridContainer-sc-144isrp-1 cSOwYb"></dl>
                  </td>
                </tr>
                <tr class="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      10/06/2021
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      $350,000
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      PendingToActive
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span
                      data-testid="price-history-attribution-desktop-source"
                      class="Text__TextBase-sc-1cait9d-0 iTXUhg"
                    >
                      GLVAR #2336041
                    </span>
                  </td>
                </tr>
                <tr
                  class="Table__TableRow-latbb5-0 cdWvbO"
                  style={{ display: "none" }}
                >
                  <td
                    width="auto"
                    colspan="4"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl class="Grid__GridContainer-sc-144isrp-1 cSOwYb"></dl>
                  </td>
                </tr>
                <tr class="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      10/05/2021
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      $350,000
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      Pending
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span
                      data-testid="price-history-attribution-desktop-source"
                      class="Text__TextBase-sc-1cait9d-0 iTXUhg"
                    >
                      GLVAR #2336041
                    </span>
                  </td>
                </tr>
                <tr
                  class="Table__TableRow-latbb5-0 cdWvbO"
                  style={{ display: "none" }}
                >
                  <td
                    width="auto"
                    colspan="4"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl class="Grid__GridContainer-sc-144isrp-1 cSOwYb"></dl>
                  </td>
                </tr>
                <tr class="Table__TableRow-latbb5-0 ezcNaI">
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      09/27/2021
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      $350,000
                    </span>
                  </td>
                  <td
                    width="auto"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span class="Text__TextBase-sc-1cait9d-0 iTXUhg">
                      Listed For Sale
                    </span>
                  </td>
                  <td
                    width="auto"
                    data-testid="price-history-attribution-desktop"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <span
                      data-testid="price-history-attribution-desktop-source"
                      class="Text__TextBase-sc-1cait9d-0 iTXUhg"
                    >
                      GLVAR #2336041
                    </span>
                  </td>
                </tr>
                <tr
                  class="Table__TableRow-latbb5-0 cdWvbO"
                  style={{ display: "none" }}
                >
                  <td
                    width="auto"
                    colspan="4"
                    class="Table__TableCellWrapper-latbb5-2 hPBAQA"
                  >
                    <dl class="Grid__GridContainer-sc-144isrp-1 cSOwYb"></dl>
                  </td>
                </tr>
              </table>
            </Grid>
            <Grid
              xs={8}
              style={{
                marginTop: "2rem",
                border: "1px solid lightgray",
                padding: "1rem",
              }}
            >
              <h5
                style={{
                  fontWeight: "600",
                  marginTop: "1rem",
                  marginBottom: "-3rem",
                }}
              >
                Similar Listings
              </h5>
              <ListingsCarousel ShowTitle={false} />
            </Grid>
            <Grid
              xs={8}
              style={{
                marginTop: "2rem",
                border: "1px solid lightgray",
                padding: "1rem",
              }}
            >
              <h5
                style={{
                  fontWeight: "600",
                  marginTop: "1rem",
                  marginBottom: "-3rem",
                }}
              >
                New Listings near 5654 Sheila Ave
              </h5>
              <ListingsCarousel ShowTitle={false} />
            </Grid>
            <Grid
              xs={8}
              style={{
                marginTop: "2rem",
                border: "1px solid lightgray",
                padding: "1rem",
              }}
            >
              <h5 style={{ fontWeight: "600", marginBottom: "-0.5rem" }}>
                Property Taxes and Assessment
              </h5>
              <Grid
                className="centerd-element"
                style={{ justifyContent: "space-between" }}
              >
                <Grid
                  className="centerd-element"
                  style={{
                    justifyContent: "center",
                    alignItems: "start",
                    flexDirection: "column",
                    fontWeight: "600",
                  }}
                >
                  <h6 style={{ fontSize: "1.1rem" }}>Year</h6>
                  <h6 style={{ fontSize: "1.1rem" }}>Tax</h6>
                  <h6 style={{ fontSize: "1.1rem" }}>Assessment</h6>
                </Grid>
                <Grid
                  className="centerd-element"
                  style={{
                    justifyContent: "center",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                  xs={5}
                >
                  <span style={{ padding: "1rem 0" }}>2022</span>
                  <span style={{ padding: "1rem 0" }}>$1,027</span>
                  <span style={{ padding: "1rem 0" }}>$198,826</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              xs={8}
              style={{
                marginTop: "2rem",
                border: "1px solid lightgray",
                padding: "1rem",
              }}
            >
              <h5 style={{ fontWeight: "600", marginBottom: "-0.5rem" }}>
                Price Trends
              </h5>
              <br />
              <span>For Homes in 89108</span>
              <Grid xs={6} container>
                <Grid xs={3}>
                  <FlagIcon
                    style={{ color: "gray", height: "7rem", width: "5rem" }}
                  />
                </Grid>
                <Grid xs={9}>
                  <h6>$323,692</h6>
                  <h6>Typical home value</h6>
                  <h6>
                    This home: $545,000{" "}
                    <span style={{ fontWeight: "600", marginLeft: "1rem" }}>
                      41% above
                    </span>
                  </h6>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              xs={8}
              style={{
                marginTop: "2rem",
                border: "1px solid lightgray",
                padding: "1rem",
              }}
            >
              <h5 style={{ fontWeight: "600" }}>
                Comparable Sales for 5654 Sheila Ave
              </h5>
              <Grid xs={12} style={{ margin: "1rem 0" }}>
                <NewMap mapHeight="40vh" mapWidth="52vw" />
                <table className="comparable-sales-table">
                  <tr className="comparable-sales-table-tr">
                    <th>Address</th>
                    <th>Distance</th>
                    <th>Property Type</th>
                    <th>Sold Price</th>
                    <th>Sold Date</th>
                    <th>Bed</th>
                    <th>Bath</th>
                    <th>Sqft</th>
                  </tr>
                  <tr className="comparable-sales-table-tr">
                    <td
                      style={{
                        color: "#1976D2",
                        borderBottom: "1px solid #1976D2",
                      }}
                    >
                      5621 Avenida Silla, Las Vegas, NV
                    </td>
                    <td>0.06</td>
                    <td>Single-Family Home</td>
                    <td>$580,000</td>
                    <td>03/23/22</td>
                    <td>4</td>
                    <td>3</td>
                    <td>2,403</td>
                  </tr>
                  <tr className="comparable-sales-table-tr">
                    <td
                      style={{
                        color: "#1976D2",
                        borderBottom: "1px solid #1976D2",
                      }}
                    >
                      5621 Avenida Silla, Las Vegas, NV
                    </td>
                    <td>0.06</td>
                    <td>Single-Family Home</td>
                    <td>$580,000</td>
                    <td>03/23/22</td>
                    <td>4</td>
                    <td>3</td>
                    <td>2,403</td>
                  </tr>
                  <tr className="comparable-sales-table-tr">
                    <td
                      style={{
                        color: "#1976D2",
                        borderBottom: "1px solid #1976D2",
                      }}
                    >
                      5621 Avenida Silla, Las Vegas, NV
                    </td>
                    <td>0.06</td>
                    <td>Single-Family Home</td>
                    <td>$580,000</td>
                    <td>03/23/22</td>
                    <td>4</td>
                    <td>3</td>
                    <td>2,403</td>
                  </tr>
                  <tr className="comparable-sales-table-tr">
                    <td
                      style={{
                        color: "#1976D2",
                        borderBottom: "1px solid #1976D2",
                      }}
                    >
                      5621 Avenida Silla, Las Vegas, NV
                    </td>
                    <td>0.06</td>
                    <td>Single-Family Home</td>
                    <td>$580,000</td>
                    <td>03/23/22</td>
                    <td>4</td>
                    <td>3</td>
                    <td>2,403</td>
                  </tr>
                  <tr className="comparable-sales-table-tr">
                    <td
                      style={{
                        color: "#1976D2",
                        borderBottom: "1px solid #1976D2",
                      }}
                    >
                      5621 Avenida Silla, Las Vegas, NV
                    </td>
                    <td>0.06</td>
                    <td>Single-Family Home</td>
                    <td>$580,000</td>
                    <td>03/23/22</td>
                    <td>4</td>
                    <td>3</td>
                    <td>2,403</td>
                  </tr>
                  <tr className="comparable-sales-table-tr">
                    <td
                      style={{
                        color: "#1976D2",
                        borderBottom: "1px solid #1976D2",
                      }}
                    >
                      5621 Avenida Silla, Las Vegas, NV
                    </td>
                    <td>0.06</td>
                    <td>Single-Family Home</td>
                    <td>$580,000</td>
                    <td>03/23/22</td>
                    <td>4</td>
                    <td>3</td>
                    <td>2,403</td>
                  </tr>
                </table>
              </Grid>
            </Grid>
            <Grid
              xs={8}
              style={{
                margin: "1rem 0",
                border: "1px solid lightgray",
                padding: "1rem",
              }}
            >
              <h5 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
                Neighborhood Overview
              </h5>
              <Grid xs={8} container>
                <Grid xs={4}>
                  <img
                    src="https://img.freepik.com/premium-vector/abstract-city-map-perspective-with-pin-pointers_163786-708.jpg"
                    alt="adasd"
                    width={170}
                    height={180}
                  />
                </Grid>
                <Grid xs={8}>
                  <h6
                    style={{
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "1.5rem",
                    }}
                  >
                    Michael Way
                  </h6>
                  <h6>
                    <FlagIcon
                      style={{
                        color: "gray",
                        marginRight: "0.5rem",
                        fontSize: "1.8rem",
                      }}
                    />
                    132 Homes For You
                  </h6>
                  <h6>
                    <SellIcon
                      style={{ color: "gray", marginRight: "0.5rem" }}
                    />
                    Buy: $110k - $1.85m
                  </h6>
                  <h6
                    style={{
                      fontWeight: "600",
                      color: "rgb(25, 118, 210)",
                      cursor: "pointer",
                    }}
                  >
                    See Local Highlights
                  </h6>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid xs={8} style={{ marginTop: "1rem" }}>
            <h5 style={{ fontWeight: "600" }}>
              What Locals Say about Michael Way
            </h5>
            <Grid container>
              <Grid xs={4} style={{ marginBottom: "1rem" }}>
                <div
                  className="centerd-element"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#1976D2",
                      backgroundColor: "rgba(25, 118, 210,0.2)",
                      padding: "0.7rem",
                      borderRadius: "1em",
                    }}
                  >
                    <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} /> 84%
                  </span>
                  <span>
                    <DirectionsWalkIcon
                      style={{
                        fontSize: "2rem",
                        marginRight: "0.3rem",
                        color: "gray",
                      }}
                    />
                    There are sidewalks
                  </span>
                </div>
              </Grid>
              <Grid xs={4} style={{ marginBottom: "1rem" }}>
                <div
                  className="centerd-element"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#1976D2",
                      backgroundColor: "rgba(25, 118, 210,0.2)",
                      padding: "0.7rem",
                      borderRadius: "1em",
                    }}
                  >
                    <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} /> 70%
                  </span>
                  <span>
                    <DirectionsCarFilledIcon
                      style={{
                        fontSize: "2rem",
                        marginRight: "0.3rem",
                        color: "gray",
                      }}
                    />
                    Car is Needed
                  </span>
                </div>
              </Grid>
              <Grid xs={4} style={{ marginBottom: "1rem" }}>
                <div
                  className="centerd-element"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#1976D2",
                      backgroundColor: "rgba(25, 118, 210,0.2)",
                      padding: "0.7rem",
                      borderRadius: "1em",
                    }}
                  >
                    <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} /> 67%
                  </span>
                  <span>
                    <LocalParking
                      style={{
                        fontSize: "2rem",
                        color: "gray",
                        marginRight: "0.3rem",
                      }}
                    />
                    Parking is Easy
                  </span>
                </div>
              </Grid>
              {seeMoreContent2 ? (
                <>
                  <Grid xs={4} style={{ marginBottom: "1rem" }}>
                    <div
                      className="centerd-element"
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#1976D2",
                          backgroundColor: "rgba(25, 118, 210,0.2)",
                          padding: "0.7rem",
                          borderRadius: "1em",
                        }}
                      >
                        <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} /> 84%
                      </span>
                      <span>
                        <DirectionsWalkIcon
                          style={{
                            fontSize: "2rem",
                            marginRight: "0.3rem",
                            color: "gray",
                          }}
                        />
                        There are sidewalks
                      </span>
                    </div>
                  </Grid>
                  <Grid xs={4} style={{ marginBottom: "1rem" }}>
                    <div
                      className="centerd-element"
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#1976D2",
                          backgroundColor: "rgba(25, 118, 210,0.2)",
                          padding: "0.7rem",
                          borderRadius: "1em",
                        }}
                      >
                        <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} /> 70%
                      </span>
                      <span>
                        <DirectionsCarFilledIcon
                          style={{
                            fontSize: "2rem",
                            marginRight: "0.3rem",
                            color: "gray",
                          }}
                        />
                        Car is Needed
                      </span>
                    </div>
                  </Grid>
                  <Grid xs={4} style={{ marginBottom: "1rem" }}>
                    <div
                      className="centerd-element"
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#1976D2",
                          backgroundColor: "rgba(25, 118, 210,0.2)",
                          padding: "0.7rem",
                          borderRadius: "1em",
                        }}
                      >
                        <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} /> 67%
                      </span>
                      <span>
                        <LocalParking
                          style={{
                            fontSize: "2rem",
                            color: "gray",
                            marginRight: "0.3rem",
                          }}
                        />
                        Parking is Easy
                      </span>
                    </div>
                  </Grid>

                  <Grid xs={4} style={{ marginBottom: "1rem" }}>
                    <div
                      className="centerd-element"
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#1976D2",
                          backgroundColor: "rgba(25, 118, 210,0.2)",
                          padding: "0.7rem",
                          borderRadius: "1em",
                        }}
                      >
                        <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} /> 84%
                      </span>
                      <span>
                        <DirectionsWalkIcon
                          style={{
                            fontSize: "2rem",
                            marginRight: "0.3rem",
                            color: "gray",
                          }}
                        />
                        There are sidewalks
                      </span>
                    </div>
                  </Grid>
                  <Grid xs={4} style={{ marginBottom: "1rem" }}>
                    <div
                      className="centerd-element"
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#1976D2",
                          backgroundColor: "rgba(25, 118, 210,0.2)",
                          padding: "0.7rem",
                          borderRadius: "1em",
                        }}
                      >
                        <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} /> 70%
                      </span>
                      <span>
                        <DirectionsCarFilledIcon
                          style={{
                            fontSize: "2rem",
                            marginRight: "0.3rem",
                            color: "gray",
                          }}
                        />
                        Car is Needed
                      </span>
                    </div>
                  </Grid>
                  <Grid xs={4} style={{ marginBottom: "1rem" }}>
                    <div
                      className="centerd-element"
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#1976D2",
                          backgroundColor: "rgba(25, 118, 210,0.2)",
                          padding: "0.7rem",
                          borderRadius: "1em",
                        }}
                      >
                        <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} /> 67%
                      </span>
                      <span>
                        <LocalParking
                          style={{
                            fontSize: "2rem",
                            color: "gray",
                            marginRight: "0.3rem",
                          }}
                        />
                        Parking is Easy
                      </span>
                    </div>
                  </Grid>
                  <Grid xs={4} style={{ marginBottom: "1rem" }}>
                    <div
                      className="centerd-element"
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#1976D2",
                          backgroundColor: "rgba(25, 118, 210,0.2)",
                          padding: "0.7rem",
                          borderRadius: "1em",
                        }}
                      >
                        <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} /> 84%
                      </span>
                      <span>
                        <DirectionsWalkIcon
                          style={{
                            fontSize: "2rem",
                            marginRight: "0.3rem",
                            color: "gray",
                          }}
                        />
                        There are sidewalks
                      </span>
                    </div>
                  </Grid>
                  <Grid xs={4} style={{ marginBottom: "1rem" }}>
                    <div
                      className="centerd-element"
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#1976D2",
                          backgroundColor: "rgba(25, 118, 210,0.2)",
                          padding: "0.7rem",
                          borderRadius: "1em",
                        }}
                      >
                        <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} /> 70%
                      </span>
                      <span>
                        <DirectionsCarFilledIcon
                          style={{
                            fontSize: "2rem",
                            marginRight: "0.3rem",
                            color: "gray",
                          }}
                        />
                        Car is Needed
                      </span>
                    </div>
                  </Grid>
                  <Grid xs={4} style={{ marginBottom: "1rem" }}>
                    <div
                      className="centerd-element"
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#1976D2",
                          backgroundColor: "rgba(25, 118, 210,0.2)",
                          padding: "0.7rem",
                          borderRadius: "1em",
                        }}
                      >
                        <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} /> 67%
                      </span>
                      <span>
                        <LocalParking
                          style={{
                            fontSize: "2rem",
                            color: "gray",
                            marginRight: "0.3rem",
                          }}
                        />
                        Parking is Easy
                      </span>
                    </div>
                  </Grid>
                </>
              ) : null}
              <button
                onClick={() => {
                  if (seeMoreContent2) {
                    setSeeMoreContent2(false);
                  } else {
                    setSeeMoreContent2(true);
                  }
                }}
                className="show-more-content-toggler-button"
              >
                See More{" "}
                {seeMoreContent2 ? (
                  <KeyboardArrowUpIcon style={{ color: "red" }} />
                ) : (
                  <KeyboardArrowDownIcon
                    style={{ color: "rgb(25, 118, 210)" }}
                  />
                )}
              </button>
            </Grid>
            <Grid container>
              <Grid xs={4}>
                <div
                  style={{
                    backgroundColor: "#03C988",
                    padding: "1.5rem",
                    borderRadius: "1.2em",
                    margin: "1rem",
                  }}
                >
                  <Grid className="centerd-element">
                    <Avatar
                      sx={{ width: 36, height: 36 }}
                      alt="Real Estate User"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    />
                    <div
                      style={{
                        marginLeft: "0.5rem",
                        color: "white",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "0.8rem" }}>
                        Real Estate User
                      </span>
                      <br />
                      <span style={{ fontSize: "0.8rem" }}>
                        Resident <span>&#8226;</span> 3mo ago
                      </span>
                    </div>
                  </Grid>
                  <Grid style={{ marginBottom: "1rem", padding: "0.5rem" }}>
                    <p
                      style={{ fontSize: "1.2rem", color: "white" }}
                      className="centerd-element"
                    >
                      "occasionally a dog off leash. I always leash my dog
                      because of this. Alot of people walk their dogs, every is
                      very friendly "
                    </p>
                  </Grid>
                  <Grid
                    className="centerd-element"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "end",
                    }}
                  >
                    <span style={{ color: "white" }}>
                      <InsertEmoticonIcon style={{ color: "white" }} /> 7
                    </span>
                    <span style={{ color: "white" }}>Flag</span>
                  </Grid>
                </div>
              </Grid>
              <Grid xs={4}>
                <div
                  style={{
                    backgroundColor: "#810CA8",
                    padding: "1.5rem",
                    borderRadius: "1.2em",
                    margin: "1rem",
                  }}
                >
                  <Grid className="centerd-element">
                    <Avatar
                      sx={{ width: 36, height: 36 }}
                      alt="Real Estate User"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    />
                    <div
                      style={{
                        marginLeft: "0.5rem",
                        color: "white",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "0.8rem" }}>
                        Real Estate User
                      </span>
                      <br />
                      <span style={{ fontSize: "0.8rem" }}>
                        Resident <span>&#8226;</span> 3mo ago
                      </span>
                    </div>
                  </Grid>
                  <Grid style={{ marginBottom: "1rem", padding: "0.5rem" }}>
                    <p
                      style={{ fontSize: "1.2rem", color: "white" }}
                      className="centerd-element"
                    >
                      "occasionally a dog off leash. I always leash my dog
                      because of this. Alot of people walk their dogs, every is
                      very friendly "
                    </p>
                  </Grid>
                  <Grid
                    className="centerd-element"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "end",
                    }}
                  >
                    <span style={{ color: "white" }}>
                      <InsertEmoticonIcon style={{ color: "white" }} /> 7
                    </span>
                    <span style={{ color: "white" }}>Flag</span>
                  </Grid>
                </div>
              </Grid>
              <Grid xs={4}>
                <div
                  style={{
                    backgroundColor: "#2F58CD",
                    padding: "1.5rem",
                    borderRadius: "1.2em",
                    margin: "1rem",
                  }}
                >
                  <Grid className="centerd-element">
                    <Avatar
                      sx={{ width: 36, height: 36 }}
                      alt="Real Estate User"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    />
                    <div
                      style={{
                        marginLeft: "0.5rem",
                        color: "white",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "0.8rem" }}>
                        Real Estate User
                      </span>
                      <br />
                      <span style={{ fontSize: "0.8rem" }}>
                        Resident <span>&#8226;</span> 3mo ago
                      </span>
                    </div>
                  </Grid>
                  <Grid style={{ marginBottom: "1rem", padding: "0.5rem" }}>
                    <p
                      style={{ fontSize: "1.2rem", color: "white" }}
                      className="centerd-element"
                    >
                      "occasionally a dog off leash. I always leash my dog
                      because of this. Alot of people walk their dogs, every is
                      very friendly "
                    </p>
                  </Grid>
                  <Grid
                    className="centerd-element"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "end",
                    }}
                  >
                    <span style={{ color: "white" }}>
                      <InsertEmoticonIcon style={{ color: "white" }} /> 7
                    </span>
                    <span style={{ color: "white" }}>Flag</span>
                  </Grid>
                </div>
              </Grid>
              <Grid className="centerd-element" xs={12}>
                <button
                  style={{
                    padding: "0.5rem 1rem",
                    color: "rgb(25, 118, 210)",
                    border: "1px solid rgb(25, 118, 210)",
                    fontWeight: "600",
                    marignTop: "1rem",
                  }}
                >
                  Add Your Review
                </button>
              </Grid>
            </Grid>
          </Grid> */}
            <Grid
              xs={8}
              style={{
                marginTop: "2rem",
                border: "1px solid lightgray",
                padding: "1rem",
              }}
            >
              <h5 style={{ fontWeight: "600", marginBottom: "1rem" }}>
                Mortgage Calculator
              </h5>
              <MortgageCalculator />
              {/* <Grid>
              <h6>
                Calculate your monthly mortgage payments <br /> Your est.
                payment: $3,621/month*
              </h6>
              <div
                className="centerd-element"
                style={{ justifyContent: "space-around" }}
              >
                <DonutChart size={300} />
                <div
                  className="centerd-element"
                  style={{
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <span>
                    <CircleIcon
                      style={{ color: "#4361EE", marginRight: "0.5rem" }}
                    />{" "}
                    Principal & Interest
                  </span>
                  <span>
                    <CircleIcon
                      style={{ color: "#4CC9F0", marginRight: "0.5rem" }}
                    />{" "}
                    Property Taxes
                  </span>
                  <span>
                    <CircleIcon
                      style={{ color: "#141517", marginRight: "0.5rem" }}
                    />{" "}
                    Home Insurance
                  </span>
                  <span>
                    <CircleIcon
                      style={{ color: "#4895EF", marginRight: "0.5rem" }}
                    />{" "}
                    Mortgage ins. & other
                  </span>
                  <div
                    className="centerd-element"
                    style={{ flexDirection: "column", marginTop: "1rem" }}
                  >
                    <button
                      style={{
                        padding: "0.5rem 5rem",
                        color: "white",
                        backgroundColor: "rgb(25, 118, 210)",
                        fontWeight: "600",
                      }}
                    >
                      Get Pre-Qualified
                    </button>
                    <br />
                    or
                    <br />
                    <span style={{ color: "rgb(25, 118, 210)" }}>
                      {" "}
                      See today's mortgage rates
                    </span>
                  </div>
                </div>
              </div>
            </Grid> */}
            </Grid>
            <Grid
              xs={8}
              style={{
                marginTop: "3rem",
                border: "1px solid lightgray",
                padding: "1rem",
              }}
            >
              <h5 style={{ fontWeight: "600", marginBottom: "1rem" }}>
                Contact an Agent
              </h5>
              <div
                className="centerd-element"
                style={{
                  justifyContent: "flex-start",
                  marginLeft: "1rem",
                  marginTop: "2rem",
                }}
              >
                <button
                  onClick={() => {
                    setScheduleATour(true);
                    setReqInfo(false);
                  }}
                  style={{
                    marginRight: "2rem",
                    color: "rgb(25, 118, 210)",
                    fontWeight: "600",
                  }}
                >
                  Schedule A Tour
                </button>
                <button
                  onClick={() => {
                    setScheduleATour(false);
                    setReqInfo(true);
                  }}
                  style={{
                    marginLeft: "2rem",
                    color: "rgb(25, 118, 210)",
                    fontWeight: "600",
                  }}
                >
                  Request Info
                </button>
              </div>
              {scheduleATour ? (
                <Grid
                  style={{ marginTop: "2rem", justifyContent: "space-between" }}
                  container
                  className="centerd-element"
                >
                  <Grid xs={4}>
                    <img src={ReqTourPic} alt="" width="400" height="400" />
                  </Grid>
                  <Grid
                    xs={7}
                    className="centerd-element"
                    style={{
                      flexDirection: "column",
                      padding: "0 1rem",
                      overflow: "auto",
                    }}
                  >
                    <h5>Schedule A Tour</h5>
                    <div className="centerd-element">
                      <span style={{ marginRight: "1rem" }}>Your Tour: </span>
                      <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChangeAlignment}
                        aria-label="Platform"
                      >
                        <ToggleButton value="web">In-Person</ToggleButton>
                        <ToggleButton value="android">Video Chat</ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                    <FormControl required sx={{ m: 1, minWidth: 250 }}>
                      <InputLabel id="demo-simple-select-required-label">
                        Time
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={age}
                        label="Time *"
                        onChange={handleChangeAge}
                      >
                        <MenuItem value={8}>8:00 AM</MenuItem>
                        <MenuItem value={10}>10:00 AM</MenuItem>
                        <MenuItem value={20}>3:00 PM</MenuItem>
                        <MenuItem value={30}>8:00 PM</MenuItem>
                      </Select>
                      <br />
                      <TextField
                        required
                        id="outlined-required"
                        label="Full Name"
                        defaultValue=""
                      />
                      <br />
                      <TextField
                        required
                        id="outlined-required"
                        label="Phone Number"
                        defaultValue=""
                      />
                      <br />
                      <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        defaultValue=""
                      />
                      <br />
                      <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                      />
                      <br />
                      <button
                        style={{
                          padding: "0.5rem 3rem",
                          color: "white",
                          backgroundColor: "rgb(25, 118, 210)",
                          fontWeight: "600",
                        }}
                      >
                        Schedule a Tour
                      </button>
                      <p style={{ fontSize: "11px", marginTop: "2rem" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Blanditiis voluptas corrupti quod nihil culpa
                        suscipit nemo quos eligendi labore dolor?
                      </p>
                    </FormControl>
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  container
                  className="centerd-element"
                  style={{
                    justifyContent: "space-between",
                    padding: "2rem",
                    alignItems: "baseline",
                  }}
                >
                  <Grid
                    xs={6}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      flexDirection: "column",
                    }}
                  >
                    <label>Phone Number</label>
                    <TextField
                      style={{ width: "90%", marginBottom: "0.5rem" }}
                      required
                      id="outlined-required"
                      label="Phone Number"
                      defaultValue=""
                    />
                    <br />
                    <label>Email</label>
                    <TextField
                      style={{ width: "90%", margin: "0.5rem 0" }}
                      required
                      id="outlined-required"
                      label="Email"
                      defaultValue=""
                    />
                    <br />
                  </Grid>
                  <Grid
                    xs={6}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    <label>Message</label>
                    <TextField
                      style={{ width: "100%", marginBottom: "1rem" }}
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={8}
                    />
                    <button
                      style={{
                        padding: "0.5rem 3rem",
                        color: "white",
                        backgroundColor: "rgb(25, 118, 210)",
                        fontWeight: "600",
                        width: "100%",
                        margin: "2rem 0",
                      }}
                    >
                      Request More Info
                    </button>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="I want to talk about financing"
                    />
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ListingPage;
