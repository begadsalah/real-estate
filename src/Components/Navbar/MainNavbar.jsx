import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/realEstateLogo.png";
import "./MainNavbar.css";

function MainNavbar() {
  const CommunitiesObj = [
    {
      PageName: "Los Angeles",
      Section: "Los Angeles",
      ContentLabel: "Los Angeles County Communities",
      Sidebar: "Los Angeles",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Orange County",
      Section: "Orange County",
      ContentLabel: "Orange County Communities",
      Sidebar: "Orange County",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "San Bernadino",
      Section: "San Bernadino",
      ContentLabel: "San Bernardino County Communities",
      Sidebar: "San Bernadino",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Ventura",
      Section: "Ventura",
      ContentLabel: "Ventura County Communities",
      Sidebar: "Ventura",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Riverside",
      Section: "Riverside",
      ContentLabel: "Riverside County Communities",
      Sidebar: "Riverside",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Palm Springs",
      Section: "Palm Springs",
      ContentLabel: "Palm Springs Area Communities",
      Sidebar: "Palm Springs",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Burbank",
      Section: "Burbank",
      ContentLabel: "Los Angeles County Communities, Burbank Communities",
      Sidebar: "Burbank",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Glendale",
      Section: "Glendale",
      ContentLabel: "Los Angeles County Communities, Glendale Communities",
      Sidebar: "Glendale",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Long Beach",
      Section: "Long Beach",
      ContentLabel: "Los Angeles County Communities",
      Sidebar: "Long Beach",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Pasadena",
      Section: "Pasadena",
      ContentLabel: "Los Angeles County Communities, Pasadena Communities",
      Sidebar: "Pasadena",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Anaheim",
      Section: "Anaheim",
      ContentLabel: "Orange County Communities",
      Sidebar: "Anaheim",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Huntington Beach",
      Section: "Huntington Beach",
      ContentLabel: "Orange County Communities",
      Sidebar: "Huntington Beach",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Irvine",
      Section: "Irvine",
      ContentLabel: "Orange County Communities, Irvine Communities",
      Sidebar: "Irvine",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Santa Ana",
      Section: "Santa Ana",
      ContentLabel: "Orange County Communities",
      Sidebar: "Santa Ana",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Ontario",
      Section: "Ontario",
      ContentLabel: "San Bernardino County Communities",
      Sidebar: "Ontario",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
    {
      PageName: "Rancho Cucamonga",
      Section: "Rancho Cucamonga",
      ContentLabel: "San Bernardino County Communities",
      Sidebar: "Rancho Cucamonga",
      Variations: {
        Type: "",
        ArchitecturalStyle: "",
        PriceRange: "",
        Views: "",
        NumberOfBedrooms: "",
      },
    },
  ];
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
      className="primary-color-palette"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Row className="navbar_contaner">
            <Col className="div-flex-center">
              <Nav>
                <NavDropdown title="Search" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/property-map-search">
                    By Map
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/property-search">
                    By ZIP Code
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Hire Agent</Nav.Link>

                <NavDropdown title="Communities" id="collasible-nav-dropdown">
                  {CommunitiesObj.map((content, index) => (
                    <div key={index}>
                      <NavDropdown.Item href={`#action/3.${index + 1}`}>
                        <Link to="/communities">{content.PageName}</Link>
                      </NavDropdown.Item>
                    </div>
                  ))}
                  <NavDropdown.Item href={`#action/3.17`}>
                    <Link to="/communities">View More</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Col>
            <Col className="div-flex-center">
              <Navbar.Brand href="/" className="margin-0">
                <img
                  src={`${logo}`}
                  width="55"
                  height="55"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Col>
            <Col className="div-flex-center">
              <Nav>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="#">Help</Nav.Link>
                <Nav.Link href="#">Sign in</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
