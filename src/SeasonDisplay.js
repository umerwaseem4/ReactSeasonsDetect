import React from "react";
import "./SeasonDisplay.css";

const SeasonConfig = {
  summer: {
    text: "Its Summer in your Region! Visit Beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr Its Cold",
    iconName: "snowflak",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  // Variables
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season];
  // JSX Start From Below:
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`}></i>
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`}></i>
    </div>
  );
};

export default SeasonDisplay;
