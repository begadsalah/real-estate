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
import { ReactComponent as Iconone } from "../../../assets/icon6.svg";
import { ReactComponent as Icontwo } from "../../../assets/icon2.svg";
import { ReactComponent as Iconthree } from "../../../assets/icon3.svg";
import "./ServicesSection.css";
const ServicesSection = () => {
  return (
    <div className="services-full-bg-image">
      <Container>
        <Row>
          <div>
            <div className="servicesSection-content">
              <h1 className="servicesSection-h1">
                <span>See</span> How We Can Help
              </h1>
            </div>
          </div>
        </Row>
        <div className="card-div">
          <Card sx={{ maxWidth: 345, maxHeight: 350 }} className="card-body">
            <CardContent className="card-content">
              <div className="svg-container">
                <Iconone
                  className="service-svg-icon"
                  width={"100px"}
                  height={"100px"}
                />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="card-title"
              >
                Home Buyers
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
              <CardActions>
                <Button size="small" className="card-button">
                  Find a Home
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, maxHeight: 350 }} className="card-body">
            <CardContent className="card-content">
              <div className="svg-container">
                <Icontwo
                  className="service-svg-icon"
                  width={"100px"}
                  height={"100px"}
                />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="card-title"
              >
                Selling A Home
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="card-paragraph"
              >
                With over 1 million visitors on the monthly on the website, Real
                Estate can match you with a buyer you will get a your house sold
                in no time.
              </Typography>

              <CardActions>
                <Button size="small" className="card-button">
                  Put it on the market
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, maxHeight: 350 }} className="card-body">
            <CardContent className="card-content">
              <div className="svg-container">
                <Iconthree
                  className="service-svg-icon"
                  width={"100px"}
                  height={"100px"}
                />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="card-title"
              >
                Free Home Valuation
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
              <CardActions>
                <Button size="small" className="card-button">
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
