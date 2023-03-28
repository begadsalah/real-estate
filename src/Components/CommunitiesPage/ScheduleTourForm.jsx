import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-multi-carousel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 2,
  },
};
const ScheduleTourForm = () => {
  const [pickedBox1, setPickedBox1] = useState("lightgray");
  const [pickedBox2, setPickedBox2] = useState("lightgray");
  const [pickedBox3, setPickedBox3] = useState("lightgray");
  const [pickedBox4, setPickedBox4] = useState("lightgray");
  const [pickedBox5, setPickedBox5] = useState("lightgray");
  const [showTimes, setShowTimes] = useState(false);
  const [age, setAge] = React.useState("");
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Carousel
        centerMode={false}
        arrows={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="time-item"
        removeArrowOnDeviceType={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-100-px"
      >
        <div
          className="centerd-element"
          style={{
            flexDirection: "column",
            border: `1px solid ${pickedBox1}`,
            borderRadius: "1em",
            padding: "0.3rem 0rem",
            maxWidth: "65px",
            cursor: "pointer",
            margin: "0.3rem 0rem",
          }}
          onClick={() => {
            pickedBox1 === "rgb(117, 207, 240)"
              ? setShowTimes(false)
              : setShowTimes(true);
            pickedBox1 === "lightgray"
              ? setPickedBox1("rgb(117, 207, 240)")
              : setPickedBox2("lightgray");
            setPickedBox3("lightgray");
            setPickedBox5("lightgray");
            setPickedBox4("lightgray");
          }}
        >
          <div
            style={{ fontWeight: "600", flexDirection: "column" }}
            className="centerd-element"
          >
            <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>Sat</span>
            <h5 style={{ fontWeight: "600" }}>1</h5>
            <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>Apr</span>
          </div>
        </div>
        <div
          className="centerd-element"
          style={{
            flexDirection: "column",
            border: `1px solid ${pickedBox2}`,
            borderRadius: "1em",
            padding: "0.3rem 0rem",
            maxWidth: "65px",
            cursor: "pointer",
            margin: "0.3rem 0rem",
          }}
          onClick={() => {
            pickedBox2 === "rgb(117, 207, 240)"
              ? setShowTimes(false)
              : setShowTimes(true);
            pickedBox2 === "lightgray"
              ? setPickedBox2("rgb(117, 207, 240)")
              : setPickedBox1("lightgray");
            setPickedBox3("lightgray");
            setPickedBox5("lightgray");
            setPickedBox4("lightgray");
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>Sun</span>
            <h5 style={{ fontWeight: "600" }}>2</h5>
            <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>Apr</span>
          </div>
        </div>
        <div
          className="centerd-element"
          style={{
            flexDirection: "column",
            border: `1px solid ${pickedBox3}`,
            borderRadius: "1em",
            padding: "0.3rem 0rem",
            maxWidth: "65px",
            cursor: "pointer",
            margin: "0.3rem 0rem",
          }}
          onClick={() => {
            pickedBox3 === "rgb(117, 207, 240)"
              ? setShowTimes(false)
              : setShowTimes(true);
            pickedBox3 === "lightgray"
              ? setPickedBox3("rgb(117, 207, 240)")
              : setPickedBox2("lightgray");
            setPickedBox1("lightgray");
            setPickedBox5("lightgray");
            setPickedBox4("lightgray");
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>Mon</span>
            <h5 style={{ fontWeight: "600" }}>3</h5>
            <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>Apr</span>
          </div>
        </div>
        <div
          className="centerd-element"
          style={{
            flexDirection: "column",
            border: `1px solid ${pickedBox4}`,
            borderRadius: "1em",
            padding: "0.3rem 0rem",
            maxWidth: "65px",
            cursor: "pointer",
            margin: "0.3rem 0rem",
          }}
          onClick={() => {
            pickedBox4 === "rgb(117, 207, 240)"
              ? setShowTimes(false)
              : setShowTimes(true);
            pickedBox4 === "lightgray"
              ? setPickedBox4("rgb(117, 207, 240)")
              : setPickedBox2("lightgray");
            setPickedBox3("lightgray");
            setPickedBox5("lightgray");
            setPickedBox1("lightgray");
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>Tue</span>
            <h5 style={{ fontWeight: "600" }}>4</h5>
            <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>Apr</span>
          </div>
        </div>
        <div
          className="centerd-element"
          style={{
            flexDirection: "column",
            border: `1px solid ${pickedBox5}`,
            borderRadius: "1em",
            padding: "0.3rem 0rem",
            maxWidth: "65px",
            cursor: "pointer",
            margin: "0.3rem 0rem",
          }}
          onClick={() => {
            pickedBox5 === "rgb(117, 207, 240)"
              ? setShowTimes(false)
              : setShowTimes(true);
            pickedBox5 === "lightgray"
              ? setPickedBox5("rgb(117, 207, 240)")
              : setPickedBox2("lightgray");
            setPickedBox3("lightgray");
            setPickedBox1("lightgray");
            setPickedBox4("lightgray");
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>Wed</span>
            <h5 style={{ fontWeight: "600" }}>5</h5>
            <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>Apr</span>
          </div>
        </div>
      </Carousel>
      <FormControl style={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-required-label">
          Preferred Time
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Time *"
          onChange={handleChangeAge}
        >
          <MenuItem value={8}>8:00 AM</MenuItem>
          <MenuItem value={9}>9:00 AM</MenuItem>
          <MenuItem value={10}>10:00 AM</MenuItem>
          <MenuItem value={11}>11:00 AM</MenuItem>
          <MenuItem value={12}>12:00 PM</MenuItem>
          <MenuItem value={1}>1:00 PM</MenuItem>
          <MenuItem value={2}>2:00 PM</MenuItem>
          <MenuItem value={3}>3:00 PM</MenuItem>
          <MenuItem value={4}>4:00 PM</MenuItem>
          <MenuItem value={5}>5:00 PM</MenuItem>
          <MenuItem value={6}>6:00 PM</MenuItem>
          <MenuItem value={7}>7:00 PM</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default ScheduleTourForm;
