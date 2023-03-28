import React, { useState, useEffect } from "react";
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
import MapSearch from "../MapSearch/MapSearch";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import DeckIcon from "@mui/icons-material/Deck";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import TableViewIcon from "@mui/icons-material/TableView";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ListingsCarousel from "../LandingPage/ListingsCarousel/ListingsCarousel";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListingItemPopUp from "./ListingItemPopUp";
import MortgageCalculator from "./MortgageCalculator/MortgageCalculator";
import NavbarListingItem from "./NavbarListingItem";
import FullScheduleTourForm from "./FullScheduleTourForm";

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

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbarListingItem").style.top = "0";
  } else {
    document.getElementById("navbarListingItem").style.top = "-200px";
  }
};
let mainNav = document.querySelector(".main-nav");

function windowScroll() {
  mainNav.classList.toggle(
    "test",
    mainNav.scrollTop > 300 ||
      (document.documentElement.scrollTop > 300 &&
        document.documentElement.scrollTop < 4300)
  );
}
window.onscroll = function () {
  windowScroll();
  scrollFunction();
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
  return (
    <>
      <div id="navbarListingItem">
        <NavbarListingItem />
      </div>
      <Grid
        container
        className="centerd-element"
        style={{ marginBottom: "2rem" }}
        id="firstSection"
      >
        <div
          className="centerd-element"
          style={{ justifyContent: "flex-start", width: "82%" }}
        >
          <div style={{ marginRight: "2rem" }}>
            <Link to="/area-page" style={{ color: "#2FA8E6" }}>
              <WestIcon style={{ margin: "0 0.4rem" }} />
              Back to Search
            </Link>
          </div>
          <div style={{ paddingRight: "3rem" }}>
            <span>For Sale</span>
            <span style={{ margin: "0 0.4rem" }}>&#62;</span>
            <span style={{ color: "#2FA8E6" }}>State</span>
            <span style={{ margin: "0 0.4rem" }}>&#62;</span>
            <span style={{ color: "#2FA8E6" }}>City</span>
            <span style={{ margin: "0 0.4rem" }}>&#62;</span>
            <span style={{ color: "#2FA8E6" }}>Zip Code</span>
            <span style={{ margin: "0 0.4rem" }}>&#62;</span>
            <span style={{ color: "#2FA8E6" }}>Street Number, Street Name</span>
          </div>
        </div>
        <Grid
          xs={10}
          sm={10}
          md={10}
          lg={10}
          xl={10}
          className="centerd-element grid-div-gallery"
          style={{
            flexDirection: "column",
          }}
        >
          <ListingItemPopUp />
        </Grid>
        <Grid
          container
          xs={10}
          className="centerd-element"
          style={{ alignItems: "start", justifyContent: "flex-start" }}
        >
          <Grid xs={5} style={{ paddingLeft: "0.5rem" }}>
            <h4
              style={{
                fontWeight: "600",
                lineHeight: "1.6",
              }}
            >
              5654 Sheila Ave, Las Vegas, NV 89108
            </h4>
            <div
              className="card-body-content"
              style={{ justifyContent: "flex-start", marginLeft: "0rem" }}
            >
              <span
                className="houseCardInfo card-address centerd-element"
                style={{ marginRight: "0.5rem", fontSize: "1rem" }}
              >
                <KingBedIcon
                  style={{
                    color: "rgb(25, 118, 210)",
                    fontSize: "1.7rem",
                    marginRight: "0.3rem",
                  }}
                />
                5 Beds
              </span>
              <span
                className="houseCardInfo card-address centerd-element"
                style={{ marginRight: "0.5rem", fontSize: "1rem" }}
              >
                <BathtubIcon
                  style={{
                    color: "rgb(25, 118, 210)",
                    fontSize: "1.6rem",
                    marginRight: "0.3rem",
                  }}
                />
                2 Baths
              </span>
              <span
                className="houseCardInfo card-address centerd-element"
                style={{ marginRight: "0.5rem", fontSize: "0.9rem" }}
              >
                <SquareFootIcon
                  style={{
                    color: "rgb(25, 118, 210)",
                    fontSize: "1.7rem",
                    marginRight: "0.3rem",
                  }}
                />
                2,464 sqft (on 0.47 acres)
              </span>
            </div>
          </Grid>
          <Grid
            xs={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ padding: "0 1rem", marginTop: "0rem" }}>
              <h4 style={{ fontWeight: "600" }}>
                <span>$</span>745,000
              </h4>
              <h5>
                Est. Mortgage
                <br /> $4,375/mo*
              </h5>
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
            </div>
          </Grid>
          <Grid xs={4} style={{ marginTop: "-1rem" }}>
            <div
              style={{
                display: "grid",
                position: "absolute",
                justifyContent: "flex-end",
                alignItems: "start",
                marginTop: "0.4rem",
                padding: "0 1rem",
              }}
              className="main-nav"
            >
              <FullScheduleTourForm
                formWidth={"-webkit-fill-available"}
                formMarginRight={4}
                formMarginTop={-1}
                formMarginTop2={2}
                ShowScheduleButton={true}
                ShowReqInfoButton={true}
                scheduleInitialState={true}
                reqInitialState={false}
                heightOfForm={"65vh"}
              />
            </div>
          </Grid>
          <Grid
            xs={7}
            style={{
              paddingLeft: "0.5rem",
              marginBottom: "2rem",
            }}
            className="property-detailed-description"
          >
            <Grid>
              <div
                className="centerd-element"
                style={{
                  justifyContent: "start",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    justifyContent: "start",
                    marginBottom: "1rem",
                    borderBottom: "2.7px solid #eeeeee",
                    lineHeight: "2",
                    width: "100%",
                  }}
                  className="centerd-element"
                >
                  Property Location
                </h3>
              </div>
              <Grid
                className="centerd-element"
                style={{ justifyContent: "flex-start" }}
              >
                <div className="centerd-element">
                  <h6 style={{ fontWeight: "500" }}>
                    5654 Sheila Ave, Las Vegas, NV 89108
                  </h6>
                </div>
              </Grid>
              <Tabs
                className="basic-tabs "
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
                  <h5 style={{ fontWeight: "600", marginTop: "1.5rem" }}>
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
                <Grid>
                  <MapSearch mapHeight="40vh" mapWidth="52vw" />
                  <h5 style={{ fontWeight: "600", marginTop: "1.5rem" }}>
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
              <TabPanel value={value} index={2}>
                <Grid>
                  <MapSearch mapHeight="40vh" mapWidth="52vw" />
                  <h5 style={{ fontWeight: "600", marginTop: "1.5rem" }}>
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
            </Grid>
            <Grid
              style={{
                padding: "2rem 0",
                flexDirection: "column",
                display: "flex",
                alignItems: "stretch",
                justifyContent: "center",
              }}
            >
              <div
                className="centerd-element"
                style={{
                  justifyContent: "start",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    justifyContent: "start",
                    marginBottom: "1rem",
                    borderBottom: "2.7px solid #eeeeee",
                    lineHeight: "2",
                    width: "100%",
                  }}
                  className="centerd-element"
                >
                  Property Highlights
                </h3>
              </div>
              <Grid>
                <div
                  className="centerd-element"
                  style={{
                    justifyContent: "space-between",
                    borderBottom: "1px solid #eeeeee",
                    maxWidth: "600px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                      width: "100px",
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
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "0.7rem",
                      width: "100px",
                    }}
                  >
                    2 Car Garage
                  </span>
                  <span
                    style={{
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                      width: "100px",
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
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "0.7rem",
                      width: "100px",
                    }}
                  >
                    No Info
                  </span>
                </div>
                <div
                  className="centerd-element"
                  style={{
                    justifyContent: "space-between",
                    borderBottom: "1px solid #eeeeee",
                    maxWidth: "600px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                      width: "100px",
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
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "0.7rem",
                      width: "100px",
                    }}
                  >
                    Heating & Cooling
                  </span>
                  <span
                    style={{
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                      width: "100px",
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
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "0.7rem",
                      width: "100px",
                    }}
                  >
                    No HOA Fee
                  </span>
                </div>
                <div
                  className="centerd-element"
                  style={{
                    justifyContent: "space-between",
                    borderBottom: "1px solid #eeeeee",
                    maxWidth: "600px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                      width: "100px",
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
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "0.7rem",
                      width: "100px",
                    }}
                  >
                    $221
                  </span>
                  <span
                    style={{
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                      width: "100px",
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
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "0.7rem",
                      width: "100px",
                    }}
                  >
                    1 day ago
                  </span>
                </div>
              </Grid>
            </Grid>
            <Grid
              style={{
                padding: "2rem 0",
              }}
            >
              <h3
                style={{
                  fontWeight: "600",
                  justifyContent: "start",
                  marginBottom: "1rem",
                  borderBottom: "2.7px solid #eeeeee",
                  lineHeight: "2",
                  width: "100%",
                }}
                className="centerd-element"
              >
                Home Details for 5654 Sheila Ave
              </h3>
              <Grid>
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontWeight: "600",
                    marginBottom: "1.2rem",
                  }}
                >
                  Interior Features
                </h4>
                <Grid container>
                  <Grid xs={6}>
                    <h6 style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                      Interior Details
                    </h6>
                    <ul style={{ listStyleType: "disc", padding: "0 1.5rem" }}>
                      <li>
                        Number of Rooms:
                        <span
                          style={{ fontWeight: "600", marginLeft: "0.5rem" }}
                        >
                          5
                        </span>
                      </li>
                      <li>
                        Types of Rooms:
                        <span
                          style={{ fontWeight: "600", marginLeft: "0.5rem" }}
                        >
                          Kitchen
                        </span>
                      </li>
                    </ul>
                  </Grid>
                  <Grid xs={6}>
                    <h6 style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                      Beds & Baths
                    </h6>
                    <ul style={{ listStyleType: "disc", padding: "0 1.5rem" }}>
                      <li>
                        Number of Bedrooms:
                        <span
                          style={{ fontWeight: "600", marginLeft: "0.5rem" }}
                        >
                          4
                        </span>
                      </li>
                      <li>
                        Number of Bathrooms:
                        <span
                          style={{ fontWeight: "600", marginLeft: "0.5rem" }}
                        >
                          3
                        </span>
                      </li>
                      <li>
                        {" "}
                        Number of Bathrooms (full):
                        <span
                          style={{ fontWeight: "600", marginLeft: "0.5rem" }}
                        >
                          2
                        </span>
                      </li>
                      <li>
                        Number of Bathrooms (half):
                        <span
                          style={{ fontWeight: "600", marginLeft: "0.5rem" }}
                        >
                          1
                        </span>
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
              {seeMoreContent ? (
                <>
                  <Grid xs={12}>
                    <h4
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        fontWeight: "600",
                        marginBottom: "1.2rem",
                      }}
                    >
                      Exterior Features
                    </h4>
                    <Grid container>
                      <Grid xs={6}>
                        <h6 style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                          Exterior Home Features
                        </h6>
                        <ul
                          style={{
                            listStyleType: "disc",
                            padding: "0 1.5rem",
                          }}
                        >
                          <li>
                            Swimming Pool
                            <span
                              style={{
                                fontWeight: "600",
                                marginLeft: "0.5rem",
                              }}
                            >
                              Small
                            </span>
                          </li>
                          <li>
                            Parking spots
                            <span
                              style={{
                                fontWeight: "600",
                                marginLeft: "0.5rem",
                              }}
                            >
                              2
                            </span>
                          </li>
                          <li>
                            Dog house
                            <span
                              style={{
                                fontWeight: "600",
                                marginLeft: "0.5rem",
                              }}
                            >
                              2
                            </span>
                          </li>
                          <li>
                            Types of Rooms:
                            <span
                              style={{
                                fontWeight: "600",
                                marginLeft: "0.5rem",
                              }}
                            >
                              Kitchen
                            </span>
                          </li>
                        </ul>
                      </Grid>
                      <Grid xs={6}>
                        <h6 style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                          Parking & Garage
                        </h6>
                        <ul
                          style={{
                            listStyleType: "disc",
                            padding: "0 1.5rem",
                          }}
                        >
                          <li>
                            Spots
                            <span
                              style={{
                                fontWeight: "600",
                                marginLeft: "0.5rem",
                              }}
                            >
                              1
                            </span>
                          </li>
                          <li>
                            Number of Cars
                            <span
                              style={{
                                fontWeight: "600",
                                marginLeft: "0.5rem",
                              }}
                            >
                              3
                            </span>
                          </li>
                          <li>
                            Space (full):
                            <span
                              style={{
                                fontWeight: "600",
                                marginLeft: "0.5rem",
                              }}
                            >
                              30 m.sq
                            </span>
                          </li>
                          <li>
                            Condiotion (half):
                            <span
                              style={{
                                fontWeight: "600",
                                marginLeft: "0.5rem",
                              }}
                            >
                              good
                            </span>
                          </li>
                        </ul>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ) : null}
              <div
                style={{ width: "100%", paddingTop: "1rem" }}
                className="centerd-element"
              >
                <button
                  onClick={() => {
                    if (seeMoreContent) {
                      setSeeMoreContent(false);
                    } else {
                      setSeeMoreContent(true);
                    }
                  }}
                  className="show-more-content-toggler-button"
                  style={{
                    backgroundColor: "transparent",
                    padding: "0",
                  }}
                >
                  <span
                    style={{
                      borderBottom: "1px solid #1565C0",
                      lineHeight: "1",
                    }}
                  >
                    See More{" "}
                  </span>
                  {seeMoreContent ? (
                    <KeyboardArrowUpIcon style={{ color: "red" }} />
                  ) : (
                    <KeyboardArrowDownIcon
                      style={{ color: "rgb(25, 118, 210)" }}
                    />
                  )}
                </button>
              </div>
            </Grid>
            <Grid
              style={{
                padding: "2rem 0",
                marginTop: "-1.5rem",
              }}
            >
              <div
                className="centerd-element"
                style={{
                  justifyContent: "start",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    justifyContent: "start",
                    marginBottom: "-2rem",
                    borderBottom: "2.7px solid #eeeeee",
                    lineHeight: "2",
                    width: "100%",
                  }}
                  className="centerd-element"
                >
                  Similar Listings
                </h3>
              </div>

              <ListingsCarousel ShowTitle={false} />
            </Grid>
            <Grid
              style={{
                padding: "2rem 0",
                margin: "-2.5rem 0",
              }}
            >
              <div
                className="centerd-element"
                style={{
                  justifyContent: "start",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    justifyContent: "start",
                    marginBottom: "-2rem",
                    borderBottom: "2.7px solid #eeeeee",
                    lineHeight: "2",
                    width: "100%",
                  }}
                  className="centerd-element"
                >
                  New Listings Near 5654 Sheila Ave
                </h3>
              </div>
              <ListingsCarousel ShowTitle={false} />
            </Grid>
            <Grid
              style={{
                padding: "2rem 0",
              }}
            >
              <div
                className="centerd-element"
                style={{
                  justifyContent: "start",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    justifyContent: "start",
                    marginBottom: "1rem",
                    borderBottom: "2.7px solid #eeeeee",
                    lineHeight: "2",
                    width: "100%",
                  }}
                  className="centerd-element"
                >
                  Property Taxes and Assessment
                </h3>
              </div>
              <Grid>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    padding: "1rem 0",
                    fontWeight: "600",
                  }}
                >
                  Listing History
                </h4>
                <Grid container>
                  <Grid xs={4}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      DATE
                    </h6>
                    <ul>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        Dec 18, 2020
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        Dec 18, 2020
                      </li>
                    </ul>
                  </Grid>
                  <Grid xs={4}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      EVENT
                    </h6>
                    <ul>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        Home Sold
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        Home Sold
                      </li>
                    </ul>
                  </Grid>
                  <Grid xs={4}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      PRICE
                    </h6>
                    <ul>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $180,000
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $200,000
                      </li>
                    </ul>
                  </Grid>
                </Grid>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    padding: "1rem 0",
                    fontWeight: "600",
                  }}
                >
                  Taxes History
                </h4>
                <Grid container>
                  <Grid xs={4}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      YEAR
                    </h6>
                    <ul>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        2010
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        2013
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        2015
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        2016
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        2018
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        2021
                      </li>
                    </ul>
                  </Grid>
                  <Grid xs={4}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      PROR TAX
                    </h6>
                    <ul>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $5,001
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $4,001
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $5,001
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $4,001
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $5,001
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $4,001
                      </li>
                    </ul>
                  </Grid>
                  <Grid xs={4}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      ASSESSMENT
                    </h6>
                    <ul>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $180,000
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $200,000
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $180,000
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $200,000
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $180,000
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "0.5rem 0",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        $200,000
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              style={{
                padding: "2rem 0",
              }}
            >
              <h3
                style={{
                  fontWeight: "600",
                  justifyContent: "start",
                  marginBottom: "2rem",
                  borderBottom: "2.7px solid #eeeeee",
                  lineHeight: "2",
                  width: "100%",
                }}
                className="centerd-element"
              >
                Comparable Sales for 5654 Sheila Ave
              </h3>
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
                    }}
                  >
                    5621 Avenida Silla,
                    <br /> Las Vegas, NV
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
                    }}
                  >
                    5621 Avenida Silla,
                    <br /> Las Vegas, NV
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
                    }}
                  >
                    5621 Avenida Silla,
                    <br /> Las Vegas, NV
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
                    }}
                  >
                    5621 Avenida Silla,
                    <br /> Las Vegas, NV
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
                    }}
                  >
                    5621 Avenida Silla,
                    <br /> Las Vegas, NV
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
                    }}
                  >
                    5621 Avenida Silla,
                    <br /> Las Vegas, NV
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
            <Grid
              style={{
                padding: "2rem 0",
              }}
            >
              <div
                className="centerd-element"
                style={{
                  justifyContent: "start",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    justifyContent: "start",
                    marginBottom: "1rem",
                    borderBottom: "2.7px solid #eeeeee",
                    lineHeight: "2",
                    width: "100%",
                  }}
                  className="centerd-element"
                >
                  Mortgage Calculator
                </h3>
              </div>
              <MortgageCalculator />
            </Grid>
            <Grid
              style={{
                padding: "2rem 0",
                marginTop: "-1.5rem",
              }}
            >
              <div
                className="centerd-element"
                style={{
                  justifyContent: "start",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                    justifyContent: "start",
                    borderBottom: "2.7px solid #eeeeee",
                    lineHeight: "2",
                    width: "100%",
                  }}
                  className="centerd-element"
                >
                  Contact an Agent
                </h3>
              </div>

              <FullScheduleTourForm
                formWidth={"-webkit-fill-available"}
                formMarginRight={0}
                formMarginTop={-2.5}
                formMarginTop2={2}
                ShowScheduleButton={true}
                ShowReqInfoButton={true}
                scheduleInitialState={true}
                reqInitialState={false}
                heightOfForm={"fit-content"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          xs={10}
          style={{
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "flex-start",
            alignitems: "start",
            flexDirection: "column",
          }}
        >
          <h6 style={{ fontWeight: "600" }}>
            Listing Information Last updated 3/19/2023
          </h6>
          <p style={{ maxWidth: "600px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptas dolore fuga reiciendis nobis nesciunt nostrum consectetur
            eveniet numquam aperiam quod ea similique harum fugiat dignissimos
            ipsa quaerat, alias minus mollitia! Vel nisi perferendis laudantium
            at minima voluptatibus tenetur. Nisi amet temporibus asperiores
            necessitatibus sit.
          </p>
          <p style={{ maxWidth: "650px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptas dolore fuga reiciendis nobis nesciunt nostrum consectetur
            eveniet numquam aperiam quod ea similique harum fugiat dignissimos
            ipsa quaerat, alias minus mollitia! Vel nisi perferendis laudantium
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default ListingPage;
