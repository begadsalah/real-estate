import * as React from "react";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardComponent from "./CardComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const propertyDetails = [
  {
    property: "1",
    type: "Single Family Homes",
    image: require("../../../assets/condo.jpg"),
    beds: "5",
    baths: "2",
    sqft: "3,225",
    address: `3700 Dean Drive #1302 Ventura, CA 93003`,
    price: "$735,000",
  },
  {
    property: "2",
    type: "Condos",
    image: require("../../../assets/house1.jpg"),
    beds: "3",
    baths: "1",
    sqft: "1,725",
    address: `532 Spoleto Drive
Pacific Palisades, CA 90272`,
    price: "$225,000",
  },
  {
    property: "3",
    type: "Townhomes",
    image: require("../../../assets/house2.jpg"),
    beds: "6",
    baths: "3",
    sqft: "3,560",
    address: `2261 Victoria Avenue
Oxnard, CA 93035`,
    price: "$825,000",
  },
  {
    property: "4",
    type: "Luxury Homes",
    image: require("../../../assets/house3.jpg"),
    beds: "2",
    baths: "1",
    sqft: "1,325",
    address: `2176 E Main Street #111
Ventura, CA 93001`,
    price: "$432,000",
  },
  {
    property: "5",
    type: "Luxury Condos",
    image: require("../../../assets/house4.jpg"),
    beds: "3",
    baths: "2",
    sqft: "2,201",
    address: `1322 Alessandro Drive
Newbury Park, CA 91320`,
    price: "$595,000",
  },
  {
    property: "6",
    type: "Gated Community Homes",
    image: require("../../../assets/house5.jpg"),
    beds: "4",
    baths: "2",
    sqft: "1,054",
    address: `119 N Driskill Street
Oxnard, CA 93030`,
    price: "$309,900",
  },
  {
    property: "7",
    type: "Pool Homes",
    image: require("../../../assets/house6.jpg"),
    beds: "5",
    baths: "2.5",
    sqft: "2,169",
    address: `591 Hollyburne Lane
Thousand Oaks, CA 91360`,
    price: "$622,000",
  },
  {
    property: "8",
    type: "Single Story Homes",
    image: require("../../../assets/house7.jpg"),
    beds: "3",
    baths: "1",
    sqft: "1,725",
    address: `532 Spoleto Drive
Pacific Palisades, CA 90272`,
    price: "$225,000",
  },
  {
    property: "9",
    type: "New Construction Homes",
    image: require("../../../assets/house8.jpg"),
    beds: "4",
    baths: "2",
    sqft: "2,540",
    address: `3700 Dean Drive #1302
Ventura, CA 93003`,
    price: "$445,000",
  },
  {
    property: "10",
    type: "Beachfront Homes",
    image: require("../../../assets/house9.jpg"),
    beds: "2",
    baths: "2",
    sqft: "2,905",
    address: `2531 Apple Lane #86
Oxnard, CA 93036`,
    price: "$821,000",
  },
  {
    property: "11",
    type: "Homes with Guest House",
    image: require("../../../assets/condo.jpg"),
    beds: "5",
    baths: "2",
    sqft: "3,225",
    address: `3700 Dean Drive #1302 Ventura, CA 93003`,
    price: "$735,000",
  },
  {
    property: "12",
    type: "Homes with Open Floorplan",
    image: require("../../../assets/house1.jpg"),
    beds: "3",
    baths: "1",
    sqft: "1,725",
    address: `532 Spoleto Drive
Pacific Palisades, CA 90272`,
    price: "$225,000",
  },
  {
    property: "13",
    type: "55+ Community Homes",
    image: require("../../../assets/house2.jpg"),
    beds: "6",
    baths: "3",
    sqft: "3,560",
    address: `2261 Victoria Avenue
Oxnard, CA 93035`,
    price: "$825,000",
  },
  {
    property: "14",
    type: "Golf Course Homes",
    image: require("../../../assets/house3.jpg"),
    beds: "2",
    baths: "1",
    sqft: "1,325",
    address: `2176 E Main Street #111
Ventura, CA 93001`,
    price: "$432,000",
  },
  {
    property: "15",
    type: "Horse Property",
    image: require("../../../assets/house4.jpg"),
    beds: "3",
    baths: "2",
    sqft: "2,201",
    address: `1322 Alessandro Drive
Newbury Park, CA 91320`,
    price: "$595,000",
  },
  {
    property: "16",
    type: "Main Level Master Homes",
    image: require("../../../assets/house5.jpg"),
    beds: "4",
    baths: "2",
    sqft: "1,054",
    address: `119 N Driskill Street
Oxnard, CA 93030`,
    price: "$309,900",
  },
  {
    property: "17",
    type: "Multi Family Homes",
    image: require("../../../assets/house6.jpg"),
    beds: "5",
    baths: "2.5",
    sqft: "2,169",
    address: `591 Hollyburne Lane
Thousand Oaks, CA 91360`,
    price: "$622,000",
  },
  {
    property: "18",
    type: "Duplex",
    image: require("../../../assets/house7.jpg"),
    beds: "3",
    baths: "1",
    sqft: "1,725",
    address: `532 Spoleto Drive
Pacific Palisades, CA 90272`,
    price: "$225,000",
  },
  {
    property: "19",
    type: "Triplex",
    image: require("../../../assets/house8.jpg"),
    beds: "4",
    baths: "2",
    sqft: "2,540",
    address: `3700 Dean Drive #1302
Ventura, CA 93003`,
    price: "$445,000",
  },
  {
    property: "20",
    type: "Quadruplex",
    image: require("../../../assets/house9.jpg"),
    beds: "2",
    baths: "2",
    sqft: "2,905",
    address: `2531 Apple Lane #86
Oxnard, CA 93036`,
    price: "$821,000",
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`,
  };
}

const TabPanelComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 224,
        }}
        className="flex-col tab-box"
      >
        <Tabs
          orientation="horizontal"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="horizontal tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {propertyDetails.map((item, index) => (
            <Tab label={item.type} {...a11yProps({ index })} wrapped />
          ))}
        </Tabs>
        {propertyDetails.map((item, index) => (
          <>
            <TabPanel value={value} index={index} key={`key-${index}`}>
              <Row>
                <Col xs={12} sm={12} md={4}>
                  <CardComponent
                    key={index}
                    housePics={item.image}
                    beds={item.beds}
                    baths={item.baths}
                    price={item.price}
                    sqft={item.sqft}
                    address={item.address}
                  />
                </Col>
              </Row>
            </TabPanel>
          </>
        ))}
      </Box>
    </Container>
  );
};

export default TabPanelComponent;
