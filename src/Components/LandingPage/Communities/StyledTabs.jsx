import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { propertyDetails } from "../../api/mlsdata";
import { styled } from "@mui/material/styles";
import CardComponent from "./CardComponent";

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
      color: "#336B9F",
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

const StyledTabs = () => {
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
              label={item.type}
              {...a11yProps({ index })}
              wrapped
              value={`${index}`}
            />
          ))}
        </TabList>
        {propertyDetails.map((item, index) => (
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
            <CardComponent
              housePics={item.image}
              beds={item.beds}
              baths={item.baths}
              price={item.price}
              sqft={item.sqft}
              address={item.address}
              className="styled-tabs-card"
            />
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
        </TabList>
      </TabContext>
    </Box>
  );
};

export default StyledTabs;
