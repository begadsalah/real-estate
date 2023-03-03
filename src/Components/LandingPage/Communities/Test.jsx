import React from "react";
import { useEffect, useState } from "react";
import { CommunitiesObject } from "../../api/mlsdata";
import { propertyDetailsCopy } from "../../api/mlsdata";
import CardComponent from "./CardComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import FullCardComponent from "./FullCardComponent";

function Test({
  areaFromParent,
  size,
  numberOfCoulmns,
  fullTheme,
  ShowUpperPagintaion,
}) {
  const [Post, setPost] = useState(propertyDetailsCopy);
  const [currentPage, setCurrentPage] = useState(1);
  const [PostPerPage, setPostPerPage] = useState(numberOfCoulmns);
  //get current posts
  const IndexOfLastPost = currentPage * PostPerPage;
  const IndexOfFirstPost = IndexOfLastPost - PostPerPage;
  const CurrentPosts = Post.slice(IndexOfFirstPost, IndexOfLastPost);
  // pagination stuff
  const PageNumbers = [];
  // let NumOfTotalPost = Post.length;
  for (let i = 1; i <= Math.ceil(Post.length / PostPerPage); i++)
    PageNumbers.push(i);
  return (
    <>
      {Post.length !== 0 ? (
        <div>
          {/* previous and next button */}
          {ShowUpperPagintaion ? (
            <div className="pagination-div">
              <button
                className=""
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              >
                <KeyboardArrowLeftIcon style={{ color: "#336b9f" }} />
              </button>
              {/* pagination stuff */}
              <div
                className="flex justify-between w-[400px]"
                style={{ display: "flex" }}
              >
                {PageNumbers.map((PageNumber) => (
                  <div
                    key={PageNumber}
                    onClick={() => {
                      setCurrentPage(PageNumber);
                    }}
                    className={
                      PageNumber == currentPage
                        ? "selected" //this css when selcted
                        : "not-selected"
                    }
                  >
                    {PageNumber}
                  </div>
                ))}
              </div>
              <button
                className=""
                onClick={() => {
                  if (currentPage < PageNumbers.length) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              >
                {" "}
                <KeyboardArrowRightIcon style={{ color: "#336b9f" }} />
              </button>
            </div>
          ) : null}
          <Container>
            <Row>
              {CurrentPosts.map((propItem, index) => (
                <Col
                  xs={12}
                  sm={12}
                  md={size}
                  lg={size}
                  xl={size}
                  style={{ margin: "0.5rem 0" }}
                >
                  {fullTheme ? (
                    <FullCardComponent
                      key={index}
                      housePics={propItem.image}
                      beds={propItem.beds}
                      baths={propItem.baths}
                      price={propItem.price}
                      sqft={propItem.sqft}
                      address={propItem.address}
                    />
                  ) : (
                    <CardComponent
                      key={index}
                      housePics={propItem.image}
                      beds={propItem.beds}
                      baths={propItem.baths}
                      price={propItem.price}
                      sqft={propItem.sqft}
                      address={propItem.address}
                    />
                  )}
                </Col>
              ))}
            </Row>
          </Container>
          <div className="pagination-div-2">
            <button
              className=""
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              <KeyboardArrowLeftIcon style={{ color: "#336b9f" }} />
            </button>
            {/* pagination stuff */}
            <div
              className="flex justify-between w-[400px]"
              style={{ display: "flex" }}
            >
              {PageNumbers.map((PageNumber) => (
                <div
                  key={PageNumber}
                  onClick={() => {
                    setCurrentPage(PageNumber);
                  }}
                  className={
                    PageNumber == currentPage
                      ? "selected" //this css when selcted
                      : "not-selected"
                  }
                >
                  {PageNumber}
                </div>
              ))}
            </div>
            <button
              className=""
              onClick={() => {
                if (currentPage < PageNumbers.length) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              {" "}
              <KeyboardArrowRightIcon style={{ color: "#336b9f" }} />
            </button>
          </div>
        </div>
      ) : (
        <p className="p-40 text-8xl font-bold">loading ....</p> //if data hasn't come yet show this
      )}
    </>
  );
}

export default Test;
