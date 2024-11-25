import React, { useEffect, useState } from "react";
import { Edit, PlusCircle, Search, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { useOutletContext } from "react-router-dom";
import { useAuth } from "../../context/auth";
import EditMember from "../../components/modals/EditMember";
import NewMember from "../../components/modals/NewMember";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function AccopsAdmin() {
	const { user } = useAuth();
	const { setRefreshTrigger } = useOutletContext();
	const profiles = useSelector((state) => state.profile.profiles);
	const [isLoading, setIsLoading] = useState(true);
	const [members, setMembers] = useState(profiles);
	const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [selectedMember, setSelectedMember] = useState(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		domainID: "",
		isAdmin: false,
		password: "",
		role: "",
	});

	// Step 1: Add search query state
	// const [searchQuery, setSearchQuery] = useState("");

	// Step 2: Filter the data based on the search query

	useEffect(() => {
		if (profiles) {
			setMembers(profiles);
			setIsLoading(false);
		}
	}, [profiles]);

	// const filteredData = members.filter((user) =>
	// 	user?.Name?.toLowerCase().includes(searchQuery.toLowerCase())
	// );
	const openEditModal = (member) => {
		setSelectedMember(member);
		setIsEditModalOpen(true);
	};

	const handleCreateNewUser = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const response = await axios.post(
				BASE_URL + "/api/user/register",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			if (response.data.success) {
				toast.success(`${response?.data?.message}`);
				setFormData({
					name: "",
					email: "",
					domainID: "",
					password: "",
					isAdmin: false,
					role: "",
				});
				setIsNewUserModalOpen(false);
				setRefreshTrigger((prev) => !prev);
				setIsLoading(false);
			}
		} catch (error) {
			toast.error(`${error.response?.data?.message}`);
			setIsLoading(false);
			console.log(error);
		}
	};

	const handleDeleteUser = async (id) => {
		try {
			setIsLoading(true);
			const response = await axios.delete(BASE_URL + `/api/user/${id}`, {
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			});
			if (response.data.success) {
				toast.success(`${response?.data?.message}`);
				setRefreshTrigger((prev) => !prev);
				setIsLoading(false);
			}
		} catch (error) {
			toast.error(`${error.response?.data?.message}`);
			setIsLoading(false);
			console.log(error);
		}
	};

	const handlerUpdateUser = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const response = await axios.put(
				BASE_URL + `/api/user/${selectedMember._id}`,
				selectedMember,
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			if (response.data.success) {
				toast.success(`${response?.data?.message}`);
				setSelectedMember(null);
				setIsEditModalOpen(false);
				setRefreshTrigger((prev) => !prev);
				setIsLoading(false);
			}
		} catch (error) {
			toast.error(`${error.response?.data?.message}`);
			setIsLoading(false);
			console.log(error);
		}
	};

	if (isLoading) {
		return (
			<main className="h-screen w-full flex items-center justify-center">
				<div className="text-xl">Loading team members...</div>
			</main>
		);
	}

	return (
		<main className="h-screen w-full flex flex-col p-6 pt-12">
			{/* Fixed Header */}
			<div className="mb-6 px-6">
				<div className="flex justify-between items-center">
					<h1 className="text-3xl font-bold">Team Management</h1>
					<div className="flex items-center gap-4">
						<div className="relative">
							<Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
							<input
								type="text"
								// value={searchQuery} // Step 3: Bind input value to search query state
								// onChange={(e) => setSearchQuery(e.target.value)} // Step 4: Update search query on input change
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
			<div className="flex-1 overflow-y-scroll p-6">
				<div className="flex-1 overflow-y-auto pb-8 grid grid-cols-3 gap-6">
					{members?.map(
						(member) =>
							user._id !== member._id && (
								<div key={member._id} className=" rounded-lg shadow-md">
									<div className="p-6">
										<div className="flex items-start justify-between">
											<div className="flex items-center gap-4">
												<img
													src={member.image}
													alt={member.domainID}
													className="rounded-full w-16 h-16 object-cover"
													onError={(e) => {
														e.target.src = "/images/profile/default.png";
													}}
												/>
												<div>
													<h3 className="font-semibold text-lg">
														{member.domainID}
													</h3>
													<p className="text-gray-600">{member.role}</p>
													<p className="text-sm mt-1">
														Score: {member.score.current}
													</p>
												</div>
											</div>
											<div className="space-x-2">
												<button
													onClick={() => openEditModal(member)}
													className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
													<Edit className="h-4 w-4" />
													<span className="sr-only">Edit team member</span>
												</button>
												{user._id !== member._id && (
													<button
														onClick={() => handleDeleteUser(member._id)}
														className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
														<Trash2 className="h-4 w-4" />
														<span className="sr-only">Edit team member</span>
													</button>
												)}
											</div>
										</div>
									</div>
								</div>
							)
					)}
				</div>
			</div>

			{/* New User Modal */}
			{isNewUserModalOpen && (
				<NewMember
					formData={formData}
					setFormData={setFormData}
					setIsNewUserModalOpen={setIsNewUserModalOpen}
					handleCreateNewUser={handleCreateNewUser}
				/>
			)}

			{/* Edit User Modal */}
			{isEditModalOpen && selectedMember && (
				<EditMember
					setIsEditModalOpen={setIsEditModalOpen}
					selectedMember={selectedMember}
					setSelectedMember={setSelectedMember}
					handlerUpdateUser={handlerUpdateUser}
				/>
			)}
		</main>
	);
}
