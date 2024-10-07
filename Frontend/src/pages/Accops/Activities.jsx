import React, { useState } from "react";
import "../../styles/activities.css"; // Adjust path as necessary
import Sidebar from "../../components/Sidebar";
import Selfie from "../../components/extra/Selfie";
import OsResearch from "../../components/extra/OsResearch";
import AiBots from "../../components/extra/AiBots";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

const Activities = () => {
	const [selectedCard, setSelectedCard] = useState(null);
	const [open, setOpen] = useState(false);

	const handleCardClick = (cardId) => {
		setSelectedCard(selectedCard === cardId ? null : cardId); // Toggle the card
	};

	const handleCloseClick = () => {
		setSelectedCard(null); // Close the card
	};

	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<section className="w-full flex flex-col pt-12 p-6">
				<header className=" bg-white rounded-md mb-4 px-6">
					<h2 className="text-4xl font-bold text-gray-800 py-4">
						Extra Activities
					</h2>
				</header>
				<div className="flex-grow flex justify-evenly items-center">
					{/* OS research */}
					<Card
						sx={{ width: 350 }}
						className={`card ${
							selectedCard === "OS" ? "active enlarged" : ""
						} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}
						onClick={() => handleCardClick("OS")}
						// onClick={() => setOpen(true)}
					>
						<CardMedia
							sx={{ height: 200 }}
							image="/images/extra/OS_Image.webp"
						/>
						<CardContent>
							<div className="p-4">
								<p className="hover:bg-[rgb(0,0,0,0.8)] bg-black inline-block  px-2 py-1 rounded-full text-white font-light font-mono text-xs">
									RESEARCH
								</p>
								<h3 className="text-lg font-semibold mb-2">OS Research</h3>
								<p className="text-sm text-gray-600">
									Exploring low end operating system technology with Linux
									distributions.
								</p>
							</div>
						</CardContent>
						{selectedCard === "OS" && <OsResearch close={handleCloseClick} />}
					</Card>

					{/* AI Selfie Module */}
					<Card
						sx={{ width: 350 }}
						className={`card ${
							selectedCard === "Selfie" ? "active enlarged" : ""
						} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}
						onClick={() => handleCardClick("Selfie")}>
						<CardMedia sx={{ height: 200 }} image="/images/extra/Selfie.jpg" />
						<CardContent>
							<div className="p-4">
								<p className="hover:bg-[rgb(0,0,0,0.8)] bg-black inline-block px-2 py-1 rounded-full text-white font-light font-mono text-xs">
									SELFIE
								</p>

								<h3 className="text-lg font-semibold mb-2">AI Selfie Module</h3>
								<p className="text-sm text-gray-600">
									Creating a dataset of selfies to train an AI model.
								</p>
							</div>
						</CardContent>
						{selectedCard === "Selfie" && <Selfie close={handleCloseClick} />}
					</Card>

					{/* AI Bots */}
					<Card
						sx={{ width: 350 }}
						className={`card ${
							selectedCard === "AI" ? "active enlarged" : ""
						} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}
						onClick={() => handleCardClick("AI")}>
						<CardMedia sx={{ height: 200 }} image="/images/extra/AI.jpg" />
						<CardContent>
							<div className="p-4">
								<p className="hover:bg-[rgb(0,0,0,0.8)] bg-black inline-block px-2 py-1 rounded-full text-white font-light font-mono text-xs">
									AI BOT
								</p>
								<h3 className="text-lg font-semibold mb-2">
									AI Bot (Managed WiFi)
								</h3>
								<p className="text-sm text-gray-600">
									Create distinct, natural-sounding questions that users might
									ask an AI bot about WiFi.
								</p>
							</div>
						</CardContent>
						{selectedCard === "AI" && <AiBots close={handleCloseClick} />}
					</Card>
				</div>
				<div className="relative mb-4">
					{/* Wave-like SVG pattern */}
					<div className="absolute inset-x-0 top-0 h-16 opacity-10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1440 320"
							className="w-full h-full">
							<path
								fill="#0099ff"
								fillOpacity="1"
								d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
						</svg>
					</div>

					{/* Floating technology-related icons */}
					<div className="absolute inset-0 overflow-hidden">
						<div className="absolute top-10 left-1/4 animate-float">
							<svg
								className="w-12 h-12 text-blue-500 opacity-50"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div className="absolute top-20 right-1/3 animate-float-delayed">
							<svg
								className="w-10 h-10 text-green-500 opacity-50"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
								/>
							</svg>
						</div>
						<div className="absolute bottom-10 left-1/3 animate-float">
							<svg
								className="w-8 h-8 text-purple-500 opacity-50"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
								/>
							</svg>
						</div>
					</div>

					{/* Subtle grid pattern */}
					<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

					{/* Inspirational quote */}
					<div className="relative z-10 text-center py-12">
						<blockquote className="text-xl font-semibold text-gray-700 italic ">
							"The advance of technology is based on making it fit in so that
							you don't really even notice it, so it's part of everyday life."
						</blockquote>
						<cite className="block mt-4 text-gray-600">- Bill Gates</cite>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Activities;
