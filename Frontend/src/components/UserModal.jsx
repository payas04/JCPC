import { Dialog, DialogPanel } from "@headlessui/react";

import CustomPieChart from "./charts/CustomPieChart";

import { IoClose } from "react-icons/io5";
import { Badge } from "@mui/material";

export default function UserModal({ open, setOpen, user, heading }) {
	const issue = [
		{ value: user.Blocker, label: "Blocker" },
		{ value: user.Critical, label: "Critical" },
		{ value: user.Major, label: "Major" },
		{ value: user.Normal, label: "Normal" },
		{ value: user.Minor, label: "Minor" },
	];
	const maxValue = Math.max(...issue.map((item) => item.value));
	const totalIssues = issue.reduce((sum, item) => sum + item.value, 0);

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
								<div className="flex gap-4 mt-4">
									<div className="pr-4 border-r border-blue-800 flex-1">
										<p className="text-lg text-gray-950 font-normal">
											{user["About"]}
										</p>
										<div>
											{user["Courses Completed"] !== "" && (
												<>
													<h2 className="text-lg font-bold mt-4 text-blue-800">
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
									</div>

									<div className="flex-1 space-y-4 h-full">
										{/* <CustomPieChart data={issue} radiusValue={30} /> */}
										<h3 className="text-lg font-bold text-blue-800 mb-4">
											Issues Severity Distribution
										</h3>
										{issue.map((item) => (
											<div
												key={item.name}
												className="flex items-center group transition-all duration-300 ease-in-out hover:scale-105">
												<div className="w-24 text-sm font-semibold group-hover:font-bold">
													{item.label}
												</div>
												<div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden transition-all duration-300 ease-in-out">
													<div
														className="h-full bg-blue-800"
														style={{
															width: `${(item.value / maxValue) * 100}%`,
														}}
													/>
												</div>
												<div className="w-12 text-right font-bold text-lg group-hover:text-lg transition-all duration-300 ease-in-out">
													{item.value}
												</div>
											</div>
										))}
										<div className="mt-4 text-center">
											<p className="text-lg py-1 bg-gray-300 inline-block rounded-full text-gray-800 font-bold px-2">
												Total Issues: {totalIssues}
											</p>
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
