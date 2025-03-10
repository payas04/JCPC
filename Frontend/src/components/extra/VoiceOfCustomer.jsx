import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React from "react";
import { IoClose } from "react-icons/io5";

const VoiceOfCustomer = ({ open, setOpen }) => {
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

			<div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
				<div className="flex items-center justify-center text-center h-screen w-screen">
					<DialogPanel className="relative w-[60%] h-fit max-h-[85%] overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
						{/* Header Section */}
						<div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
							<IoClose
								onClick={() => setOpen(false)}
								color="white"
								size={26}
								className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
							/>
							<h2 className="font-bold text-4xl text-center py-2">
								Voice of Customer
							</h2>
						</div>

						{/* Overview Section */}
						<div className="bg-gray-100 p-8 mt-2 mb-2 rounded-md shadow-md max-w-4xl mx-auto">
							<section className="bg-white p-6 rounded-lg shadow mb-8">
								<h2 className="text-lg font-semibold mb-4">Task Overview</h2>
								<p className="bg-white rounded-lg">
									As part of enhancing customer engagement and support, our team
									has curated a comprehensive list of 50 potential customer
									queries across 10 product modules. The goal is to create
									clear, informative, and structured responses. This will serve
									as a valuable resource for customer interactions, FAQs, and
									support documentation.
								</p>
							</section>

							{/* key deliverables  */}
							<section className="bg-white p-6 rounded-lg shadow mb-6">
								<h2 className="text-lg font-semibold mb-5">Key Deliverables</h2>
								<ul className="list-disc ml-2 bg-white p-4 rounded-lg  space-y-2">
									<li>
										<strong className="font-semibold">Drafted FAQs: </strong>
										Develop clear, precise, and customer-friendly responses for
										each question
									</li>
									<li>
										<strong className="font-semibold">
											Detailed Guidance:
										</strong>{" "}
										Deliver the FAQ document in a structured format that can be
										easily uploaded to relevant platforms (e.g., website,
										customer support portal).
									</li>
									{/* <li>
										<strong className="font-semibold">
											Step-by-Step Solutions:
										</strong>{" "}
										For common issues and setup instructions to improve user
										experience.
									</li> */}
								</ul>
							</section>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default VoiceOfCustomer;
