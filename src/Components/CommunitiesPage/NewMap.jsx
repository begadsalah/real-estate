import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = `pk.eyJ1IjoiYmVnYWRzYWxhaCIsImEiOiJjbGV5bzIycDYwNncwM3lvOHB6d3VwYmdqIn0._dPxLcUiJShSs61PPm4RRw`;
const NewMap = ({ mapWidth, mapHeight }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ width: `${mapWidth}`, height: `${mapHeight}` }}
      />
    </div>
  );
};

export default NewMap;
