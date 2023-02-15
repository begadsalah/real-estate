import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ReactComponent as Iconone } from "../../../assets/svg5.svg";
import { ReactComponent as Icontwo } from "../../../assets/svg1.svg";
import { ReactComponent as Iconthree } from "../../../assets/svg2.svg";
import "./ServicesSection.css";
const ServicesSection = () => {
  return (
    <div className="services-full-bg-image">
      <Container>
        <Row>
          <div>
            <div className="servicesSection-content">
              <h1 className="servicesSection-h1">
                <span>See</span> how can Real Estate Help
              </h1>
            </div>
          </div>
        </Row>
        <Row className="card-row">
          <Col className="card-col">
            <Card sx={{ maxWidth: 345 }} className="card-body">
              <div className="svg-container">
                <Iconone
                  className="service-svg-icon"
                  width={"150px"}
                  height={"150px"}
                />
              </div>

              <div className="card-content-div">
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="card-title"
                  >
                    Looking to Buy
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-paragraph"
                  >
                    With over 1 million homes for sale available on the website,
                    Real Estate can match you with a house you will want to call
                    home.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" className="card-button">
                    Find a Home
                  </Button>
                </CardActions>
              </div>
            </Card>
          </Col>
          <Col className="card-col">
            <Card sx={{ maxWidth: 345 }} className="card-body">
              <div className="svg-container">
                <Icontwo
                  className="service-svg-icon"
                  width={"150px"}
                  height={"150px"}
                />
              </div>
              <div className="card-content-div">
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="card-title"
                  >
                    Sell a Home
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-paragraph"
                  >
                    we have a very active market where you can meet with a buyer
                    in a less than a month and got everything done With over 1
                    million visitors weekly on the website, Real Estate can
                    match you with a buyer ready to get things done.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" className="card-button">
                    Put it on the market
                  </Button>
                </CardActions>
              </div>
            </Card>
          </Col>
          <Col className="card-col">
            <Card sx={{ maxWidth: 345 }} className="card-body">
              <div className="svg-container">
                <Iconthree
                  className="service-svg-icon"
                  width={"150px"}
                  height={"150px"}
                />
              </div>
              <div className="card-content-div">
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="card-title"
                  >
                    Valuate Your House
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-paragraph"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis eveniet quis officia nobis provident nulla
                    asperiores amet voluptates. Nisi in dignissimos cum maxime
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" className="card-button">
                    Learn More
                  </Button>
                </CardActions>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesSection;
