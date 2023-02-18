import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import "./FeaturedProperties.css";
import housePic from "../../../assets/condo.jpg";
import housePic1 from "../../../assets/house1.jpg";
import housePic2 from "../../../assets/house2.jpg";
import housePic3 from "../../../assets/house3.jpg";
import housePic4 from "../../../assets/house4.jpg";
import housePic5 from "../../../assets/house5.jpg";
import housePic6 from "../../../assets/house6.jpg";
import housePic7 from "../../../assets/house7.jpg";
import housePic8 from "../../../assets/house8.jpg";
import housePic9 from "../../../assets/house9.jpg";

const itemData = [
  {
    img: housePic7,
    title: "Long Beach",
    size: {
      width: "300",
      height: "200",
    },
  },
  {
    img: housePic8,
    title: "Pasadena",
    size: {
      width: "300",
      height: "200",
    },
  },
  {
    img: housePic9,
    title: "Anaheim",
    size: {
      width: "300",
      height: "200",
    },
  },
  {
    img: housePic2,
    title: "Pasadena",
    size: {
      width: "300",
      height: "200",
    },
  },
  {
    img: housePic4,
    title: "Pasadena",
    size: {
      width: "300",
      height: "200",
    },
  },
  {
    img: housePic5,
    title: "Anaheim",
    size: {
      width: "300",
      height: "200",
    },
  },
];
const itemData1 = [
  {
    img: housePic,
    title: "Los Angeles",
    size: {
      width: "300",
      height: "200",
    },
  },
  {
    img: housePic1,
    title: "Orange County",
    size: {
      width: "300",
      height: "200",
    },
  },
  {
    img: housePic2,
    title: "Ventura",
    size: {
      width: "300",
      height: "200",
    },
  },
  {
    img: housePic3,
    title: "Riverside",
    size: {
      width: "300",
      height: "200",
    },
  },
  {
    img: housePic4,
    title: "Palm Springs",
    size: {
      width: "300",
      height: "200",
    },
  },
  {
    img: housePic5,
    title: "Palm Springs",
    size: {
      width: "300",
      height: "200",
    },
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const FeaturedProperties = () => {
  return (
    <div className="full-bg-image-featured-page">
      <Row>
        <h1 className="text-center h1-title" style={{ color: "white" }}>
          Explore Los Angeles Communities
        </h1>
      </Row>
      <Container>
        <Carousel
          // centerMode={true}
          classname="carousel-section"
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={100}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={100}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          style={{ borderRadius: "2em" }}
          itemClass="carousel-item-padding-60-px"
        >
          <Container className="FeaturedCard-div-container">
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 3 }} spacing={2}>
              {itemData.map((item, index) => (
                <Item key={index}>
                  <div className="container-div">
                    <div
                      className="masonary-pic item-div image"
                      key={index}
                      style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: `${item.size.height}px`,
                        borderRadius: "2em !important",
                      }}
                    >
                      <div className="middle">
                        <div className="text">{item.title}</div>
                      </div>
                      <div className="button-div">
                        <Button
                          variant="outlined"
                          endIcon={<SendIcon />}
                          className="masonary-div-button"
                        >
                          View Homes
                        </Button>
                      </div>
                    </div>
                  </div>
                </Item>
              ))}
            </Masonry>
          </Container>
          <Container className="FeaturedCard-div-container">
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 3 }} spacing={2}>
              {itemData.map((item, index) => (
                <Item key={index}>
                  <div className="container-div">
                    <div
                      className="masonary-pic item-div image"
                      key={index}
                      style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: `${item.size.height}px`,
                        borderRadius: "2em !important",
                      }}
                    >
                      <div className="middle">
                        <div className="text">{item.title}</div>
                      </div>
                      <div className="button-div">
                        <Button
                          variant="outlined"
                          endIcon={<SendIcon />}
                          className="masonary-div-button"
                        >
                          View Homes
                        </Button>
                      </div>
                    </div>
                  </div>
                </Item>
              ))}
            </Masonry>
          </Container>
          <Container className="FeaturedCard-div-container">
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 3 }} spacing={2}>
              {itemData1.map((item, index) => (
                <Item key={index}>
                  <div className="container-div">
                    <div
                      className="masonary-pic item-div image"
                      key={index}
                      style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: `${item.size.height}px`,
                        borderRadius: "2em !important",
                      }}
                    >
                      <div className="middle">
                        <div className="text">{item.title}</div>
                      </div>
                      <div className="button-div">
                        <Button
                          variant="outlined"
                          endIcon={<SendIcon />}
                          className="masonary-div-button"
                        >
                          View Homes
                        </Button>
                      </div>
                    </div>
                  </div>
                </Item>
              ))}
            </Masonry>
          </Container>
        </Carousel>
      </Container>
    </div>
  );
};

export default FeaturedProperties;
