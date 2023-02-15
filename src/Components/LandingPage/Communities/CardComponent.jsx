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
          <CardMedia
            component="img"
            height="120"
            image={props.housePics}
            alt="house"
            className="card-img"
          />
          <FavoriteIcon
            className="fav-icon"
            style={{
              color: isActive ? "red" : "gray",
            }}
            onClick={handleColorchange}
          />
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Row>
              <h5 className="houseCardInfo">{props.price}</h5>
              <p>{props.address}</p>
            </Row>
            <hr className="solid" />
            <Row className="div-flex-centered flex-row">
              <Col className="div-flex-centered flex-col">
                <span className="houseCardInfo">{props.beds}</span>
                <p>BEDS</p>
              </Col>
              <Col className="div-flex-centered flex-col">
                <span className="houseCardInfo">{props.baths}</span>
                <p>BATHS</p>
              </Col>
              <Col className="div-flex-centered flex-col">
                <span className="houseCardInfo">{props.sqft}</span>
                <p>SQ.FT.</p>
              </Col>
            </Row>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardComponent;
