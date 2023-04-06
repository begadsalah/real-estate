import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardComponent from "../Communities/CardComponent";
import Row from "react-bootstrap/Row";
import "./ListingsCarousel.css";
import Container from "react-bootstrap/Container";

const propertyDetails = [
  {
    property: "1",
    image: require("../../../assets/condo.jpg"),
    beds: "5",
    baths: "2",
    sqft: "3,225",
    address: `3700 Dean Drive #1302 Ventura, CA 93003`,
    price: "$735,000",
  },
  {
    property: "2",
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
    image: require("../../../assets/house9.jpg"),
    beds: "2",
    baths: "2",
    sqft: "2,905",
    address: `2531 Apple Lane #86
Oxnard, CA 93036`,
    price: "$821,000",
  },
];

const ListingsCarousel = ({
  ShowTitle,
  ItemsNumberBig,
  ItemsNumberMed,
  ItemsNumberSm,
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: parseInt(`${ItemsNumberBig}`),
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: parseInt(`${ItemsNumberBig}`),
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: parseInt(`${ItemsNumberMed}`),
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: parseInt(`${ItemsNumberSm}`),
      slidesToSlide: 1,
    },
  };
  return (
    <div className="sections-main-container">
      {ShowTitle ? (
        <div className="headLines-div-container">
          <h1 className="text-center h3-title">
            New Homes for Sale in Los Angeles
          </h1>
        </div>
      ) : null}

      <Container>
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
            <div className="card-div-container listing-card-div" key={index}>
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
      </Container>
    </div>
  );
};

export default ListingsCarousel;
