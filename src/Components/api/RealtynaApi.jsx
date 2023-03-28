import React, { useEffect, useState } from "react";
import axios from "axios";
// let myHeaders = new Headers();
// myHeaders.append("x-api-key", "VPWP1LmhOL8gzS94Z1BNH4Z4KKteewI2UT6cntJc");

// let requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow",
// };

// fetch("https://api.realtyfeed.com/reso/odata/Property", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

// --------------------------------- try AXIOS -------------------------------------------//

const RealtynaApi = () => {
  const [propertyListing, setPropertyListing] = useState([]);
  // const fetchData = () => {
  //   fetch("https://api.realtyfeed.com/reso/odata/Property", {
  //     method: "GET",
  //     headers: { "x-api-key": "VPWP1LmhOL8gzS94Z1BNH4Z4KKteewI2UT6cntJc" },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setPropertyListing(data);
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const config = {
    headers: { "x-api-key": "VPWP1LmhOL8gzS94Z1BNH4Z4KKteewI2UT6cntJc" },
  };
  useEffect(() => {
    axios
      .get("https://api.realtyfeed.com/reso/odata/Property", config)
      .then((response) => setPropertyListing(response.data));
  }, []);
  return (
    <div>
      {console.log(propertyListing)}
      {console.log(propertyListing.value)}
      {propertyListing.value.map((item, index) => (
        <>
          <h1>Proprty: {index + 1}</h1>
          <h4>{item.City}</h4>
          <h4>{item.UnparsedAddress}</h4>
          <h4>{item.StandardStatus}</h4>
          <p>{item.PublicRemarks}</p>
          <h4>{item.PropertyType}</h4>
          <h4>{item.PropertySubType}</h4>
          <h4>{item.Possession}</h4>
          <h4>{item.ParkingFeatures}</h4>
          <h4>{item.OriginatingSystemName}</h4>
          <h4>{item.OriginatingSystemKey}</h4>
          <h4>{item.PropertyType}</h4>
          <h4>{item.AccessibilityFeatures}</h4>
          <h4>{item.ArchitecturalStyle}</h4>
          <h4>{item.BathroomsTotalInteger}</h4>
          <h4>{item.BedroomsTotal}</h4>
          <h4>{item.CarportSpaces}</h4>
          <h4>{item.ConstructionMaterials}</h4>
          <h4>{item.ContingentDate}</h4>
          <h4>{item.ContractStatusChangeDate}</h4>
          <h4>{item.Cooling}</h4>
          <br />
          <br />
        </>
      ))}
    </div>
  );
};

export default RealtynaApi;
