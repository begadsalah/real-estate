import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SearchIcon from "@mui/icons-material/Search";
import { mlsdata } from "../api/mlsdata";
import "./SearchPage.css";
const SearchPage = () => {
  const [search, setSearch] = useState("");
  return (
    <Container className="form-container">
      <Form className="flex-div">
        <InputGroup>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="City, Zip, Neighborhood, Address"
          />
        </InputGroup>
      </Form>
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
      <tbody className="Search-page-tbody">
        {mlsdata
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.states.toLowerCase().includes(search) ||
                  item.streetAddress.toLowerCase().includes(search) ||
                  item.streetName.toLowerCase().includes(search) ||
                  item.streetNumber.toLowerCase().includes(search) ||
                  item.postalCode.toLowerCase().includes(search) ||
                  item.streetSuffix.toLowerCase().includes(search);
          })
          .map((item, index) => (
            <>
              <tr key={index}>
                <td>{item.states}</td>
                <td>{item.streetAddress}</td>
                <td>{item.streetName}</td>
                <td>{item.streetNumber}</td>
                <td>{item.postalCode}</td>
                <td>{item.streetSuffix}</td>
              </tr>
            </>
          ))}
      </tbody>
    </Container>
  );
};

export default SearchPage;
