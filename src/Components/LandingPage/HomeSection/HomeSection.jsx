import React from "react";
import SearchBar from "../../SearchBarFolder/SearchBar.jsx";
import CommunitiesSection from "../Communities/CommunitiesSection";
import ListingsCarousel from "../ListingsCarousel/ListingsCarousel";
import "./HomeSection.css";
import "../../../assets/building.png";
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties.jsx";
import AgentsDisplay from "../AgentsSection/AgentsDisplay.jsx";
import ServicesSection from "../ServicesSection/ServicesSection.jsx";
import Test from "../Communities/Test.jsx";

const HomeSection = () => {
  return (
    <>
      <div className="full-bg-image">
        <div className="homeSection-cntent">
          <h1 className="homeSection-h1">
            All <span className="homeSection-h1-span"> Los Angeles</span> Homes
          </h1>
          <SearchBar
            widthPercentage="50%"
            searchBarPadding="16px 19px"
            placeholderContent={"City, Zip, Neighborhood, Address"}
          />
        </div>
      </div>
      <ListingsCarousel />
      <FeaturedProperties />
      <CommunitiesSection />
      <ServicesSection />
      <AgentsDisplay />
    </>
  );
};

export default HomeSection;
