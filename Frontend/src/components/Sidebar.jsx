import React from "react";

const Sidebar = () => {
	return (
		<aside className="w-64 bg-blue-800 text-white p-6 flex flex-col justify-between">
			<div>
				<div className="text-2xl font-bold mb-8">Assist</div>
				<nav>
					<ul className="space-y-4">
						<li className="text-lg font-medium flex items-center space-x-2 text-teal-400">
							<span>📊</span>
							<span>Dashboard</span>
						</li>
						<li className="text-lg flex items-center space-x-2">
							<span>📝</span>
							<span>My Tasks</span>
						</li>
						<li className="text-lg flex items-center space-x-2">
							<span>📈</span>
							<span>Statistics</span>
						</li>
						<li className="text-lg flex items-center space-x-2">
							<span>👥</span>
							<span>Profiles</span>
						</li>
						<li className="text-lg flex items-center space-x-2">
							<span>⚙️</span>
							<span>Settings</span>
						</li>
					</ul>
				</nav>
			</div>

			{/* Teams */}
			<div>
				<h2 className="text-gray-500 text-sm mb-4">TEAMS</h2>
				<ul className="space-y-2">
					<li className="text-sm flex items-center space-x-2">
						<span className="text-purple-500">●</span>
						<span>Sales</span>
					</li>
					<li className="text-sm flex items-center space-x-2">
						<span className="text-orange-500">●</span>
						<span>Marketing</span>
					</li>
					<li className="text-sm flex items-center space-x-2">
						<span>➕</span>
						<span>Add project</span>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
