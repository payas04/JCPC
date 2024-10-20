import React, { useState } from "react";
import "../../styles/activities.css"; // Adjust path as necessary
import Sidebar from "../../components/Sidebar";
import Selfie from "../../components/extra/Selfie";
import OsResearch from "../../components/extra/OsResearch";
import AiBot from "../../components/extra/AiBot";
import { Card, CardContent, CardMedia } from "@mui/material";
import JioEducation from "../../components/extra/JioEducation";

const Activities = () => {
	const [selectedCard, setSelectedCard] = useState(null);
	const [open, setOpen] = useState(false);
	const [openSelfie, setOpenSelfie] = useState(false);
	const [openAi, setOpenAi] = useState(false);
	const [openJio, setOpenJio] = useState(false);

	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<section className="w-full pt-12 p-6 flex flex-col h-full">
				<header className="mb-4 px-6">
					<h2 className="text-4xl font-bold">Extra Activities</h2>
				</header>
				<div className="flex-grow flex justify-center items-center gap-6 p-6 ">
					{/* OS research */}
					<Card
						className="card hover:-translate-y-2 rounded-lg overflow-hidden hover:shadow-lg hover:bg-blue-300 hover:text-blue-800 flex-1 h-full max-h-[390px]"
						onClick={() => setOpen(true)}>
						<OsResearch open={open} setOpen={setOpen} heading={"hiii"} />
						<CardMedia
							sx={{ height: 200 }}
							image="/images/extra/OS_Image.webp"
						/>
						<CardContent>
							<div className="p-4">
								<p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
									RESEARCH
								</p>
								<h3 className="text-lg font-semibold">OS Research</h3>
								<p className="text-sm text-gray-600">
									Exploring low end operating system technology with Linux
									distributions.
								</p>
							</div>
						</CardContent>
					</Card>
					{/* AI Selfie Module */}
					<Card
						className="card rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-lg hover:bg-blue-300 hover:text-blue-800 flex-1 h-full max-h-[390px]"
						onClick={() => setOpenSelfie(true)}>
						<Selfie open={openSelfie} setOpen={setOpenSelfie} />
						<CardMedia sx={{ height: 200 }} image="/images/extra/Selfie.jpg" />
						<CardContent>
							<div className="p-4">
								<p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
									SELFIE
								</p>

								<h3 className="text-lg font-semibold">AI Selfie Module</h3>
								<p className="text-sm text-gray-600">
									Creating a dataset of selfies to train an AI model.
								</p>
							</div>
						</CardContent>
					</Card>
					{/* AI Bots */}
					<Card
						className="card hover:-translate-y-2 rounded-lg overflow-hidden hover:shadow-lg hover:bg-blue-300 hover:text-blue-800 flex-1 h-full max-h-[390px]"
						onClick={() => setOpenAi(true)}>
						<AiBot open={openAi} setOpen={setOpenAi} heading={"hii"} />
						<CardMedia sx={{ height: 200 }} image="/images/extra/AI.webp" />
						<CardContent>
							<div className="p-4">
								<p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
									AI BOT
								</p>
								<h3 className="text-lg font-semibold">AI Bot (Managed WiFi)</h3>
								<p className="text-sm text-gray-600">
									Create distinct, natural-sounding questions that users might
									ask an AI bot about WiFi.
								</p>
							</div>
						</CardContent>
					</Card>
					{/* JioEducation Testing */}
					<Card
						className="card hover:-translate-y-2 rounded-lg overflow-hidden hover:shadow-lg hover:bg-blue-300 hover:text-blue-800 flex-1 h-full max-h-[390px]"
						onClick={() => setOpenJio(true)}>
						<JioEducation open={openJio} setOpen={setOpenJio} heading={"hii"} />
						<CardMedia sx={{ height: 200 }} image="/images/extra/IMC.webp" />
						<CardContent>
							<div className="p-4">
								<p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
									IMC
								</p>
								<h3 className="text-lg font-semibold">JioEducation Testing</h3>
								<p className="text-sm text-gray-600">
									JioEducation is an application that was showcased at the India
									Mobile Congress.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="relative mb-4">
					{/* Wave-like SVG pattern */}

					{/* Floating technology-related icons */}
					<div className="absolute inset-0 overflow-hidden">
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
							"If you work with determination and with perfection, success will
							follow.”
						</blockquote>
						<cite className="block mt-4 text-gray-600">- Dhirubhai Ambani</cite>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Activities;
