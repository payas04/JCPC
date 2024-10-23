import { useState } from "react";
import { FaProductHunt } from "react-icons/fa";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
const products = [
	{
		name: "JioPC",
		img: "STB",
		description: "Affordable and efficient PC for everyday use",
		specs: [
			"CPU: Synaptics BG5CT Quad Core",
			"4GB RAM",
			"Internal Storage: 32GB",
			"Download: 220.6 Mbps",
			"Upload: 39.2 Mbps",
		],
	},
	{
		name: "HP Chromebook",
		img: "HPChromebook",
		description: "Powerful laptop for professionals",
		specs: [
			"CPU: Mediatek MT8183",
			"4GB RAM LPDDR4X-4266 SDRAM",
			"GPU: ARM Mali-G72 MP3 Graphics",
			"Internal Storage: 32GB eMMC 5.0",
			"Download: 216.3 Mbps",
			"Upload: 21.8 Mbps",
		],
	},
	{
		name: "Lenovo Chromebook",
		img: "LenovoChromebook",
		description: "Lightweight and fast for on-the-go productivity",
		specs: [
			"CPU: MediaTek Kompanio 520",
			"4GB RAM LPDDR4x-3733",
			"GPU: ARM Mali-G52 2EE MC2 GPU",
			"Internal Storage: 32GB eMMC 5.1",
			"Download: 218.4 Mbps",
			"Upload: 44.2 Mbps",
		],
	},
];

export default function JCPCProduct() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("0");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div
			className="rounded-lg p-6 text-emerald-800 bg-emerald-200 cursor-pointer"
			onClick={() => setOpen(true)}>
			<Dialog
				open={open}
				onClose={() => setOpen(false)}
				className="relative z-10">
				<DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<DialogPanel className="relative max-w-[80%] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ">
							<div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
								<IoClose
									onClick={() => setOpen(false)}
									color="white"
									size={26}
									className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
								/>
								<p className="font-bold text-4xl text-center py-2">
									Our Products
								</p>
							</div>

							<div className="px-4 pb-4 pt-5 ">
								<TabContext value={value}>
									<Box
										sx={{
											borderBottom: 1,
											borderColor: "divider",
											display: "flex",
											justifyContent: "center",
										}}>
										<TabList onChange={handleChange}>
											<Tab label="Jio PC" value="0" />
											<Tab label="HP Chromebook" value="1" />
											<Tab label="Lenovo Chromebook" value="2" />
										</TabList>
									</Box>
									{products.map((product, index) => (
										<TabPanel key={product.name} value={`${index}`}>
											<div className="flex flex-col md:flex-row gap-6">
												<div className="w-full md:w-1/2">
													<img
														loading="eager"
														src={`/images/devices/${product.img}.jpg`}
														alt={product.name}
														className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
													/>
												</div>
												<div className="w-full md:w-1/2">
													<h3 className="text-xl font-semibold mb-4">
														{product.name} Specifications
													</h3>
													<ul className="space-y-2">
														{product.specs.map((spec, index) => (
															<li key={index} className="flex items-center">
																<svg
																	className="w-4 h-4 mr-2 text-green-500"
																	fill="none"
																	stroke="currentColor"
																	viewBox="0 0 24 24"
																	xmlns="http://www.w3.org/2000/svg">
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth={2}
																		d="M5 13l4 4L19 7"
																	/>
																</svg>
																{spec}
															</li>
														))}
													</ul>
												</div>
											</div>
										</TabPanel>
									))}
								</TabContext>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
			<div className="flex justify-between items-start mb-4">
				<div>
					<h3 className="text-lg font-normal">Our Products</h3>
					<p className="text-4xl font-semibold mt-2">3</p>
				</div>
				<div className="p-2 bg-white bg-opacity-30 rounded-lg">
					<FaProductHunt size={24} />
				</div>
			</div>
		</div>
	);
}

const DeviceCard = ({ product }) => {
	return (
		<div className="w-full flex flex-col  rounded overflow-hidden border-2 border-gray-300">
			<div className="font-bold text-xl mb-2">{product.name}</div>
			<img
				className="w-80 h-80 object-contain mx-auto px-2"
				width={96}
				sizes
				src={`/images/devices/${product.img}.jpg`}
				alt="img"
			/>

			<h3 className="font-bold text-xl mt-6 mb-5 ">Specifications:</h3>
			<ul className="list-disc pl-9 mb-5 text-left space-y-1">
				{product.specs.map((spec, specIndex) => (
					<li key={specIndex} className="text-sm text-gray-700">
						{spec}
					</li>
				))}
			</ul>
		</div>
	);
};
