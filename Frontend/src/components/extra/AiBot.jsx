import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import BarGraph from "../charts/BarGraph";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { aiBotBarData } from "../../db/data";

const AiBot = ({ open, setOpen }) => {
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

			<div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto ">
				<div className="flex items-center justify-center text-center h-screen w-screen">
					<DialogPanel className="relative w-[60%] h-fit max-h-[85%] overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
						<div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
							<IoClose
								onClick={() => setOpen(false)}
								color="white"
								size={26}
								className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
							/>
							<h2 className="font-bold text-4xl text-center py-2">
								AI Bot (Managed WiFi)
							</h2>
						</div>
						<div className="p-8">
							<div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-md mt-2 p-2">
								<h4 className="font-bold text-2xl mb-4">Task Overview</h4>
								<p className="text-lg font-semibold">
									Our team successfully completed the task of creating distinct
									questions related to WiFi, simulating how users would
									naturally interact with an AI bot regarding WiFi issues,
									queries, or services. We generated over 900 expressions that
									reflect two user segments.
								</p>
							</div>
							<div className="flex gap-2 mt-10 shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-md p-2">
								<div className="flex-1 border-r-2 pr-2 ">
									<div className="mb-3">
										<h4 className="font-bold text-2xl px-1 mb-2">
											Technical users
										</h4>
										<ol className="list-decimal pl-6 text-lg font-semibold leading-6 mb-4">
											<li>
												These users might be slightly familiar with WiFi
												concepts but may not know advanced details
											</li>
											<li>
												They might use basic tech terms but need more guidance.
											</li>
										</ol>
									</div>
									<div>
										<h4 className="font-bold text-2xl px-1 mb-2">
											Non-Technical Users
										</h4>
										<ol className="list-decimal pl-6 text-lg font-semibold leading-6">
											<li>
												These users would ask simple, basic questions about WiFi
											</li>
											<li>
												They might be confused or unsure about technical terms
												and rely on plain language
											</li>
										</ol>
									</div>
								</div>
								<div className="flex-1  ">
									<h4 className="font-bold text-2xl mb-2 px-1">Data Summary</h4>
									<ul className="list-disc pl-6 text-lg font-semibold leading-6">
										<li>Technical Intents: 21</li>
										<li>Technical Expressions: 300</li>
										<li>Non Technical Intents: 20</li>
										<li>Non Technical Expressions: 181</li>
									</ul>
									<div className="py-4">
										<h4 className="font-bold text-xl mb-2 px-1">
											Intents and Expressions Comparison
										</h4>
										<p className="font-normal text-sm text-gray-500 px-1">
											Technical vs Non-Technical
										</p>
									</div>
									<div style={{ width: "100%", height: 200, maxWidth: 800 }}>
										<ResponsiveContainer>
											<BarChart
												width={500}
												height={300}
												data={aiBotBarData}
												margin={{
													top: 5,
													right: 30,
													left: 20,
													bottom: 5,
												}}>
												<CartesianGrid strokeDasharray="3 3" />
												<XAxis dataKey="name" />
												<YAxis />
												<Tooltip />
												<Legend />
												<Bar
													dataKey="intents"
													fill="#82B7CA" //#E4C087
													// activeBar={<Rectangle fill="pink" stroke="blue" />}
												/>
												<Bar
													dataKey="expressions"
													fill="#82ca9d" //#BC7C7C
													// activeBar={<Rectangle fill="gold" stroke="purple" />}
												/>
											</BarChart>
										</ResponsiveContainer>
									</div>
									<p className="px-2 text-center font-semibold">
										Total Expressions without filteration : 920
									</p>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default AiBot;
