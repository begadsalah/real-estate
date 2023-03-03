import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SearchIcon from "@mui/icons-material/Search";
import { mlsdata } from "../api/mlsdata";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./SearchPage.css";
const SearchPage = ({ ShowHead, searchPadding }) => {
  const [search, setSearch] = useState("");
  return (
    <div style={{ backgroundColor: "white" }}>
      <Form>
        <InputGroup>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="City, Zip, Neighborhood, Address"
            style={{
              padding: `${searchPadding}`,
              borderRadius: "0",
            }}
          />
        </InputGroup>
      </Form>
      {ShowHead ? (
        <thead className="table-flex Search-page-thead">
          <tr className="Search-page-tr">
            <th>State</th>
            <th>Street Address</th>
            <th>Street Name</th>
            <th>Street Number</th>
            <th>Postal Code</th>
            <th>Street Suffix</th>
          </tr>
        </thead>
      ) : null}

      <tbody className="Search-page-tbody">
        <div className="search-engine-box">
          {mlsdata
            .filter((item) => {
              return search.toLowerCase() === ""
                ? null
                : item.states.toLowerCase().includes(search) ||
                    item.streetAddress.toLowerCase().includes(search) ||
                    item.streetName.toLowerCase().includes(search) ||
                    item.streetNumber.toLowerCase().includes(search) ||
                    item.postalCode.toLowerCase().includes(search) ||
                    item.streetSuffix.toLowerCase().includes(search);
            })
            .map((item, index) => (
              <>
                <a href="#" className="address-search-a">
                  <LocationOnIcon
                    className="address-search-link"
                    style={{
                      margin: "0.3rem",
                      fontSize: "2rem",
                      color: "#336b9f",
                    }}
                  />
                  {"  "}
                  {item.streetNumber} {item.streetAddress}, {item.streetName},{" "}
                  {item.streetSuffix} {item.postalCode}, {item.states}.
                </a>
                <br />
              </>
            ))}
        </div>
      </tbody>
    </div>
  );
};

export default SearchPage;
