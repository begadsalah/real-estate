import React from "react";
import MapApp from "../MapListting/MapApp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const MapSearch = ({ mapHeight, mapWidth }) => {
  return (
    <div className="">
      <MapApp mapHeight={mapHeight} mapWidth={mapWidth} />
    </div>
  );
};

export default MapSearch;
