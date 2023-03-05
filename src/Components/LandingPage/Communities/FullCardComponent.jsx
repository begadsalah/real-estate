import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import Row from "react-bootstrap/Row";

const FullCardComponent = (props) => {
  const [isActive, setIsActive] = useState(false);

  const theme = useTheme();
  const handleColorchange = () => {
    setIsActive((current) => !current);
  };
  return (
    <Card className="full-card">
      <div className="card-pic-div-2">
        <FavoriteIcon
          className="fav-icon"
          style={{
            color: isActive ? "red" : "gray",
          }}
          onClick={handleColorchange}
        />
        <CardMedia
          component="img"
          style={{ width: 300, height: 250 }}
          image={props.housePics}
          alt="Live from space album cover"
          className="full-card-img"
        />
      </div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <span className="card-price-2">{props.price}</span>
          <br />
          <br />
          <span className="card-address">{props.address}</span>
          <br />
          <br />
          <div className="card-body-content">
            <span className="houseCardInfo card-address">
              <KingBedIcon
                style={{ color: "gray", width: "2rem", height: "2rem" }}
              />
              <br />
              {props.beds + "bd" + " "}
            </span>
            <span className="houseCardInfo card-address">
              <BathtubIcon
                style={{ color: "gray", width: "2rem", height: "2rem" }}
              />
              <br />
              {props.baths + "ba" + " "}
            </span>
            <span className="houseCardInfo card-address">
              <SquareFootIcon
                style={{ color: "gray", width: "2rem", height: "2rem" }}
              />
              <br />
              {props.sqft + "sq.ft." + " "}
            </span>
          </div>
        </CardContent>
      </Box>
    </Card>
  );
};

export default FullCardComponent;
