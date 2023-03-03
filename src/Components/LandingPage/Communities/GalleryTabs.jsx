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
            <Row style={{ marginTop: "1.5rem" }}>
              <Col>
                <label htmlFor="">Type of Home:</label>
                <select id="#" name="PropertyType">
                  <option value="Single Family Home">Single Family Home</option>
                  <option value="Condominium">Condominium</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Multi-family">Multi-family</option>
                  <option value="Manufactured Home">Manufactured Home</option>
                  <option value="Land">Land</option>
                </select>
              </Col>
              <Col>
                <label htmlFor="">Price Range</label>
                <div className="price-range-divBox">
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
              </Col>
              <Col>
                <label htmlFor="">Moving When?</label>
                <select id="#" name="PropertyType">
                  <option value="asap">ASAP</option>
                  <option value="1 - 3 Months">1 - 3 Months</option>
                  <option value="3 - 6 Months">3 - 6 Months</option>
                  <option value="6 - 9 Months">6 - 9 Months</option>
                  <option value="9 - 12 Months">9 - 12 Months</option>
                  <option value="1+ Year">1+ Year</option>
                </select>
              </Col>
            </Row>
            <Row style={{ marginTop: "2rem" }}>
              <Col>
                <label htmlFor="">Are You Working with an Agent?</label>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Yes"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="No"
                />
              </Col>
              <Col>
                <label htmlFor="">Need to Speak with a Lender?</label>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Yes"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="No"
                />
              </Col>
              <Col>
                <label htmlFor="">Communication Preference </label>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Call"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Text"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Email"
                />
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <label htmlFor="">Questions / Where Are You Looking?</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={{ height: "100px" }}
                ></textarea>
              </Col>
            </Row> */}
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
                />
              </Col>
            </Row>
          </Container>
        </form>
        <p style={{ fontSize: "12px", padding: "1rem 0" }}>
          By submitting, you expressly consent to receive calls and texts at the
          number you provided, including marketing by auto-dialer, pre-recorded
          or artificial voice, and email, from agents associated with
          TotalLosAngelesHomes.com about real estate related matters, but not as
          a condition of purchase. Message frequency varies. You can text Stop
          to cancel. You also agree to our Privacy Policy and to our Terms of
          service regarding the information relating to you. Message and data
          rates may apply. This consent applies even if you are on a corporate,
          state or national Do Not Call list
        </p>
      </div>
    </Box>
  );
};

export default GalleryTabs;
