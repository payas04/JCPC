import React, { useState } from "react";
import {
	Camera,
	Mail,
	Hash,
	Tag,
	BookOpen,
	Activity,
	Contact,
} from "lucide-react";
import { Switch } from "@mui/material";
import { useAuth } from "../../context/auth";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

import { uploadImageApi } from "../../lib/api";
import axios from "axios";
import toast from "react-hot-toast";
import { useOutletContext } from "react-router-dom";

// Initial user data
const initialUserData = {
	domainID: "user123",
	isAdmin: true,
	role: "Developer",
	name: "John Doe",
	email: "john.doe@example.com",
	image: "/placeholder.svg?height=128&width=128",
	issues: {
		blocker: "2",
		critical: "5",
		major: "10",
		normal: "20",
		minor: "8",
	},
	courses: "React, Node.js, MongoDB",
	bio: "Passionate developer with 5 years of experience in web technologies.",
	extraActivites: "Open source contributor, Tech blogger",
	tag: "Frontend Specialist",
};

const Profile = () => {
	const { user, setTrigger } = useAuth();
	const { setRefreshTrigger } = useOutletContext();
	const [isEditing, setIsEditing] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [userData, setUserData] = useState(user);
	const [preview, setPreview] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);
	const handleInputChange = (field, value) => {
		setUserData((prev) => ({ ...prev, [field]: value }));
	};

	const handleIssueChange = (issueType, value) => {
		setUserData((prev) => ({
			...prev,
			issues: { ...prev.issues, [issueType]: value },
		}));
	};

	const handleSave = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);

			const updatedUserData = { ...userData };

			if (imageUrl) {
				const image = await uploadImageApi(imageUrl, user.domainID);
				updatedUserData.image = image;
				setPreview(null);
				setUserData((prev) => ({ ...prev, image: image }));
			}

			const response = await axios.put(
				BASE_URL + `/api/user/${user._id}`,
				updatedUserData,
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);

			if (response.data.success) {
				toast.success(`${response?.data?.message}`);
				setIsLoading(false);
				setIsEditing(false);
				setTrigger((prev) => !prev); // refresh user data
				setRefreshTrigger((prev) => !prev); //refresh profile data
			}
		} catch (error) {
			setIsLoading(false);
			setTrigger((prev) => !prev);
		}
	};

	const handleImageUpload = async (e) => {
		const imageFile = e.target.files[0];
		if (!imageFile) return setPreview(null);
		const reader = new FileReader();
		reader.onload = (e) => {
			setPreview(e.target.result);
		};
		reader.readAsDataURL(imageFile);
		setImageUrl(imageFile);
	};

	const handleCancel = () => {
		setUserData(user);
		setIsEditing(false);
		setPreview(null);
		setImageUrl(null);
	};

	if (isLoading) {
		return (
			<main className="h-screen w-full flex items-center justify-center">
				<div className="text-xl">Loading profile data...</div>
			</main>
		);
	}

	return (
		<div className="container mx-auto pt-12 p-6">
			<div className="space-y-6">
				<form
					onSubmit={(e) => {
						handleSave(e);
					}}>
					<div className="flex items-center justify-between px-6 mb-4">
						<div>
							<h1 className="text-3xl font-bold">Profile</h1>
							<p className="text-gray-600">
								Manage your account settings and preferences
							</p>
						</div>
						<div className="space-x-2">
							{isEditing ? (
								<>
									<button
										className="px-4 py-2 rounded-md border border-black hover:bg-gray-300 transition-colors"
										type="button"
										onClick={handleCancel}>
										Cancel
									</button>
									<button
										className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
										type="submit">
										Save Changes
									</button>
								</>
							) : (
								<button
									className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
									type="button"
									onClick={() => setIsEditing(true)}>
									Edit Profile
								</button>
							)}
						</div>
					</div>

					<div className="grid gap-6 md:grid-cols-2 px-6">
						{/* Personal Information Card */}

						<div className="bg-white rounded-lg shadow-md p-6 h-fit">
							<div className="mb-6">
								<h2 className="text-xl font-bold">Personal Information</h2>
								<p className="text-gray-600 text-sm">
									Update your photo and personal details
								</p>
							</div>

							<div className="space-y-4">
								<div className="flex items-center gap-4">
									<div className="relative">
										{preview ? (
											<img
												src={preview}
												alt="Preview"
												className="rounded-full object-cover w-24 h-24"
											/>
										) : (
											<img
												alt="Profile picture"
												className="rounded-full object-cover w-24 h-24"
												src={userData.image}
												onError={(e) => {
													e.target.src = "/images/profile/default.png";
												}}
											/>
										)}
										{isEditing && (
											<>
												<label
													htmlFor="image-upload"
													className="absolute -bottom-2 -right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
													<Camera className="h-4 w-4" />
												</label>
												<input
													type="file"
													id="image-upload"
													accept="image/*"
													className="hidden"
													onChange={handleImageUpload}
												/>
											</>
										)}
									</div>
									<div>
										<h3 className="font-semibold">{userData.name}</h3>
										<p className="text-gray-600 text-sm">{userData.role}</p>
									</div>
								</div>

								<hr className="border-gray-200" />

								<div className="space-y-4">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium mb-1">
											Full Name
										</label>
										<div className="flex items-center gap-2">
											<Contact className="h-4 w-4 text-gray-500" />
											<input
												id="name"
												type="text"
												className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100 cursor-not-allowed"
												value={userData.name}
												onChange={(e) =>
													handleInputChange("name", e.target.value)
												}
												disabled={true}
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium mb-1">
											Email
										</label>
										<div className="flex items-center gap-2">
											<Mail className="h-4 w-4 text-gray-500" />
											<input
												id="email"
												type="email"
												className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100 cursor-not-allowed"
												value={userData.email}
												onChange={(e) =>
													handleInputChange("email", e.target.value)
												}
												disabled={true}
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="domainID"
											className="block text-sm font-medium mb-1">
											Domain ID
										</label>
										<div className="flex items-center gap-2">
											<Hash className="h-4 w-4 text-gray-500" />
											<input
												id="domainID"
												type="text"
												className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100 cursor-not-allowed"
												value={userData.domainID}
												disabled={true}
											/>
										</div>
									</div>

									<div className="flex items-center gap-2">
										<div className="relative inline-flex items-center cursor-pointer">
											{/* <input
											type="checkbox"
											id="isAdmin"
											className="sr-only peer"
											checked={userData.isAdmin}
											onChange={(e) =>
												handleInputChange("isAdmin", e.target.checked)
											}
											disabled={!isEditing}
										/> */}

											<label
												htmlFor="isAdmin"
												className="block text-sm font-medium mb-1">
												Admin Status
											</label>
											<Switch
												id="isAdmin"
												checked={userData.isAdmin}
												disabled
												className="cursor-not-allowed"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Professional Details Section */}
						<div className="flex flex-col overflow-y-scroll h-screen space-y-6 pb-48">
							{/* Professional Details Card */}
							<div className="bg-white rounded-lg p-6 shadow-md flex-1">
								<div className="mb-6">
									<h2 className="text-xl font-bold">Professional Details</h2>
									<p className="text-gray-600 text-sm">
										Update your role and work information
									</p>
								</div>

								<div className="space-y-4">
									<div>
										<label
											htmlFor="role"
											className="block text-sm font-medium mb-1">
											Role
										</label>

										<select
											id="role"
											defaultValue={userData.role}
											className={`w-full px-3 py-2 border rounded-md disabled:bg-gray-100 ${
												!isEditing || !user.isAdmin ? "cursor-not-allowed" : ""
											}`}
											onChange={(e) =>
												handleInputChange("role", e.target.value)
											}
											disabled={!isEditing || !user.isAdmin}>
											<option value="">Select role</option>
											<option value="Assistant Manager">Program Manager</option>
											<option value="Team Lead">Team Lead</option>
											<option value="Validator">Validator</option>
											<option value="Tester">Tester</option>
										</select>
									</div>

									<div>
										<label
											htmlFor="tag"
											className="inline-block text-sm font-medium mb-1">
											Tag
										</label>
										<p className="inline-block text-red-500 font-normal text-sm">
											(Characters left - {30 - userData.tag.length}/ 30)
										</p>
										<div className="flex items-center gap-2">
											<Tag className="h-4 w-4 text-gray-500" />
											<input
												id="tag"
												type="text"
												className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100"
												value={userData.tag}
												maxLength={30}
												onChange={(e) =>
													handleInputChange("tag", e.target.value)
												}
												disabled={!isEditing}
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="courses"
											className="block text-sm font-medium mb-1">
											Courses ( separate each course with semicolon )
										</label>
										<div className="flex items-center gap-2">
											<BookOpen className="h-4 w-4 text-gray-500" />
											<input
												id="courses"
												type="text"
												className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100"
												value={userData.courses}
												placeholder="separate each course with semicolon"
												onChange={(e) =>
													handleInputChange("courses", e.target.value)
												}
												disabled={!isEditing}
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="bio"
											className="block text-sm font-medium mb-1">
											Bio
										</label>
										<textarea
											id="bio"
											className="w-full resize-none px-3 py-2 border rounded-md min-h-[100px] disabled:bg-gray-100"
											value={userData.bio}
											onChange={(e) => handleInputChange("bio", e.target.value)}
											disabled={!isEditing}
										/>
									</div>

									<div>
										<label
											htmlFor="extraActivities"
											className="block text-sm font-medium mb-1">
											Extra Activities ( separate each activity with semicolon )
										</label>
										<div className="flex items-center gap-2">
											<Activity className="h-4 w-4 text-gray-500" />
											<input
												id="extraActivities"
												type="text"
												className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100"
												value={userData.extraActivites}
												onChange={(e) =>
													handleInputChange("extraActivites", e.target.value)
												}
												disabled={!isEditing}
											/>
										</div>
									</div>
								</div>
							</div>

							{/* Issues Card */}
							<div className="bg-white rounded-lg p-6 shadow-md flex-1">
								<div className="mb-6">
									<h2 className="text-xl font-bold">Issues Handled</h2>
									<p className="text-gray-600 text-sm">
										Summary of issues you've raised
									</p>
								</div>

								<div className="space-y-4">
									{/* Converts an object into an array of [key, value] pairs. */}
									{Object.entries(userData.issues).map(([issueType, count]) => (
										<div
											key={issueType}
											className="flex justify-between items-center">
											<span className="text-sm font-medium capitalize">
												{issueType}
											</span>
											<input
												type="number"
												min={0}
												value={count}
												onChange={(e) =>
													handleIssueChange(issueType, e.target.valueAsNumber)
												}
												disabled={!isEditing || !user.isAdmin}
												className="w-20 px-3 py-2 border rounded-md text-right disabled:bg-gray-100"
											/>
										</div>
									))}
								</div>
								<div className="flex justify-between items-center mt-4 border bg-gray-100 p-2 rounded-md">
									<span className="text-lg font-medium capitalize">
										Previous Issues Score
									</span>
									<input
										type="number"
										min={0}
										value={user.score.previous}
										onChange={(e) =>
											setUserData({
												...userData,
												score: {
													...prevScore.score,
													previous: e.target.valueAsNumber,
												},
											})
										}
										disabled={!isEditing || !user.isAdmin}
										className="w-20 px-3 py-2 border bg-white rounded-md text-right"
									/>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Profile;
