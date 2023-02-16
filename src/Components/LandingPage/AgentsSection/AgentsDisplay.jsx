import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./AgentsDisplay.css";
import person1 from "../../../assets/person1.jpg";
import person2 from "../../../assets/person2.jpg";
import person3 from "../../../assets/person3.jpg";
import person4 from "../../../assets/person4.jpg";
import person5 from "../../../assets/person5.jpg";
import person6 from "../../../assets/person6.jpg";
import { ReactComponent as Agent1 } from "../../../assets/agentsvg.svg";
const users = [
  {
    img: person1,
    name: "John Rudolf",
    rate: 5,
  },
  {
    img: person2,
    name: "Michael Fredriek",
    rate: 4.5,
  },
  {
    img: person3,
    name: "Liam F. Beskoweski",
    rate: 3,
  },
  {
    img: person4,
    name: "Oliver Mandor",
    rate: 4,
  },
  {
    img: person5,
    name: "Melanie A. Martenez",
    rate: 3.5,
  },
  {
    img: person6,
    name: "Sandra Paul",
    rate: 4.6,
  },
];
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const AgentsDisplay = () => {
  return (
    <Container>
      <Row className="div-flex">
        <h2 className="text-center h3-title">
          <span className="span-title"> Real Estate Agents</span> in the Los
          Angeles Area
        </h2>
      </Row>
      <Row>
        <Carousel
          className="carousel-section"
          swipeable={true}
          draggable={false}
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
          {users.map((user, index) => (
            <div key={index} className="card-main">
              <Row className="card-div">
                <Col className="image-div">
                  <img src={user.img} alt={user.name} className="card-image" />
                </Col>
                <Col className="content-div">
                  <CardContent className="card-content-component">
                    <Typography
                      variant="h5"
                      component="div"
                      className="userName-name"
                    >
                      {user.name}
                    </Typography>
                    <Typography variant="body2">Rate: {user.rate}/5</Typography>
                    <button className="contact-button">Contact Agent</button>
                  </CardContent>
                </Col>
              </Row>
            </div>
          ))}
        </Carousel>
      </Row>
      <Row className="connect-agent-mainRow">
        <Col className="connect-agent-image-col">
          {/* <img
            src={agent1}
            alt="connect to agent image"
            className="connect-agent-image"
          /> */}
          <Agent1 className="connect-agent-image" />
        </Col>
        <Col className="connect-agent-content">
          <span>Connect With a Local Agent</span>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            className="connect-agent-formBox"
          >
            <TextField
              id="filled-required"
              label="Name"
              type="text"
              variant="outlined"
              className="connect-agent-textField"
            />
            <TextField
              id="filled-required"
              label="Email"
              type="email"
              variant="outlined"
              className="connect-agent-textField"
            />
            <TextField
              id="filled-required"
              label="Mobile Phone"
              type="text"
              variant="outlined"
              className="connect-agent-textField"
            />
            <TextField
              multiline
              rows={4}
              defaultValue="Send us a message"
              id="outlined-multiline-static"
              label="Message"
              className="connect-agent-textField"
            />

            <Button variant="outlined" size="large" className="form-button">
              Connect with the Agent
            </Button>
          </Box>
          <p className="connect-agent-bottomP">
            By submitting your information, you agree Movoto can share your
            information with its network of real estate & mortgage professionals
            (affiliates) (or through their agents) and consent to receive
            marketing emails, calls, & texts related to your inquiry (including
            via automatic telephone dialing system, or artificial or
            pre-recorded voice technology) from Movoto or affiliates to the
            email address or number you provided even if your number appears on
            the company, state, or national Do Not Call Registry. You further
            agree that such affiliates may share information with Movoto and
            each other. You also agree to our Terms & Conditions and Privacy
            Policy. Consent not required for purchase.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AgentsDisplay;
