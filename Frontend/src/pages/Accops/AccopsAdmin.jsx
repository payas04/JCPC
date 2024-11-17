import React, { useState } from "react";
import { Edit, PlusCircle, Search } from "lucide-react";

export default function AccopsAdmin() {
	const [members, setMembers] = useState([
		{
			id: 1,
			name: "Pranav Patne",
			role: "Validator",
			score: 106,
			image: "/placeholder.svg?height=100&width=100",
		},
		{
			id: 2,
			name: "Piyush Barhanpurkar",
			role: "Tester",
			score: 98,
			image: "/placeholder.svg?height=100&width=100",
		},
		{
			id: 3,
			name: "Manali Surve",
			role: "Validator",
			score: 74,
			image: "/placeholder.svg?height=100&width=100",
		},
		{
			id: 4,
			name: "Jagruti Zawar",
			role: "Tester",
			score: 61,
			image: "/placeholder.svg?height=100&width=100",
		},
		{
			id: 4,
			name: "Jagruti Zawar",
			role: "Tester",
			score: 61,
			image: "/placeholder.svg?height=100&width=100",
		},
		{
			id: 4,
			name: "Jagruti Zawar",
			role: "Tester",
			score: 61,
			image: "/placeholder.svg?height=100&width=100",
		},
		{
			id: 4,
			name: "Jagruti Zawar",
			role: "Tester",
			score: 61,
			image: "/placeholder.svg?height=100&width=100",
		},
		{
			id: 4,
			name: "Jagruti Zawar",
			role: "Tester",
			score: 61,
			image: "/placeholder.svg?height=100&width=100",
		},
		{
			id: 4,
			name: "Jagruti Zawar",
			role: "Tester",
			score: 61,
			image: "/placeholder.svg?height=100&width=100",
		},
		{
			id: 4,
			name: "Jagruti Zawar",
			role: "Tester",
			score: 61,
			image: "/placeholder.svg?height=100&width=100",
		},
		{
			id: 4,
			name: "Jagruti Zawar",
			role: "Tester",
			score: 61,
			image: "/placeholder.svg?height=100&width=100",
		},
		{
			id: 4,
			name: "Jagruti Zawar",
			role: "Tester",
			score: 61,
			image: "/placeholder.svg?height=100&width=100",
		},
		{
			id: 4,
			name: "Jagruti Zawar",
			role: "Tester",
			score: 61,
			image: "/placeholder.svg?height=100&width=100",
		},
	]);

	const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [selectedMember, setSelectedMember] = useState(null);

	const openEditModal = (member) => {
		setSelectedMember(member);
		setIsEditModalOpen(true);
	};

	return (
		<main className="h-screen w-full flex flex-col p-6 pt-12">
			{/* Fixed Header */}
			<div className="mb-6 px-6">
				<div className="flex justify-between items-center">
					<h1 className="text-3xl font-bold">Team Management</h1>
					<div className="flex items-center gap-4">
						<div className="relative">
							<Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
							<input
								type="text"
								placeholder="Search team members..."
								className="pl-8 w-[300px] p-2 border rounded-md"
							/>
						</div>
						<select className="w-[180px] p-2 border rounded-md">
							<option value="name">Sort by Name</option>
							<option value="score-high">Score: High to Low</option>
							<option value="score-low">Score: Low to High</option>
							<option value="role">Sort by Role</option>
						</select>
						<button
							onClick={() => setIsNewUserModalOpen(true)}
							className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
							<PlusCircle className="h-4 w-4" />
							Create New User
						</button>
					</div>
				</div>
			</div>

			{/* Scrollable Content */}
			{/* <div className="flex-1 overflow-y-scroll p-6"> */}
			<div className="flex-1 overflow-y-auto p-6 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{members.map((member) => (
					<div key={member.id} className="bg-white rounded-lg shadow-md">
						<div className="p-6">
							<div className="flex items-start justify-between">
								<div className="flex items-center gap-4">
									<img
										src={member.image}
										alt={member.name}
										className="rounded-full w-16 h-16 object-cover"
										onError={(e) => {
											e.target.src = "/images/profile/default.png";
										}}
									/>
									<div>
										<h3 className="font-semibold text-lg">{member.name}</h3>
										<p className="text-gray-600">{member.role}</p>
										<p className="text-sm mt-1">Score: {member.score}</p>
									</div>
								</div>
								<button
									onClick={() => openEditModal(member)}
									className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
									<Edit className="h-4 w-4" />
									<span className="sr-only">Edit team member</span>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			{/* </div> */}

			{/* New User Modal */}
			{isNewUserModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="bg-white p-6 rounded-lg w-[500px]">
						<h2 className="text-xl font-bold mb-4">Create New Team Member</h2>
						<div className="grid gap-4">
							<div>
								<label
									htmlFor="new-name"
									className="block text-sm font-medium mb-1">
									Name
								</label>
								<input
									id="new-name"
									type="text"
									placeholder="Enter name"
									className="w-full p-2 border rounded-md"
								/>
							</div>
							<div>
								<label
									htmlFor="new-role"
									className="block text-sm font-medium mb-1">
									Role
								</label>
								<select id="new-role" className="w-full p-2 border rounded-md">
									<option value="">Select role</option>
									<option value="Validator">Validator</option>
									<option value="Tester">Tester</option>
									<option value="Program Manager">Program Manager</option>
								</select>
							</div>
							<div>
								<label
									htmlFor="new-score"
									className="block text-sm font-medium mb-1">
									Initial Score
								</label>
								<input
									id="new-score"
									type="number"
									placeholder="Enter initial score"
									className="w-full p-2 border rounded-md"
								/>
							</div>
						</div>
						<div className="flex justify-end gap-4 mt-6">
							<button
								onClick={() => setIsNewUserModalOpen(false)}
								className="px-4 py-2 border rounded-md hover:bg-gray-50">
								Cancel
							</button>
							<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
								Create User
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Edit User Modal */}
			{isEditModalOpen && selectedMember && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="bg-white p-6 rounded-lg w-[500px]">
						<h2 className="text-xl font-bold mb-4">Edit Team Member</h2>
						<div className="grid gap-4">
							<div>
								<label
									htmlFor={`name-${selectedMember.id}`}
									className="block text-sm font-medium mb-1">
									Name
								</label>
								<input
									id={`name-${selectedMember.id}`}
									type="text"
									defaultValue={selectedMember.name}
									className="w-full p-2 border rounded-md"
								/>
							</div>
							<div>
								<label
									htmlFor={`role-${selectedMember.id}`}
									className="block text-sm font-medium mb-1">
									Role
								</label>
								<select
									id={`role-${selectedMember.id}`}
									defaultValue={selectedMember.role}
									className="w-full p-2 border rounded-md">
									<option value="Validator">Validator</option>
									<option value="Tester">Tester</option>
									<option value="Program Manager">Program Manager</option>
								</select>
							</div>
							<div>
								<label
									htmlFor={`score-${selectedMember.id}`}
									className="block text-sm font-medium mb-1">
									Score
								</label>
								<input
									id={`score-${selectedMember.id}`}
									type="number"
									defaultValue={selectedMember.score}
									className="w-full p-2 border rounded-md"
								/>
							</div>
						</div>
						<div className="flex justify-end gap-4 mt-6">
							<button
								onClick={() => setIsEditModalOpen(false)}
								className="px-4 py-2 border rounded-md hover:bg-gray-50">
								Cancel
							</button>
							<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
								Save Changes
							</button>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
