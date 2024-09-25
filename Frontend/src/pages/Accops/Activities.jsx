import React, { useState } from "react";
import "../../styles/activities.css"; // Adjust path as necessary
import Sidebar from "../../components/Sidebar";

const Activities = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId); // Toggle the card
  };

  const handleCloseClick = () => {
    setSelectedCard(null); // Close the card
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-orange-100 to-blue-100">
      <Sidebar />
      <div className="activities-container flex justify-center items-center">
        {/* Dark Rider Card */}
        <div
          className={`card ${
            selectedCard === "darkRider" ? "active enlarged" : ""
          }`}
          onClick={() => handleCardClick("darkRider")}
        >
          <div className="wrapper">
            <img
              src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
              className="cover-image"
              alt="Dark Rider Cover"
            />
          </div>
          <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
            className="title"
            alt="Dark Rider Title"
          />
          <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
            className="character"
            alt="Dark Rider Character"
          />
          {selectedCard === "darkRider" && (
            <div className="card-details">
              <h3>Zorion os</h3>
              <p>Lorem ipsum dolor sit amet...</p>
              <button className="close-btn" onClick={handleCloseClick}>
                &times;
              </button>
            </div>
          )}
        </div>

        {/* Force Mage Card */}
        <div
          className={`card ${
            selectedCard === "forceMage" ? "active enlarged" : ""
          }`}
          onClick={() => handleCardClick("forceMage")}
        >
          <div className="wrapper">
            <img
              src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
              className="cover-image"
              alt="Force Mage Cover"
            />
          </div>
          <img
            src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
            className="title"
            alt="Force Mage Title"
          />
          <img
            src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
            className="character"
            alt="Force Mage Character"
          />
          {selectedCard === "forceMage" && (
            <div className="card-details">
              <h3>Selfie Module</h3>
              <p>Lorem ipsum dolor sit amet...</p>
              <button className="close-btn" onClick={handleCloseClick}>
                &times;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activities;
