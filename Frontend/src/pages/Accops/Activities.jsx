import React from "react";
import "../../styles/activities.css"; // Assuming you'll store the CSS in a separate file
import Sidebar from "../../components/Sidebar";

const Activities = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-orange-100 to-blue-100">
      <Sidebar />

      <div className="activities-container">
        <a
          href="https://www.mythrillfiction.com/the-dark-rider"
          alt="Mythrill"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card">
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
          </div>
        </a>

        <a
          href="https://www.mythrillfiction.com/force-mage"
          alt="Mythrill"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card">
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
          </div>
        </a>
      </div>
    </div>
  );
};

export default Activities;
