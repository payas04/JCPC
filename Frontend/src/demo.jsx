import { Dialog, DialogPanel } from "@headlessui/react";

import CustomPieChart from "./charts/CustomPieChart";

import { IoClose } from "react-icons/io5";

export default function UserModal({ open, setOpen, user, heading }) {
	const issue = [
		{ id: 0, value: user.Blocker, label: "Blocker", color: "#FF0000" },
		{ id: 1, value: user.Critical, label: "Critical", color: "#FF4500" },
		{ id: 2, value: user.Major, label: "Major", color: "#FFA500" },
		{ id: 3, value: user.Normal, label: "Normal", color: "#2196F3" },
		{ id: 4, value: user.Minor, label: "Minor", color: "#4CAF50" },
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
						<div className="h-24 w-full bg-gray-800 flex justify-end">
							<IoClose
								onClick={() => setOpen(false)}
								color="white"
								size={15}
								className="hover:bg-red-500 hover:rounded-full mr-4 mt-4"
							/>
						</div>
						<div className="px-4">
							<div className="relative px-4 pb-4">
								<div className="absolute -top-12 left-4">
									<img
										className="w-24 h-24 rounded-full border-4 border-white"
										src={`/images/members/${user.Domain}.jpg`}
										onError={(e) => {
											e.target.src = "/images/profile/default.png";
										}}
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
											<p className="font-bold text-xl ">{user.Total_score}</p>
											<p className="bg-gray-800 text-white px-2">Total Score</p>
										</div>
									</div>
									<p className="mt-2 text-gray-700 ">{user["About"]}</p>
									<div className="mt-7 flex gap-3 justify-between">
										<div>
											{user["Courses Completed"] !== "" && (
												<>
													<h2 className="text-lg font-semibold mt-2">
														Courses Completed:
													</h2>
													<ul className="text-gray-700">
														{user["Courses Completed"]
															.split("\n")
															.map((text, index) => (
																<li key={index}>{text}</li>
															))}
													</ul>
												</>
											)}

											{user["Extra Activities"] !== "" && (
												<>
													<h2 className="text-lg font-semibold mt-4">
														Extra Activities:
													</h2>
													<ul className="list-inside text-gray-700">
														{user["Extra Activities"]
															.split("\n")
															.map((text, index) => (
																<li key={index}>{text}</li>
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
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
