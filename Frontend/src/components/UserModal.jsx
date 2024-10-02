import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import CustomPieChart from "./charts/CustomPieChart";

export default function UserModal({ open, setOpen, user, heading }) {
	const issue = [
		{ id: 0, value: user.Blocker, label: "Blocker", color: "#A04747" },
		{ id: 1, value: user.Critical, label: "Critical", color: "#FABC3F" },
		{ id: 2, value: user.Major, label: "Major", color: "#87A2FF" },
		{ id: 3, value: user.Normal, label: "Normal", color: "pink" },
		{ id: 4, value: user.Minor, label: "Minor", color: "green" },
	];

	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<div className="fixed inset-0 bg-black/30 " aria-hidden="true" />

			<div className="fixed inset-0 flex z-10 w-full ">
				<div className="flex  w-full max-w-4xl mx-auto items-center justify-center p-4">
					<DialogPanel className="w-full rounded-lg bg-white shadow-xl overflow-hidden h-fit ">
						<div className="h-24  w-full bg-gray-800"></div>
						<div className="px-4">
							<div className="relative px-4 pb-4">
								<div className="absolute -top-12 left-4">
									<img
										className="w-24 h-24 rounded-full border-4 border-white"
										src="/images/Binit.jpg"
										alt="Profile picture"
									/>
								</div>
								<div className="pt-16 ">
									<div className="flex justify-between items-center">
										<div>
											<h1 className="text-2xl font-bold">{user.Name}</h1>
											<p className="text-gray-600">@Tester</p>
										</div>
										<div className="text-center rounded-lg overflow-hidden border-2 h-fit">
											<p>{user.score}</p>
											<p className="bg-gray-800 text-white px-2">Total Score</p>
										</div>
									</div>
									<p className="mt-2 text-gray-700 ">{user["About me"]}</p>
									<div className="mt-7 flex gap-3 justify-between">
										<div>
											{user["Courses Completed"] !== "" && (
												<>
													<h2 className="text-lg font-semibold mt-2">
														Courses Completed:
													</h2>
													<ul className="list-disc text-gray-700 px-4">
														{user["Courses Completed"]
															.split("\n")
															.map((text) => (
																<li>{text}</li>
															))}
													</ul>
												</>
											)}

											{user["Extra Activites"] !== "" && (
												<>
													<h2 className="text-lg font-semibold mt-4">
														Extra Activities:
													</h2>
													<ul className="list-disc list-inside text-gray-700">
														{user["Extra Activites"].split("\n").map((text) => (
															<li>{text}</li>
														))}
													</ul>
												</>
											)}
										</div>
										<div className="flex justify-center items-center">
											<CustomPieChart data={issue} radiusValue={30} />
										</div>
									</div>
								</div>
							</div>
							<div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
								<button
									type="button"
									onClick={() => setOpen(false)}
									className=" inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
									Close
								</button>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
