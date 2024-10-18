import React from "react";
import "../../styles/activities.css";
import BarGraph from "../charts/BarGraph";
import { selfieBarData } from "../../db/data";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const Selfie = ({ open, setOpen }) => {
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

			<div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto ">
				<div className="flex items-center justify-center text-center h-screen w-screen">
					<DialogPanel className="relative w-[60%] h-fit overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
						<div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
							<IoClose
								onClick={() => setOpen(false)}
								color="white"
								size={26}
								className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
							/>
							<p className="font-bold text-4xl text-center py-2">
								AI Selfie Module
							</p>
						</div>
						<div
							className="p-8
						">
							<div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-md mt-2 p-2">
								<h4 className="font-bold text-2xl mb-4">Task Overview</h4>
								<p className="text-lg font-semibold">
									Our team successfully completed the task of creating a dataset
									of selfies, generating a total over 2,000 selfies in both
									portrait and landscape orientations. The following are the
									detailed statistics of the work completed.
								</p>
							</div>
							<div className="flex mt-10 justify-evenly text-center shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-md ">
								<div className="flex flex-col">
									<h4 className="font-bold text-2xl mb-4">Data Summary</h4>
									<div className="h-full pb-4">
										<table className="h-full">
											<tr>
												<th>Phase</th>
												<th>Portrait</th>
												<th>Landscape</th>
												<th>Total</th>
											</tr>
											{selfieBarData.map((row) => (
												<tr>
													<td>{row.name}</td>
													<td>{row.Portrait}</td>
													<td>{row.Landscape}</td>
													<td>{row.Portrait + row.Landscape}</td>
												</tr>
											))}
										</table>
									</div>
								</div>
								<div className="relative">
									<h4 className="font-bold text-2xl mb-4">Task Statistics</h4>
									{/* <p className="absolute  -rotate-90">Selfie Count</p> */}
									<BarGraph barData={selfieBarData} />
								</div>

								{/* <div className="text-center shadow-[0_0_10px_rgba(0,0,0,0.3)] px-2 rounded-md">
									<h4 className="font-bold text-2xl mb-4">Selfie Types</h4>
									<div className="flex flex-col items-center justify-center">
										<div className="w-1/2">
											<img
												src="/images/extra/Landscape_Selfie.jpg"
												alt="Landscape Image"
												srcset=""
												width={400}
											/>
											<p className="font-semibold">Portrait Selfie</p>
										</div>
										<div className="w-1/2 flex flex-col justify-center">
											<img
												src="/images/extra/Portrait_Selfie.jpg"
												alt="Portrait Image"
												width={200}
												srcset=""
												className="my-auto"
											/>
											<p className="font-semibold">Landscape Selfie</p>
										</div>
									</div>
								</div> */}
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default Selfie;
