import React from "react";

const EditMember = ({
	setIsEditModalOpen,
	selectedMember,
	setSelectedMember,
	handlerUpdateUser,
}) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-8 rounded-lg w-full max-w-5xl">
				<h2 className="text-2xl font-bold mb-6">Edit Team Member</h2>
				<form
					onSubmit={(e) => {
						handlerUpdateUser(e);
					}}>
					<div className="grid grid-cols-3 gap-6 mb-6">
						{/* First Column */}
						<div className="space-y-6">
							<div className="space-y-3">
								<label htmlFor="domainId" className="formLabel">
									Domain ID
								</label>
								<input
									type="text"
									id="domainId"
									defaultValue={selectedMember.domainID}
									disabled
									className="formInput cursor-not-allowed"
								/>
							</div>

							<div className="space-y-3">
								<label
									htmlFor={`name-${selectedMember.id}`}
									className="formLabel">
									Name
								</label>
								<input
									type="text"
									id={`name-${selectedMember.id}`}
									defaultValue={selectedMember.name}
									onChange={(e) =>
										setSelectedMember({
											...selectedMember,
											name: e.target.value,
										})
									}
									className="formInput"
								/>
							</div>

							<div className="space-y-3">
								<label htmlFor="tag" className="formLabel">
									Tags
								</label>
								<input
									type="text"
									id="tag"
									defaultValue={selectedMember.tag}
									onChange={(e) =>
										setSelectedMember({
											...selectedMember,
											tag: e.target.value,
										})
									}
									className="formInput"
								/>
							</div>
						</div>

						{/* Second Column */}
						<div className="space-y-6">
							<div className="space-y-3">
								<label htmlFor="email" className="formLabel">
									Email
								</label>
								<input
									type="email"
									id="email"
									defaultValue={selectedMember.email}
									disabled
									className="formInput cursor-not-allowed"
								/>
							</div>

							<div className="space-y-3">
								<label
									htmlFor={`role-${selectedMember.id}`}
									className="formLabel">
									Role
								</label>
								<select
									id={`role-${selectedMember.id}`}
									defaultValue={selectedMember.role}
									onChange={(e) =>
										setSelectedMember({
											...selectedMember,
											role: e.target.value,
										})
									}
									className="formSelect">
									<option value="">Select role</option>
									<option value="Project Manager">Project Manager</option>
									<option value="Co-Lead">Co-Lead</option>
									<option value="Team Lead">Team Lead</option>
									<option value="Validator">Validator</option>
									<option value="Tester">Tester</option>
								</select>
							</div>

							<div className="space-y-3">
								<label htmlFor="courses" className="formLabel">
									Courses
								</label>
								<input
									type="text"
									id="courses"
									defaultValue={selectedMember.courses}
									onChange={(e) =>
										setSelectedMember({
											...selectedMember,
											courses: e.target.value,
										})
									}
									className="formInput"
								/>
							</div>
						</div>

						{/* Third Column */}
						<div className="space-y-6">
							<div className="space-y-3">
								<label htmlFor="bio" className="formLabel">
									Bio
								</label>
								<textarea
									id="bio"
									defaultValue={selectedMember.bio}
									onChange={(e) =>
										setSelectedMember({
											...selectedMember,
											bio: e.target.value,
										})
									}
									className="formInput resize-none min-h-[134px]"
								/>
							</div>

							<div className="space-y-3">
								<label htmlFor="extraActivities" className="formLabel ">
									Extra Activities
								</label>
								<input
									type="text"
									id="extraActivities"
									defaultValue={selectedMember.extraActivites}
									onChange={(e) =>
										setSelectedMember({
											...selectedMember,
											extraActivites: e.target.value,
										})
									}
									className="formInput"
								/>
							</div>
						</div>
					</div>

					{/* Issues Section */}
					<div className="space-y-6 mb-6">
						<h3 className="text-lg font-semibold">Issue Count</h3>
						<div className="grid grid-cols-5 gap-4">
							{Object.entries(selectedMember.issues).map(
								([issueType, count]) => (
									<div key={issueType}>
										<label htmlFor={issueType} className="formLabel mb-2">
											{issueType.charAt(0).toUpperCase() + issueType.slice(1)}
										</label>
										<input
											type="number"
											id={issueType}
											defaultValue={count}
											onChange={(e) =>
												setSelectedMember((prevMember) => ({
													...prevMember,
													issues: {
														...prevMember.issues,
														[issueType]: e.target.valueAsNumber,
													},
												}))
											}
											className="formInput space-y-5"
										/>
									</div>
								)
							)}
						</div>
					</div>

					{/* Additional Fields */}
					<div className="grid grid-cols-3 gap-6 mb-6">
						<div className="space-y-3">
							<label htmlFor="prevScore" className="formLabel">
								Previous Score
							</label>
							<input
								type="number"
								id="prevScore"
								defaultValue={selectedMember.score.previous}
								onChange={(e) =>
									setSelectedMember({
										...selectedMember,
										score: {
											...selectedMember.score,
											previous: e.target.valueAsNumber,
										},
									})
								}
								className="formInput"
							/>
						</div>

						<div className="space-y-3">
							<label htmlFor="isAdmin" className="formLabel">
								Admin Status
							</label>
							<select
								id="isAdmin"
								defaultValue={selectedMember.isAdmin}
								onChange={(e) =>
									setSelectedMember({
										...selectedMember,
										isAdmin: e.target.value,
									})
								}
								className="formSelect">
								<option value="true">Admin</option>
								<option value="false">User</option>
							</select>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4">
						<button
							type="button"
							onClick={() => setIsEditModalOpen(false)}
							className="px-4 py-2 border rounded-md hover:bg-gray-100">
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
							Save Changes
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditMember;
