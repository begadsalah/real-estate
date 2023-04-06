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
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import StarIcon from "@mui/icons-material/Star";
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
        document.documentElement.scrollTop < 4500)
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
  const [value1, setValue1] = useState(0);
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
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
              style={{ justifyContent: "flex-start", marginTop: "0rem" }}
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
            <div>
              <h5 style={{ fontWeight: "600", marginTop: "1.5rem" }}>
                Property Description
              </h5>
              <p style={{ maxWidth: "52vw" }}>
                Must see this large Las Vegas two story home on just under a
                half-acre lot in this custom home neighborhood!! Perfect for a
                large family! Huge Backyard is a blank slate with space for a
                pool, guesthouse or an additional garage for all your toys! RV!
                Zoned for horses! Home has been updated with two new air
                conditioners, new roof, new paint inside and out! New kitchen
                countertops, appliances with a view of the backyard! Updated
                bathrooms! New tile and carpet throughout! Four large bedrooms
                with an optional fifth or a den downstairs along with family
                room, living room and a dining room off the kitchen! New front
                yard desert landscaping! Perfect home for your large family!
                Don't hesitate or it will be gone!! Hard to find lot at this
                price
              </p>
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
                justifyContent: "flex-start",
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
                style={{
                  justifyContent: "flex-start",
                  alignItems: "start",
                  flexDirection: "column",
                }}
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
                    <KeyboardArrowUpIcon style={{ color: "#eeeeee" }} />
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
                Walking & Transportation
              </h3>
              <Grid
                container
                className="centerd-element"
                style={{
                  marginTop: "-0.8rem",
                  justifyContent: "space-between",
                }}
              >
                <Grid
                  xs={3}
                  style={{
                    border: "1px solid #eeeeee",
                    padding: "0.5rem",
                    flexDirection: "column",
                    height: "130px",
                  }}
                  className="centerd-element"
                >
                  <h1
                    style={{ color: "#1976D2", fontWeight: "600" }}
                    className="centerd-element"
                  >
                    <DirectionsWalkIcon
                      style={{
                        color: "gray",
                        fontSize: "3rem",
                      }}
                    />
                    5
                  </h1>
                  <h6 style={{ color: "#1976D2", fontWeight: "600" }}>
                    CAR-DEPENDENT
                  </h6>
                  <p style={{ color: "gray", fontSize: "0.85rem" }}>
                    Walk Score &#x24C7;
                  </p>
                </Grid>
                <Grid
                  xs={3}
                  style={{
                    border: "1px solid #eeeeee",
                    padding: "0.5rem",
                    flexDirection: "column",
                    height: "130px",
                  }}
                  className="centerd-element"
                >
                  <h1
                    style={{ color: "#1976D2", fontWeight: "600" }}
                    className="centerd-element"
                  >
                    <DirectionsBusIcon
                      style={{
                        color: "gray",
                        fontSize: "3rem",
                        marginRight: "1rem",
                      }}
                    />
                    1
                  </h1>
                  <h6 style={{ color: "#1976D2", fontWeight: "600" }}>
                    NEARBY TRANSIT
                  </h6>
                  <p style={{ color: "gray", fontSize: "0.85rem" }}>
                    Transit Score &#9415;
                  </p>
                </Grid>
                <Grid
                  xs={3}
                  style={{
                    border: "1px solid #eeeeee",
                    padding: "0.5rem",
                    flexDirection: "column",
                    height: "130px",
                  }}
                  className="centerd-element"
                >
                  <h1
                    style={{ color: "#1976D2", fontWeight: "600" }}
                    className="centerd-element"
                  >
                    <DirectionsBikeIcon
                      style={{
                        color: "gray",
                        fontSize: "3rem",
                        marginRight: "1rem",
                      }}
                    />
                    16
                  </h1>
                  <h6
                    style={{
                      color: "#1976D2",
                      fontWeight: "600",
                      textAlign: "center",
                      fontSize: "0.95rem",
                    }}
                  >
                    SOMEWHAT BIKEABLE
                  </h6>
                  <p style={{ color: "gray", fontSize: "0.85rem" }}>
                    Bike Score &#9415;
                  </p>
                </Grid>
                <Grid xs={12} style={{ marginTop: "1rem" }}>
                  <div>
                    <p
                      style={{
                        color: "gray",
                        fontSize: "1rem",
                        padding: "1rem",
                        borderLeft: "3px solid #1976D2",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error non unde modi omnis qui dolor, debitis autem ratione
                      at tenetur.
                    </p>
                  </div>
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
                Nearby Schools
              </h3>
              <p>
                Contact the school or district directly to verify enrollment
                eligibility
              </p>
              <Tabs
                className="basic-tabs "
                value={value1}
                onChange={handleChange1}
                aria-label="basic tabs example"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Tab
                  label="Nearby Schools"
                  {...a11yProps(0)}
                  style={{ fontWeight: "600" }}
                />
                <Tab
                  label="Elementary"
                  {...a11yProps(1)}
                  style={{ fontWeight: "600" }}
                />
                <Tab
                  label="Middle"
                  {...a11yProps(2)}
                  style={{ fontWeight: "600" }}
                />
                <Tab
                  label="High"
                  {...a11yProps(3)}
                  style={{ fontWeight: "600" }}
                />
                <Tab
                  label="Private"
                  {...a11yProps(4)}
                  style={{ fontWeight: "600" }}
                />
              </Tabs>
              <TabPanel value={value1} index={0}>
                <Grid container style={{ marginTop: "1.5rem" }}>
                  <Grid style={{ padding: "0 0.5rem" }}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Rating
                    </h6>
                    <ul>
                      <li
                        style={{
                          padding: "0.5rem 0",
                        }}
                      >
                        <div
                          style={{
                            border: "2px solid rgb(25, 118, 210)",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "41px",
                            height: "41px",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "600",
                              fontSize: "1.1rem",
                            }}
                          >
                            2
                          </span>
                          /10
                        </div>
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                        }}
                      >
                        <div
                          style={{
                            border: "2px solid rgb(25, 118, 210)",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "41px",
                            height: "41px",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "600",
                              fontSize: "1.1rem",
                            }}
                          >
                            5
                          </span>
                          /10
                        </div>
                      </li>
                      <li
                        style={{
                          padding: "0.5rem 0",
                        }}
                      >
                        <div
                          style={{
                            border: "2px solid rgb(25, 118, 210)",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "41px",
                            height: "41px",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "600",
                              fontSize: "1.1rem",
                            }}
                          >
                            7
                          </span>
                          /10
                        </div>
                      </li>
                    </ul>
                  </Grid>
                  <Grid style={{ padding: "0 0.5rem" }}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      School Name
                    </h6>
                    <ul>
                      <li
                        style={{
                          padding: "1.2rem 0.5rem",

                          color: "rgb(25, 118, 210)",
                          fontWeight: "600",
                        }}
                      >
                        First School Name
                      </li>
                      <li
                        style={{
                          padding: "1.2rem 0.5rem",

                          color: "rgb(25, 118, 210)",
                          fontWeight: "600",
                        }}
                      >
                        Second School Name
                      </li>
                      <li
                        style={{
                          padding: "1.2rem 0.5rem",

                          color: "rgb(25, 118, 210)",
                          fontWeight: "600",
                        }}
                      >
                        Third School Name
                      </li>
                    </ul>
                  </Grid>
                  <Grid style={{ padding: "0 0.5rem" }}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Grades
                    </h6>
                    <ul>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "1.2rem 0.5rem",
                        }}
                      >
                        PK-5
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "1.2rem 0.5rem",
                        }}
                      >
                        6-7
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "1.2rem 0.5rem",
                        }}
                      >
                        7-9
                      </li>
                    </ul>
                  </Grid>
                  <Grid style={{ padding: "0 0.5rem" }}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Type
                    </h6>
                    <ul>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "1.2rem 0.5rem",
                        }}
                      >
                        Public
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "1.2rem 0.5rem",
                        }}
                      >
                        Public
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "1.2rem 0.5rem",
                        }}
                      >
                        Public
                      </li>
                    </ul>
                  </Grid>
                  <Grid style={{ padding: "0 0.5rem" }}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Students
                    </h6>
                    <ul>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "1.2rem 0.5rem",
                        }}
                      >
                        1266
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "1.2rem 0.5rem",
                        }}
                      >
                        6921
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "1.2rem 0.5rem",
                        }}
                      >
                        4991
                      </li>
                    </ul>
                  </Grid>
                  <Grid style={{ padding: "0 0.5rem" }}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Reviews
                    </h6>
                    <ul
                      className="centerd-element"
                      style={{ flexDirection: "column" }}
                    >
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "0.2rem",
                        }}
                      >
                        <div>
                          <StarIcon
                            style={{
                              color: "#F0B215",
                              fontSize: "1.3rem",
                            }}
                          />
                          <StarIcon
                            style={{
                              color: "#F0B215",
                              fontSize: "1.3rem",
                            }}
                          />
                          <StarIcon
                            style={{
                              color: "gray",
                              fontSize: "1.3rem",
                            }}
                          />
                          <StarIcon
                            style={{
                              color: "gray",
                              fontSize: "1.3rem",
                            }}
                          />
                          <StarIcon
                            style={{
                              color: "gray",
                              fontSize: "1.3rem",
                            }}
                          />
                        </div>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: "500",
                            color: "gray",
                          }}
                        >
                          4 reviews
                        </p>
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "0.2rem",
                        }}
                      >
                        <div>
                          <StarIcon
                            style={{
                              color: "#F0B215",
                              fontSize: "1.3rem",
                            }}
                          />
                          <StarIcon
                            style={{
                              color: "#F0B215",
                              fontSize: "1.3rem",
                            }}
                          />
                          <StarIcon
                            style={{
                              color: "#F0B215",
                              fontSize: "1.3rem",
                            }}
                          />
                          <StarIcon
                            style={{
                              color: "gray",
                              fontSize: "1.3rem",
                            }}
                          />
                          <StarIcon
                            style={{
                              color: "gray",
                              fontSize: "1.3rem",
                            }}
                          />
                        </div>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: "500",
                            color: "gray",
                          }}
                        >
                          7 reviews
                        </p>
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "0.2rem",
                        }}
                      >
                        <div>
                          <StarIcon
                            style={{
                              color: "#F0B215",
                              fontSize: "1.3rem",
                            }}
                          />
                          <StarIcon
                            style={{
                              color: "#F0B215",
                              fontSize: "1.3rem",
                            }}
                          />
                          <StarIcon
                            style={{
                              color: "#F0B215",
                              fontSize: "1.3rem",
                            }}
                          />
                          <StarIcon
                            style={{
                              color: "#F0B215",
                              fontSize: "1.3rem",
                            }}
                          />
                          <StarIcon
                            style={{
                              color: "gray",
                              fontSize: "1.3rem",
                            }}
                          />
                        </div>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: "500",
                            color: "gray",
                          }}
                        >
                          12 reviews
                        </p>
                      </li>
                    </ul>
                  </Grid>
                  <Grid style={{ padding: "0 0.5rem" }}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Distance
                    </h6>
                    <ul>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "1.2rem 0.5rem",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        0.12 mi
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "1.2rem 0.5rem",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        0.34 mi
                      </li>
                      <li
                        style={{
                          fontWeight: "600",
                          padding: "1.2rem 0.5rem",
                          borderBottom: "1px solid #eeeeee",
                        }}
                      >
                        2.1 mi
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value1} index={1}></TabPanel>
              <TabPanel value={value1} index={2}></TabPanel>
              <TabPanel value={value1} index={3}></TabPanel>
              <TabPanel value={value1} index={4}></TabPanel>
              <p>
                Great Schools Rating are based on student performance on state
                tests, progress over time, and college readiness, in addition to
                how effectively schools serve students
                <br />
                <span
                  style={{
                    color: "#1976D2",
                    fontWeight: "600",
                    marginTop: "2rem",
                  }}
                >
                  CONTINUE READING <KeyboardArrowDownIcon />
                </span>
              </p>
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
              <ListingsCarousel
                ShowTitle={false}
                ItemsNumberBig={2}
                ItemsNumberMed={2}
                ItemsNumberSm={1}
              />
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
              <ListingsCarousel
                ShowTitle={false}
                ItemsNumberBig={2}
                ItemsNumberMed={2}
                ItemsNumberSm={1}
              />
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
