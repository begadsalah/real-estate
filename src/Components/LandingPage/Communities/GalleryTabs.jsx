import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CommunitiesObj } from "../../api/mlsdata";
import { propertyDetails } from "../../api/mlsdata";
import CardComponent from "./CardComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Test from "./Test";
import MapSearch from "../../MapSearch/MapSearch";
import Button from "@mui/material/Button";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const GalleryTabs = ({ areaFromParent }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
            icon={<ListIcon />}
            label="List"
            {...a11yProps(1)}
            iconPosition="start"
          />
          <Tab
            icon={<LocationOnIcon />}
            label="Map"
            {...a11yProps(2)}
            iconPosition="start"
          />
          <Tab disabled />
          <Tab disabled />
          <Button variant="outlined" style={{ marginRight: "0.3rem" }}>
            <NotificationsActiveIcon />
            Get Alerts!
          </Button>
          <Button variant="contained">
            <SearchIcon /> Refine Results
          </Button>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Test
          areaFromParent={areaFromParent}
          size={6}
          numberOfCoulmns={24}
          fullTheme={false}
          ShowUpperPagintaion={true}
        />
        {/* {CommunitiesObj.filter(
          (item) => item.pageId === `${areaFromParent}`
        ).map((CountyItem, index) => (
          <Container>
            <Row>
              {CountyItem.properties.map((propItem, index) => (
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardComponent
                    key={index}
                    housePics={propItem.image}
                    beds={propItem.beds}
                    baths={propItem.baths}
                    price={propItem.price}
                    sqft={propItem.sqft}
                    address={propItem.address}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        ))} */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Test
          areaFromParent={areaFromParent}
          size={12}
          numberOfCoulmns={12}
          fullTheme={true}
          ShowUpperPagintaion={true}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MapSearch />
        <br />
        <br />
        <Test
          areaFromParent={areaFromParent}
          size={6}
          numberOfCoulmns={6}
          fullTheme={false}
          ShowUpperPagintaion={false}
        />
      </TabPanel>
      <div className="contact-form-main-div">
        <form action="">
          <Container>
            <Row>
              <Col>
                <label htmlFor="">
                  First Name:<sup class="star">*</sup>
                </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Your Firstname.."
                />
              </Col>
              <Col>
                <label htmlFor="">
                  Last Name:<sup class="star">*</sup>
                </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Your Lastname.."
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="">
                  Email Address:<sup class="star">*</sup>
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Your Email.."
                />
              </Col>
              <Col>
                <label htmlFor="">
                  Phone<sup class="star">*</sup>
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone number.."
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="">I am Interested in:</label>
                <select id="#" name="interstedIn">
                  <option value="australia">Buying</option>
                  <option value="australia">Selling</option>
                  <option value="australia">Buying & Selling</option>
                  <option value="australia">Leasing</option>
                  <option value="australia">Broker / Agent</option>
                </select>
              </Col>
              <Col>
                <label htmlFor="">Property Type:</label>
                <select id="#" name="PropertyType">
                  {propertyDetails.map((item, index) => (
                    <option value={`${item.type}`} key={index}>
                      {item.type}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="">Bedrooms:</label>
                <select id="#" name="Bedrooms">
                  <option value="australia">Any</option>
                  <option value="australia">1</option>
                  <option value="australia">2</option>
                  <option value="australia">3</option>
                  <option value="australia">4</option>
                  <option value="australia">5</option>
                  <option value="australia">6</option>
                </select>
              </Col>
              <Col>
                <label htmlFor="">Bathrooms:</label>
                <select id="#" name="Bathrooms">
                  <option value="australia">Any</option>
                  <option value="australia">1</option>
                  <option value="australia">2</option>
                  <option value="australia">3</option>
                  <option value="australia">4</option>
                  <option value="australia">5</option>
                  <option value="australia">6</option>
                </select>
              </Col>
              <Col>
                <label htmlFor="">Min Price:</label>
                <select id="#" name="Min">
                  <option value="australia">No Min</option>
                  <option value="australia">$50,000</option>
                  <option value="australia">$150,000</option>
                  <option value="australia">$250,000</option>
                  <option value="australia">$350,000</option>
                  <option value="australia">$450,000</option>
                  <option value="australia">$550,000</option>
                  <option value="australia">$650,000</option>
                  <option value="australia">$750,000</option>
                  <option value="australia">$850,000</option>
                  <option value="australia">$950,000</option>
                  <option value="australia">$1M</option>
                  <option value="australia">$1.5M</option>
                  <option value="australia">$2M</option>
                  <option value="australia">$3M+</option>
                </select>
              </Col>
              <Col>
                <label htmlFor="">Max Price:</label>
                <select id="#" name="Max">
                  <option value="australia">No Max</option>
                  <option value="australia">$50,000</option>
                  <option value="australia">$150,000</option>
                  <option value="australia">$250,000</option>
                  <option value="australia">$350,000</option>
                  <option value="australia">$450,000</option>
                  <option value="australia">$550,000</option>
                  <option value="australia">$650,000</option>
                  <option value="australia">$750,000</option>
                  <option value="australia">$850,000</option>
                  <option value="australia">$950,000</option>
                  <option value="australia">$1M</option>
                  <option value="australia">$1.5M</option>
                  <option value="australia">$2M</option>
                  <option value="australia">$3M+</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="">Questions / Where Are You Looking?</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={{ height: "100px" }}
                ></textarea>
              </Col>
            </Row>
            <Row>
              <Col className="contact-form-main-div">
                <input
                  type="submit"
                  value="Submit"
                  style={{
                    width: "50%",
                    margin: "1rem 0",
                    color: "white",
                    backgroundColor: "#336b9f",
                  }}
                ></input>
              </Col>
            </Row>
          </Container>
        </form>
        <p style={{ fontSize: "12px", padding: "1rem 0" }}>
          By proceeding, you expressly consent to receive calls and texts at the
          number you provided, including marketing by auto-dialer, pre-recorded
          or artificial voice, and email, from Matiah Fischer LLC about real
          estate related matters, but not as a condition of purchase. Message
          frequency varies. You can text Help for help and Stop to cancel. You
          also agree to our Terms of Service and to our Privacy Policy regarding
          the information relating to you. Message and data rates may apply.
          This consent applies even if you are on a corporate, state or national
          Do Not Call list.
          <br />
          <br />
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </Box>
  );
};

export default GalleryTabs;
