import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <Container>
      <Row className="searchBar_container">
        <Col>
          <form className="searchBar_form">
            <input
              type="search"
              placeholder="City, Zip, Neighborhood, Address"
              onChange={handleChange}
              value={searchInput}
              className="searchBarInput"
            />
            <button type="submit" className="submit-button">
              <SearchIcon color="primary" className="search-icon-mui" />
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
