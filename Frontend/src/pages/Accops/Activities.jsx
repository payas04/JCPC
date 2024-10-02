import React, { useState } from "react";
import "../../styles/activities.css"; // Adjust path as necessary
import Sidebar from "../../components/Sidebar";
import Selfie from "../../components/extra/Selfie";

const Activities = () => {
	const [selectedCard, setSelectedCard] = useState(null);

	const handleCardClick = (cardId) => {
		setSelectedCard(selectedCard === cardId ? null : cardId); // Toggle the card
	};

	const handleCloseClick = () => {
		setSelectedCard(null); // Close the card
	};

	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<div className="activities-container flex justify-center items-center">
				{/* OS research */}
				<div
					className={`card ${
						selectedCard === "OS" ? "active enlarged" : ""
					} rounded-lg overflow-hidden`}
					onClick={() => handleCardClick("OS")}>
					<div className="wrapper">
						{/* <img
							src="/images/extra/OS.jpg"
							className="cover-image opacity-80"
							alt="Dark Rider Cover"
						/> */}
						<div className="cover-image bg-blue-400"></div>
					</div>
					<img
						src="/images/extra/test.png"
						className="title"
						alt="Dark Rider Title"
					/>
					{/* <img
						src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
						className="character"
						alt="Dark Rider Character"
					/> */}
					{selectedCard === "OS" && (
						<div className="card-details">
							<h3>Zorion os</h3>
							<p>Lorem ipsum dolor sit amet...</p>
							<button className="close-btn" onClick={handleCloseClick}>
								&times;
							</button>
						</div>
					)}
				</div>

				{/* AI Selfie Module */}
				<div
					className={`card ${
						selectedCard === "Selfie" ? "active enlarged" : ""
					} rounded-lg overflow-hidden`}
					onClick={() => handleCardClick("Selfie")}>
					<div className="wrapper">
						<img
							src="/images/extra/Selfie.jpg"
							className="cover-image opacity-80"
							alt="Force Mage Cover"
						/>
					</div>
					<img
						src="/images/extra/SelfieModule.png"
						className="title"
						alt="Force Mage Title"
					/>
					{selectedCard === "Selfie" && <Selfie close={handleCloseClick} />}
				</div>

				{/* AI Bots */}
				<div
					className={`card ${
						selectedCard === "AI" ? "active enlarged" : ""
					} rounded-lg overflow-hidden`}
					onClick={() => handleCardClick("AI")}>
					<div className="wrapper">
						{/* <img
							src="/images/extra/AI.jpg"
							className="cover-image opacity-80"
							alt="AI Bots Cover"
						/> */}
						<div className="cover-image bg-red-400"></div>
					</div>
					<img
						src="/images/extra/AIBots.png"
						className="title"
						alt="AI Bots Title"
					/>
					{selectedCard === "AI" && (
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
