import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/1.png";
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
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Search" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/property-map-search">
                    Newest Listings
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/property-map-search">
                    Map Search
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/property-map-search">
                    Advanced Search
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/property-search">
                    By ZIP Code
                  </NavDropdown.Item>
                  <NavDropdown
                    title="Popular Searches"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="/property-search">
                      Luxury Homes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/property-search">
                      Gated Community Homes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/property-search">
                      New Construction Homes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/property-search">
                      Single Story Homes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/property-search">
                      Pool Homes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/property-search">
                      Townhomes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/property-search">
                      Condos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/property-search">
                      Mountain View Homes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/property-search">
                      Ocean View Homes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/property-search">
                      City View Homes
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                {/* <Nav.Link href="/agents">Hire Agent</Nav.Link> */}
                <NavDropdown title="Communities" id="collasible-nav-dropdown">
                  <NavDropdown title="By County" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to="/communities">Los Angeles</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Orange</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Riverside</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">San Bernadino</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">San Diego</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Ventura</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Popular Communities"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link to="/communities">Bel Air</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Beverly Hills</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Burbank</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Corona Del Mar</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Encino</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Glendale</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Hermosa Beach</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Hollywood Hills</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Huntington Beach</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">La Jolla</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Laguna Beach</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Long Beach</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Los Feliz</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Malibu</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Newport Beach</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Palm Springs</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Pasadena</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Santa Barbara</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Santa Monica</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Sherman Oaks</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Silver Lake</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">Ventura</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">West Hollywood</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/communities">View More </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <NavDropdown title="Buy" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/communities">Buyers</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/communities">Connect with Agent</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/communities">Mortgage Calculator </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sell" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/communities">Sell Your Home</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/communities">Free Home Valuation</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/communities">Connect with Agent</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Col>
            <Col className="div-flex-center">
              <Navbar.Brand href="/" className="margin-0">
                <img
                  src={`${logo}`}
                  // width="220"
                  height="70"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Col>
            <Col className="div-flex-center">
              <Nav>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="#">Blog</Nav.Link>
                <Nav.Link href="#">Login / Create Account</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
