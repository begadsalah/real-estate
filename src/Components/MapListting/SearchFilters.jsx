import React, { useState } from "react";
import InputRange from "react-input-range";
import FilterListIcon from "@mui/icons-material/FilterList";
const SearchFilters = ({
  types,
  rooms,
  areas,
  prices,
  deposits,
  slideOpen,
  onChangeSlide,
  onChangeType,
  onChangeRoom,
  onChangeArea,
  onChangePrice,
  onChangeDeposit,
  onChangeTour,
  getPlacesCount,
  disableTour,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <header className="sc-slide-header">
        <div className="header-buttons">
          <button
            className="filter-drawer-button"
            onClick={() => {
              isClicked ? setIsClicked(false) : setIsClicked(true);
            }}
          >
            Filters <FilterListIcon />
          </button>
          <div className="sc-form-group sc-grid-1">
            <div className="sc-form-button sc-stretched">
              <button
                disabled={disableTour}
                onClick={() => {
                  onChangeTour("start-tour");
                }}
              >
                {getPlacesCount()} Found.
              </button>
            </div>
          </div>
        </div>
      </header>
      {isClicked ? (
        <div className="sc-slide-body">
          <form className="sc-form">
            <h6>Type</h6>
            <div className="sc-form-group sc-grid-2">
              {types.map((type, index) => {
                return (
                  <div className="sc-form-checkbox" key={index}>
                    <input
                      type="checkbox"
                      name="types"
                      id={type.slug}
                      data-type={type.slug}
                      checked={type.checked}
                      onChange={(event) => {
                        onChangeType(event);
                      }}
                    />

                    <label htmlFor={type.slug}>
                      <i className="sc-icon-checkbox"></i>

                      <span>{type.name}</span>
                    </label>
                  </div>
                );
              })}
            </div>
            <h6>Rooms</h6>
            <div className="sc-form-group sc-grid-2">
              {rooms.map((room, index) => {
                return (
                  <div className="sc-form-radio" key={index}>
                    <input
                      type="radio"
                      name="rooms"
                      id={room.slug}
                      data-room={room.slug}
                      checked={room.checked}
                      onChange={(event) => {
                        onChangeRoom(event);
                      }}
                    />

                    <label htmlFor={room.slug}>
                      <i className="sc-icon-radio"></i>

                      <span>{room.name}</span>
                    </label>
                  </div>
                );
              })}
            </div>
            <h6>Area</h6>
            <div className="sc-form-group sc-grid-1">
              <InputRange
                maxValue={200}
                minValue={20}
                step={5}
                value={{ min: areas.from, max: areas.to }}
                onChange={(value) => {
                  onChangeArea(value);
                }}
              />
            </div>
            <h6>Prices</h6>
            <div className="sc-form-group sc-grid-1">
              <InputRange
                maxValue={10000000}
                minValue={300000}
                step={100000}
                value={{ min: prices.from, max: prices.to }}
                onChange={(value) => {
                  onChangePrice(value);
                }}
              />
            </div>
            <h6>Deposit</h6>
            <div className="sc-form-group sc-grid-1">
              <InputRange
                maxValue={200000}
                minValue={10000}
                step={1000}
                value={{ min: deposits.from, max: deposits.to }}
                onChange={(value) => {
                  onChangeDeposit(value);
                }}
              />
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default SearchFilters;
