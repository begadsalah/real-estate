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
import Iconone from "../../../assets/Buyer.png";
import Icontwo from "../../../assets/Sellers.png";
import Iconthree from "../../../assets/Home-Valuation.png";
import "./ServicesSection.css";
const ServicesSection = () => {
  return (
    <div className="services-full-bg-image sections-main-container">
      <Container>
        <div className="headLines-div-container">
          <div className="servicesSection-content">
            <h1 className="servicesSection-h1 h1-title">
              Help Every Step of The Way
            </h1>
          </div>
        </div>
        <div className="card-div">
          <Card sx={{ maxWidth: 345, maxHeight: 350 }} className="card-body">
            <CardContent className="card-content">
              <img src={`${Iconone}`} alt="" width={"110px"} height={"110px"} />
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
                Schedule home showings on-demand and connect with a local
                professional who is dedicated to helping you find your perfect
                home.
              </Typography>
              <CardActions>
                <Button size="small" className="card-button">
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, maxHeight: 350 }} className="card-body">
            <CardContent className="card-content">
              <img src={`${Icontwo}`} alt="" width={"110px"} height={"110px"} />
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
                Connect with a local expert who specializes in selling.
                Determine what’s right for your home and get a free, in-depth
                comparative market analysis.
              </Typography>

              <CardActions>
                <Button size="small" className="card-button">
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, maxHeight: 350 }} className="card-body">
            <CardContent className="card-content">
              <img
                src={`${Iconthree}`}
                alt=""
                width={"110px"}
                height={"110px"}
              />
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
                Wondering what your home could sell for? Find out what your home
                is worth in today’s market with a free online home valuation.
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
