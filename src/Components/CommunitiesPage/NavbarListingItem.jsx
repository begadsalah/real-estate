import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Button } from "@mui/material";

const NavbarListingItem = () => {
  const [isActive, setIsActive] = useState(false);
  const handleColorchange = () => {
    setIsActive((current) => !current);
  };
  return (
    <Grid
      container
      style={{
        marginTop: "6.95rem",
        justifyContent: "space-evenly",
        padding: "0.5rem 0",
        borderBottom: "2px solid rgba(21, 101, 192,0.5)",
      }}
      className="centerd-element"
    >
      <Grid>
        <h4 style={{ fontWeight: "600" }}>5654 Sheila Ave</h4>
        <h6>Las Vegas, NV 89108</h6>
      </Grid>
      <Grid>
        <h4 style={{ fontWeight: "600" }}>$745,000</h4>
      </Grid>
      <Grid className="centerd-element">
        <div
          className="shareIcon centerd-element"
          style={{ border: "1px solid lightgray" }}
        >
          <IosShareIcon
            style={{
              marginRight: "0.3rem",
              paddingBottom: "0.1rem",

              cursor: "pointer",
              color: "gray",
            }}
          />
          Share
        </div>
        <div
          className="saveIcon centerd-element"
          style={{ border: "1px solid lightgray" }}
        >
          <FavoriteIcon
            style={{
              marginRight: "0.3rem",
              paddingBottom: "0.1rem",
              cursor: "pointer",
              color: isActive ? "red" : "gray",
            }}
            onClick={handleColorchange}
          />
          Save
        </div>
        <Button
          variant="contained"
          style={{
            margin: "0.3rem",
            fontSize: "1rem",
            width: "100%",
          }}
        >
          Schedule a Tour
        </Button>
      </Grid>
    </Grid>
  );
};

export default NavbarListingItem;
