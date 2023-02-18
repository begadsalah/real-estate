import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CommunitiesSection.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
const CardComponent = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleColorchange = () => {
    setIsActive((current) => !current);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card
        sx={{ maxWidth: 300 }}
        className="box-shadow-customized card-hover-effect"
      >
        <div className="card-pic-div">
          <FavoriteIcon
            className="fav-icon"
            style={{
              color: isActive ? "red" : "gray",
            }}
            onClick={handleColorchange}
          />
          <CardMedia
            component="img"
            height="120"
            image={props.housePics}
            alt="house"
            className="card-img"
          />
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Row className="div-flex-centered flex-row">
              <span className="card-price">{props.price}</span>
              <div className="card-body-content">
                <span className="houseCardInfo card-address">
                  <KingBedIcon style={{ color: "gray" }} />
                  {props.beds + "bd" + " "}
                </span>
                <span className="houseCardInfo card-address">
                  <BathtubIcon style={{ color: "gray" }} />
                  {props.baths + "ba" + " "}
                </span>
                <span className="houseCardInfo card-address">
                  <SquareFootIcon style={{ color: "gray" }} />
                  {props.sqft + "sq.ft." + " "}
                </span>
              </div>
              <span className="card-address">{props.address}</span>
            </Row>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardComponent;
