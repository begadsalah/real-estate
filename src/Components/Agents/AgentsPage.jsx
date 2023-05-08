import React from "react";
import "./AgentsPage.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SearchBar from "../SearchBarFolder/SearchBar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const AgentsPage = () => {
  return (
    <Box>
      <div className="full-bg-image-agent">
        <Grid container>
          <Grid xs={7}>
            <div className="agent-content">
              <h2 className="agentsPage-h1" style={{ padding: "0 3.3rem" }}>
                Work with the best agents in your neighborhood
              </h2>
              <p
                style={{
                  color: "white",
                  maxWidth: "450px",
                  padding: "1rem 3.3rem",
                  textShadow: "rgba(0, 0, 0, 0.7) 0px 2px 5px",
                }}
              >
                Real Estate agents are in the top 1% of real estate agents
                working at any nationwide brokerage, so we have the experience
                to help you win in today's market.
              </p>
              <SearchBar
                style={{ justfiyContent: "flex-start" }}
                widthPercentage="80%"
                searchBarPadding="12px 28px"
                placeholderContent={"Find an Agent in your area"}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          xs={12}
          container
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "2rem",
            margin: "3rem 0",
          }}
        >
          <Grid xs={5}>
            <div
              className="Agents-pic-container"
              style={{ height: "100%", width: "100%" }}
            ></div>
          </Grid>
          <Grid
            xs={5}
            className="centerd-element"
            style={{
              flexDirection: "column",
              alignItems: "start",
              padding: "3rem",
            }}
          >
            <h2 style={{ margin: "1rem 0", fontWeight: "600" }}>
              We will find what you exactly looking for.
            </h2>
            <p style={{ maxWidth: "500px", margin: "1rem 0" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              atque adipisci reprehenderit fugiat illum? Enim accusantium
              praesentium porro natus dicta. Aliquam laboriosam sint vel
              voluptate impedit vitae magnam! Eligendi saepe eum repellendus
              fugiat assumenda quae at corporis architecto nisi facere!
            </p>
            <button
              style={{
                color: "#ffa840",
                border: "2px solid #ffa840",
                padding: "0.5rem 1.5rem",
                backgroundColor: "transparent",
                margin: "1rem 0",
                fontWeight: "600",
              }}
            >
              Contact us
            </button>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "2rem",
            margin: "3rem 0",
            backgroundColor: "#ffa840",
          }}
        >
          <Grid
            xs={5}
            className="centerd-element"
            style={{
              flexDirection: "column",
              alignItems: "start",
              padding: "3rem",
            }}
          >
            <h2 style={{ margin: "1rem 0", fontWeight: "600", color: "white" }}>
              Buy the best Homes in the area.
            </h2>
            <p style={{ maxWidth: "500px", margin: "1rem 0", color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              atque adipisci reprehenderit fugiat illum? Enim accusantium
              praesentium porro natus dicta. Aliquam laboriosam sint vel
              voluptate impedit vitae magnam! Eligendi saepe eum repellendus
              fugiat assumenda quae at corporis architecto nisi facere!
            </p>
            <button
              style={{
                color: "white",
                border: "2px solid white",
                padding: "0.5rem 1.5rem",
                backgroundColor: "transparent",
                margin: "1rem 0",
                fontWeight: "600",
              }}
            >
              Contact us
            </button>
          </Grid>
          <Grid xs={5}>
            <div
              className="Agents-pic-2-container"
              style={{ height: "100%", width: "100%" }}
            ></div>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={10} className="centerd-element" style={{ margin: "3rem 0" }}>
        <Row className="row-box">
          <div className="searchBox">
            <thead className="area-thead">
              <tr className="area-tr">
                <th>
                  <h3
                    style={{
                      fontWeight: "600",
                      textAlign: "center",
                      margin: "0rem 0",
                    }}
                  >
                    Find Real Estate Agents by city
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody className="area-tbody">
              <Container style={{ padding: "2rem", margin: "1rem 0" }}>
                <Row>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td className="td-text" style={{ textAlign: "center" }}>
                      Los Angeles Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td className="td-text" style={{ textAlign: "center" }}>
                      {" "}
                      Orange County Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td style={{ textAlign: "center" }} className="td-text">
                      San Bernadino Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td style={{ textAlign: "center" }} className="td-text">
                      Ventura Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td style={{ textAlign: "center" }} className="td-text">
                      Riverside Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td style={{ textAlign: "center" }} className="td-text">
                      Palm Springs Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td style={{ textAlign: "center" }} className="td-text">
                      Burbank Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td style={{ textAlign: "center" }} className="td-text">
                      Glendale Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td style={{ textAlign: "center" }} className="td-text">
                      Long Beach Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td style={{ textAlign: "center" }} className="td-text">
                      Pasadena Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td style={{ textAlign: "center" }} className="td-text">
                      Anaheim Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td style={{ textAlign: "center" }} className="td-text">
                      Huntington Beach Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td style={{ textAlign: "center" }} className="td-text">
                      Irvine Real Estate Agent
                    </td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td className="td-text">Santa Ana Real Estate Agent</td>
                  </Col>
                  <Col
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className="element-col"
                  >
                    <td style={{ textAlign: "center" }} className="td-text">
                      Ontario Real Estate Agent
                    </td>
                  </Col>
                </Row>
              </Container>
            </tbody>
          </div>
        </Row>
      </Grid>
    </Box>
  );
};

export default AgentsPage;
