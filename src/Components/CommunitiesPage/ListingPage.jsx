import React, { useState } from "react";
import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "../api/mlsdata";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import CollectionsIcon from "@mui/icons-material/Collections";
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
import { fontSize } from "@mui/system";
import GalleryTabs from "../LandingPage/Communities/GalleryTabs";
import ListingsCarousel from "../LandingPage/ListingsCarousel/ListingsCarousel";
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

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const ListingPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleColorchange = () => {
    setIsActive((current) => !current);
  };
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
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
          <ImageList
            style={{ marginTop: "1rem" }}
            sx={{ width: 1100, height: 405 }}
            variant="quilted"
            cols={4}
            rowHeight={200}
            className="image-list-component image-wrapper"
          >
            <div className="forSaleIcon">FOR SALE</div>
            <div className="shareAndSaveIcon">
              <div className="shareIcon centerd-element">
                <IosShareIcon
                  style={{
                    marginRight: "0.3rem",
                    paddingBottom: "0.1rem",

                    cursor: "pointer",
                    color: "gray",
                  }}
                />
                Share
              </div>
              <div className="saveIcon centerd-element">
                <FavoriteIcon
                  style={{
                    marginRight: "0.3rem",
                    paddingBottom: "0.1rem",
                    cursor: "pointer",
                    color: isActive ? "red" : "gray",
                  }}
                  onClick={handleColorchange}
                />
                Save
              </div>
            </div>
            <div className=" galleryIcon centerd-element">
              <CollectionsIcon
                style={{
                  marginRight: "0.3rem",
                  paddingBottom: "0.1rem",
                  cursor: "pointer",
                  color: "white",
                }}
              />
              13
            </div>
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
                className="image-list-item-component"
              >
                <img
                  {...srcset(item.img, 200, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Box sx={{ flexGrow: 1 }} className="centerd-element">
          <Grid
            container
            spacing={9}
            className="centerd-element"
            style={{ alignItems: "start" }}
          >
            <Grid className="" xs={5}>
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
            <Grid xs={3}>
              <h4 style={{ textAlign: "center" }}>
                Request a tour as early as <br />
                <span style={{ fontWeight: "600", textAlign: "center" }}>
                  Today at 10:00AM
                </span>
              </h4>
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
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} className="centerd-element">
          <Grid xs={8}>
            <h5 style={{ fontWeight: "600" }}>Locale Information</h5>
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
                <MapSearch mapHeight="40vh" mapWidth="45vw" />
                <h5 style={{ fontWeight: "600" }}>Description</h5>
                <p>
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
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <MapSearch mapHeight="40vh" mapWidth="45vw" />
              <h5 style={{ fontWeight: "600" }}>Description</h5>
              <p>
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
            </TabPanel>
            <TabPanel value={value} index={2}>
              <MapSearch mapHeight="40vh" mapWidth="45vw" />
              <h5 style={{ fontWeight: "600" }}>Description</h5>
              <p>
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
            </TabPanel>
          </Grid>
          <Grid xs={7}>
            <h5 style={{ fontWeight: "600" }}>Home Highlights</h5>
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
          {/* <Grid xs={7}>
            <h5 style={{ fontWeight: "600", marginTop: "1rem" }}>
              Home Details for 5654 Sheila Ave
            </h5>
          </Grid> */}
          <Grid xs={7}>
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
          <Grid xs={8}>
            <h4
              style={{
                fontWeight: "600",
                marginTop: "1rem",
                marginBottom: "-3rem",
              }}
            >
              Similar Homes You May Like
            </h4>
            <ListingsCarousel ShowTitle={false} />
          </Grid>
          <Grid xs={8}>
            <h4
              style={{
                fontWeight: "600",
                marginTop: "1rem",
                marginBottom: "-3rem",
              }}
            >
              New Listings near 5654 Sheila Ave
            </h4>
            <ListingsCarousel ShowTitle={false} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ListingPage;
