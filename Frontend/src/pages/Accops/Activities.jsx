import React, { useState } from "react";
import Selfie from "../../components/extra/Selfie";
import OsComparison from "../../components/extra/OsComparison";
import PeripheralsComparison from "../../components/extra/PeripheralsComparison";
import { Card, CardContent, CardMedia } from "@mui/material";
import Faq from "../../components/extra/Faq";
import JioCloudTesting from "../../components/extra/JioCloudTesting";
import SoftwareCenterApps from "../../components/extra/SoftwareCenterApps";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VoiceOfCustomer from "../../components/extra/VoiceOfCustomer";

const Activities = () => {
	const [open, setOpen] = useState(false);
	const [openSelfie, setOpenSelfie] = useState(false);
	const [openPeripherals, setOpenPeripherals] = useState(false);
	const [openFaq, setOpenFaq] = useState(false);
	const [openJioCloud, setOpenJioCloud] = useState(false);
	const [openSoftwareCenterApps, setOpenSoftwareCenterApps] = useState(false);
	const [openCustomer, setOpenCustomer] = useState(false);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};

	return (
		<section className="container pt-10 p-10 flex flex-col h-full overflow-scroll">
			<header className="mb-4 px-6">
				<h2 className="text-4xl font-bold mt-6">Extra Activities</h2>
			</header>
			<div className="h-full flex flex-col justify-center">
				<Slider {...settings}>
					{/* OS Comparison */}
					<Card className="activityCard" onClick={() => setOpen(true)}>
						<OsComparison open={open} setOpen={setOpen} heading={"hiii"} />
						<CardMedia
							sx={{
								height: 200,
								backgroundImage: `url(/images/extra/3.jpg)`,
								backgroundSize: "cover",
								backgroundPosition: "center top 10%", // Moves the image lower
								backgroundRepeat: "no-repeat",
							}}
							image="/images/extra/3.jpg"
						/>
						<CardContent>
							<div className="">
								<p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
									Comparison
								</p>
								<h3 className="text-lg font-semibold">OS Comparison</h3>
								<p className="text-sm text-gray-600">
									Comprehensive performance comparison of OS across multiple
									systems.
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Peripherals Comparison */}
					<Card
						className="activityCard"
						onClick={() => setOpenPeripherals(true)}>
						<PeripheralsComparison
							open={openPeripherals}
							setOpen={setOpenPeripherals}
							heading={""}
						/>
						<CardMedia sx={{ height: 200 }} image="/images/extra/1.jpg" />
						<CardContent>
							<div className="">
								<p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
									Comparison
								</p>
								<h3 className="text-lg font-semibold">
									Peripherals Comparison
								</h3>
								<p className="text-sm text-gray-600">
									Explored the key features and differences between mouse and
									keyboards to choose the best peripherals.
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Faq */}
					<Card className="activityCard" onClick={() => setOpenFaq(true)}>
						<Faq open={openFaq} setOpen={setOpenFaq} heading={"hii"} />

						<CardMedia sx={{ height: 200 }} image="/images/extra/2.jpg" />
						<CardContent>
							<div className="">
								<p className="bg-blue-100 inline-block px-3 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
									FAQ's
								</p>
								<h3 className="text-lg font-semibold">FAQ's JioCloud PC</h3>
								<p className="text-sm text-gray-600">
									Our team worked on creating a comprehensive FAQ section for
									JioCloud PC
								</p>
							</div>
						</CardContent>
					</Card>

					{/* JioTranslate */}
					<Card className="activityCard" onClick={() => setOpenSelfie(true)}>
						<Selfie open={openSelfie} setOpen={setOpenSelfie} />
						<CardMedia sx={{ height: 200 }} image="/images/extra/4.jpg" />
						<CardContent>
							<div className="">
								<p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
									Testing
								</p>

								<h3 className="text-lg font-semibold">JioTranslate</h3>
								<p className="text-sm text-gray-600">
									The team performed testing on the JioTranslate app across
									different versions.
								</p>
							</div>
						</CardContent>
					</Card>
					{/* JioCloud Testing */}
					<Card className="activityCard" onClick={() => setOpenJioCloud(true)}>
						<JioCloudTesting open={openJioCloud} setOpen={setOpenJioCloud} />

						<CardMedia sx={{ height: 200 }} image="/images/extra/5.jpg" />
						<CardContent>
							<div className="">
								<p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
									Testing
								</p>
								<h3 className="text-lg font-semibold">JioCloud App</h3>
								<p className="text-sm text-gray-600">
									The team performed testing on the JioCloud app across
									different versions.
								</p>
							</div>
						</CardContent>
					</Card>
					{/* Additional Apps */}
					<Card
						className="activityCard"
						onClick={() => setOpenSoftwareCenterApps(true)}>
						<SoftwareCenterApps
							open={openSoftwareCenterApps}
							setOpen={setOpenSoftwareCenterApps}
						/>
						<CardMedia
							sx={{ height: 200 }}
							image="/images/extra/additional_apps.webp"
						/>
						<CardContent>
							<div className="">
								<p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
									Research
								</p>
								<h3 className="text-lg font-semibold">Additional Apps</h3>
								<p className="text-sm text-gray-600">
									Team conducted research to identify and evaluate additional
									applications
								</p>
							</div>
						</CardContent>
					</Card>
					{/* Voice of Customer */}
					<Card className="activityCard" onClick={() => setOpenCustomer(true)}>
						<VoiceOfCustomer open={openCustomer} setOpen={setOpenCustomer} />
						<CardMedia
							sx={{ height: 200 }}
							image="/images/extra/VoiceOfCustomer.webp"
						/>
						<CardContent>
							<div className="">
								<p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
									FAQ's
								</p>
								<h3 className="text-lg font-semibold">Voice of Customer</h3>
								<p className="text-sm text-gray-600">
									Team conducted research to identify customer queries about
									JioCloud PC
								</p>
							</div>
						</CardContent>
					</Card>
				</Slider>
			</div>
		</section>
	);
};

export default Activities;
