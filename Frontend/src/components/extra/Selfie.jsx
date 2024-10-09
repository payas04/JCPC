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
					<DialogPanel className="relative w-[60%] h-[85%] overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
						<div className="sticky top-0 left-0 w-full bg-white z-20">
							<IoClose
								onClick={() => setOpen(false)}
								color="black"
								size={26}
								className="absolute top-2 right-2 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
							/>
							<h2 className="font-bold text-4xl text-center py-2">
								AI Selfie Module
							</h2>
						</div>
						<div>
							<h4 className="font-bold text-2xl mb-4">Task Overview</h4>
							<p className="text-lg font-semibold">
								Our team successfully completed the task of creating a dataset
								of selfies, generating a total over 3,000 selfies in both
								portrait and landscape orientations. The following are the
								detailed statistics of the work completed.
							</p>
							<div className="flex mt-10 justify-between  ">
								<div className="text-center">
									<h4 className="font-bold text-2xl mb-4">Task Statistics</h4>
									<BarGraph barData={selfieBarData} />
								</div>
								<div className="text-center">
									<h4 className="font-bold text-2xl mb-4">Selfie Types</h4>
									<div className="flex gap-4">
										<div className="w-1/2">
											<img
												src="/images/extra/portrait.jpg"
												alt="Portrait Image"
												width={200}
												srcset=""
												className=" mx-auto"
											/>
											<p className="font-semibold">Portrait Selfie</p>
										</div>
										<div className="w-1/2">
											<img
												src="/images/extra/Landscape.png"
												alt="Landscape Image"
												srcset=""
												width={200}
											/>
											<p className="font-semibold">Landscape Selfie</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default Selfie;
