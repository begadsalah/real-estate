import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { propertyDetails } from "../../api/mlsdata";
import { styled } from "@mui/material/styles";
import CardComponent from "./CardComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(12),
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.3)",
    "&.Mui-selected": {
      color: "#ffa840",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);
function a11yProps(index) {
  return {
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`,
  };
}

const StyledTabs = ({ pageName, CardsNumber }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: CardsNumber,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: CardsNumber,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: CardsNumber,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          orientation="horizontal"
          variant="scrollable"
          aria-label="horizontal tabs example"
          sx={{ borderRight: 0 }}
          scrollButtons
        >
          {propertyDetails.map((item, index) => (
            <AntTab
              label={`${item.type} ${pageName}`}
              {...a11yProps({ index })}
              wrapped
              value={`${index}`}
            />
          ))}
        </TabList>
        {propertyDetails.map((item, index) => (
          <TabPanel value={`${index}`}>
            <Carousel
              // centerMode={true}
              arrows={false}
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {propertyDetails.map((item, index) => (
                <div
                  className="card-div-container listing-card-div styledTabs-card-div-container"
                  key={index}
                >
                  <CardComponent
                    housePics={item.image}
                    beds={item.beds}
                    baths={item.baths}
                    price={item.price}
                    sqft={item.sqft}
                    address={item.address}
                  />
                </div>
              ))}
            </Carousel>
          </TabPanel>
        ))}
        {/* {propertyDetails.map((item, index) => (
          <TabPanel value={`${index}`} className="cards-tab-panel">
            <CardComponent
              housePics={item.image}
              beds={item.beds}
              baths={item.baths}
              price={item.price}
              sqft={item.sqft}
              address={item.address}
              className="styled-tabs-card"
            />
          </TabPanel>
        ))}
        <TabList
          onChange={handleChange}
          orientation="horizontal"
          variant="scrollable"
          aria-label="horizontal tabs example"
          sx={{ borderRight: 0 }}
          scrollButtons
          wrapped
          id="styledTabList"
          indicator={{ backgroundColor: "white" }}
        >
          {propertyDetails.map((item, index) => (
            <StyledTab label={"\u2B24"} value={`${index}`} />
          ))}
        </TabList> */}
      </TabContext>
    </Box>
  );
};

export default StyledTabs;
