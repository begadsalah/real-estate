import React from "react";
import SearchBar from "../../SearchBarFolder/SearchBar.jsx";
import CommunitiesSection from "../Communities/CommunitiesSection";
import ListingsCarousel from "../ListingsCarousel/ListingsCarousel";
import "./HomeSection.css";
import "../../../assets/building.png";
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties.jsx";
import AgentsDisplay from "../AgentsSection/AgentsDisplay.jsx";
import ServicesSection from "../ServicesSection/ServicesSection.jsx";
// import RealtynaApi from "../../api/RealtynaApi.jsx";

const HomeSection = () => {
  return (
    <>
      {/* <div style={{ margin: "15rem" }}>
        <h1>Dynamic data</h1>
        <RealtynaApi />
      </div> */}

      <div className="full-bg-image">
        <div className="homeSection-content">
          <h1 className="homeSection-h1">
            All <span className="homeSection-h1-span"> Los Angeles</span> Homes
            for Sales
          </h1>
          <SearchBar
            widthPercentage="50%"
            searchBarPadding="16px 19px"
            placeholderContent={"City, Zip, Neighborhood, Address"}
          />
        </div>
      </div>
      <ListingsCarousel
        ShowTitle={true}
        ItemsNumberBig={3}
        ItemsNumberMed={3}
        ItemsNumberSm={3}
      />
      <FeaturedProperties />
      <CommunitiesSection />
      <ServicesSection />
      <AgentsDisplay />
    </>
  );
};

export default HomeSection;
