import React, { useState } from "react";
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
	const [openNewCard, setOpenNewCard] = useState(false);
	
	return (
		<section className="container pt-12 p-6 flex flex-col h-full overflow-scroll">
			<header className="mb-4 px-6">
				<h2 className="text-4xl font-bold">Extra Activities</h2>
			</header>
			<div className="flex-grow flex justify-center items-center gap-6 p-6 mb-10">
				{/* OS research */}
				<Card className="activityCard" onClick={() => setOpen(true)}>
					<OsResearch open={open} setOpen={setOpen} heading={"hiii"} />
					<CardMedia sx={{ height: 200 }} image="/images/extra/OS_Image.webp" />
					<CardContent>
						<div className="">
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
				{/* AI Bots */}
				<Card className="activityCard" onClick={() => setOpenAi(true)}>
					<AiBot open={openAi} setOpen={setOpenAi} heading={"hii"} />
					<CardMedia sx={{ height: 200 }} image="/images/extra/AI.webp" />
					<CardContent>
						<div className="">
							<p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
								AI BOT
							</p>
							<h3 className="text-lg font-semibold">AI Bot (Managed WiFi)</h3>
							<p className="text-sm text-gray-600">
								Create distinct, natural-sounding questions that users might ask
								an AI bot about WiFi.
							</p>
						</div>
					</CardContent>
				</Card>
				{/* JioEducation Testing */}
				<Card className="activityCard" onClick={() => setOpenJio(true)}>
					<JioEducation open={openJio} setOpen={setOpenJio} heading={"hii"} />
					<CardMedia sx={{ height: 200 }} image="/images/extra/IMC.webp" />
					<CardContent>
						<div className="">
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
				{/* AI Selfie Module */}
				<Card className="activityCard" onClick={() => setOpenSelfie(true)}>
					<Selfie open={openSelfie} setOpen={setOpenSelfie} />
					<CardMedia sx={{ height: 200 }} image="/images/extra/Selfie.jpg" />
					<CardContent>
						<div className="">
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
				<Card className="activityCard" onClick={() => setOpenNewCard(true)}>
  {/* Replace 'NewCardComponent' with your new component */}
  <Selfie open={openSelfie} setOpen={setOpenSelfie} />
  <CardMedia sx={{ height: 200 }} image="/images/extra/NewCardImage.jpg" />
  <CardContent>
    <div className="">
      <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
        NEW CARD LABEL
      </p>
      <h3 className="text-lg font-semibold">New Card Title</h3>
      <p className="text-sm text-gray-600">
        Description of the new card.
      </p>
    </div>
  </CardContent>
				</Card>
			</div>
		</section>
	);
};

export default Activities;
