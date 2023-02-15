import React from "react";
import SearchBar from "../../SearchBarFolder/SearchBar.jsx";
import CommunitiesSection from "../Communities/CommunitiesSection";
import ListingsCarousel from "../ListingsCarousel/ListingsCarousel";
import "./HomeSection.css";
import "../../../assets/building.png";
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties.jsx";
import AgentsDisplay from "../AgentsSection/AgentsDisplay.jsx";
import ServicesSection from "../ServicesSection/ServicesSection.jsx";

const HomeSection = () => {
  return (
    <>
      <div className="full-bg-image">
        <div className="homeSection-cntent">
          <h1 className="homeSection-h1">
            Let's Find you a Property, Get you the right one!
          </h1>
          <SearchBar />
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
