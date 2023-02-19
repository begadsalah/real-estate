import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import person1 from "../../../assets/person1.jpg";
import person2 from "../../../assets/person2.jpg";
import person3 from "../../../assets/person3.jpg";
import person4 from "../../../assets/person4.jpg";
import person5 from "../../../assets/person5.jpg";
import person6 from "../../../assets/person6.jpg";
import ContactAgent from "./ContactAgent";
import "./AgentsDisplay.css";
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
    name: "Liam F. Bennd",
    rate: 3,
  },
  {
    img: person4,
    name: "Oliver Mandor",
    rate: 4,
  },
  {
    img: person5,
    name: "Melanie Martin",
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
    items: 4,
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
    <>
      <Container className="agents-section-div">
        <div className="headLines-div-container">
          <h2 className="text-center h3-title">
            Real Estate Agents in the Los Angeles Area
          </h2>
        </div>
        <Carousel
          centerMode={false}
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
          itemClass="carousel-item-padding-80-px"
          arrows={false}
        >
          {users.map((user, index) => (
            <div key={index}>
              <Row className="agent-card-row">
                <Col className="image-div">
                  <img src={user.img} alt={user.name} className="card-image" />
                </Col>
                <Col className="content-div">
                  <CardContent className="card-content-component">
                    <div className="userName-name">
                      {user.name}
                      <button className="contact-button">Contact Agent</button>
                    </div>
                  </CardContent>
                </Col>
              </Row>
            </div>
          ))}
        </Carousel>
      </Container>
      <ContactAgent />
    </>
  );
};

export default AgentsDisplay;
