import { Dialog, DialogPanel } from "@headlessui/react";

import CustomPieChart from "./charts/CustomPieChart";

import { IoClose } from "react-icons/io5";

export default function UserModal({ open, setOpen, user, heading }) {
	const issue = [
		{ id: 0, value: user.Blocker, label: "Blocker", color: "#991B1B" },
		{ id: 1, value: user.Critical, label: "Critical", color: "#DC2626" },
		{ id: 2, value: user.Major, label: "Major", color: "#F97316" },
		{ id: 3, value: user.Normal, label: "Normal", color: "#A855F7" },
		{ id: 4, value: user.Minor, label: "Minor", color: "#3B82F6" },
	];

	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<div className="fixed inset-0 bg-black/80" aria-hidden="true" />

			<div className="fixed inset-0 flex z-10 w-full ">
				<div className="flex w-full max-w-4xl mx-auto items-center justify-center p-4">
					<DialogPanel className="w-full rounded-lg bg-white shadow-xl overflow-hidden h-fit ">
						<div className="relative px-4">
							<span
								className="absolute right-2 z-10"
								onClick={() => setOpen(false)}>
								<IoClose
									color="black"
									size={26}
									className=" hover:bg-red-500 hover:rounded-full cursor-pointer"
								/>
							</span>
							<div className="relative px-4 pb-4">
								<div className="flex mt-2 pt-2">
									<img
										className="w-32 h-32 rounded-full border-4 border-blue-800 object-contain bg-white"
										src={`/images/members/${user.Domain}.jpg`}
										onError={(e) => {
											e.target.src = "/images/profile/default.png";
										}}
										alt="Profile picture"
									/>
									<div className="flex justify-between items-center flex-grow pl-4">
										<div>
											<h1 className="text-4xl font-bold mb-2">{user.Name}</h1>
											<p className="text-blue-800 font-bold text-xl">
												{user.Tags}
											</p>
										</div>
										<div className="text-center rounded-lg overflow-hidden border-2 h-fit border-blue-800">
											<p className="font-bold text-xl ">{user.Total_score}</p>
											<p className="bg-blue-800 text-white px-2">Total Score</p>
										</div>
									</div>
								</div>
								<div className="">
									<p className="mt-4 text-gray-950 font-semibold">
										{user["About"]}
									</p>
									<div className="mt-7 flex justify-between">
										<div>
											{user["Courses Completed"] !== "" && (
												<>
													<h2 className="text-lg font-bold text-blue-800">
														Courses Completed:
													</h2>
													<ul className="text-gray-900 font-semibold">
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
													<h2 className="text-lg font-bold mt-4 text-blue-800">
														Extra Activities:
													</h2>
													<ul className="list-inside text-gray-900 font-semibold">
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
