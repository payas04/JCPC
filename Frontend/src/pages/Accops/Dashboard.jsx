import React from "react";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
	return (
		<div className="flex h-screen bg-gray-100 text-white">
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content */}
			<main className="flex-1 p-6 pt-12">
				{/* Header */}
				<header className="flex justify-between items-center mb-6">
					<div>
						<h1 className="text-2xl font-bold text-black">
							Welcome, Rahul Bhandhari
						</h1>
						<p className="text-gray-400">
							Track your projects, tasks & team activity here
						</p>
					</div>
					<div className="flex space-x-4 items-center">
						<button className="bg-gray-700 p-2 rounded-full">🔍</button>
						<button className="bg-gray-700 p-2 rounded-full">📅</button>
						<img
							className="w-10 h-10 rounded-full"
							src="https://via.placeholder.com/40"
							alt="Profile"
						/>
					</div>
				</header>

				{/* Project Overview Section */}
				<section className="grid grid-cols-3 gap-6 mb-6">
					<div className="bg-white text-black p-6 rounded-lg">
						<h2 className="text-lg font-bold mb-4">Bond Project</h2>
						<div className="flex items-center space-x-2 mb-4">
							<span className="text-sm text-gray-400">#Design</span>
						</div>
						<div className="flex space-x-2 mb-4">
							<div className="bg-yellow-400 h-2 w-1/3 rounded"></div>
							<div className="bg-gray-600 h-2 w-1/3 rounded"></div>
							<div className="bg-gray-600 h-2 w-1/3 rounded"></div>
						</div>
						<div className="flex items-center space-x-2">
							<img
								className="w-8 h-8 rounded-full"
								src="https://via.placeholder.com/30"
								alt="Avatar"
							/>
							<img
								className="w-8 h-8 rounded-full"
								src="https://via.placeholder.com/30"
								alt="Avatar"
							/>
							<span>+3</span>
						</div>
						<button className="mt-4 w-full bg-teal-500 text-white p-2 rounded">
							See All Project
						</button>
					</div>

					<div className="bg-white text-black p-6 rounded-lg">
						<h2 className="text-lg font-bold mb-4">Overall Information</h2>
						<div className="flex space-x-4">
							<div>
								<h3 className="text-2xl font-bold">57</h3>
								<span className="text-gray-400">tasks done</span>
							</div>
							<div>
								<h3 className="text-2xl font-bold">124</h3>
								<span className="text-gray-400">total tasks</span>
							</div>
						</div>
					</div>

					<div className="bg-white text-black p-6 rounded-lg">
						<h2 className="text-lg font-bold mb-4">Top Performers</h2>
						<div className="flex items-center space-x-4">
							<div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full">
								97%
							</div>
							<span className="text-gray-400">Progress</span>
						</div>
					</div>
				</section>

				{/* Tasks Activity Table */}
				<section className="bg-white text-black p-6 rounded-lg">
					<h2 className="text-lg font-bold mb-4">Tasks Activity</h2>
					<div className="overflow-x-auto">
						<table className="w-full text-left">
							<thead className="bg-white text-black">
								<tr>
									<th className="p-2">Assigned to</th>
									<th className="p-2">Deadline</th>
									<th className="p-2">Task</th>
									<th className="p-2">Status</th>
									<th className="p-2">Project</th>
									<th className="p-2"></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="p-2">Juan M.</td>
									<td className="p-2">May 16th, 2023</td>
									<td className="p-2">Establish and maintain design...</td>
									<td className="p-2 text-yellow-400">In Progress</td>
									<td className="p-2">Crimson Studio</td>
									<td className="p-2">
										<button className="bg-teal-500 p-1 rounded">
											See Details
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Dashboard;
