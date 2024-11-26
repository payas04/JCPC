import React from "react";

const EditMember = ({
	setIsEditModalOpen,
	selectedMember,
	setSelectedMember,
	handlerUpdateUser,
}) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-6 rounded-lg w-full max-w-5xl space-y-2">
				<h2 className="text-xl font-bold mb-4">Edit Team Member</h2>
				<form
					onSubmit={(e) => {
						handlerUpdateUser(e);
					}}>
					<div className="grid grid-cols-3 gap-4">
						<div className="space-y-2">
							<div className="space-y-2">
								<label htmlFor="domainId" className="formLabel">
									Domain ID
								</label>
								<input
									type="text"
									id="domainId"
									defaultValue={selectedMember.domainID}
									className="formInput cursor-not-allowed"
									disabled
								/>
							</div>
							<div className="space-y-2">
								<label
									htmlFor={`name-${selectedMember.id}`}
									className="formLabel">
									Name
								</label>
								<input
									id={`name-${selectedMember.id}`}
									type="text"
									defaultValue={selectedMember.name}
									onChange={(e) => {
										setSelectedMember({
											...selectedMember,
											name: e.target.value,
										});
										console.log(selectedMember.name);
									}}
									className="formInput"
								/>
							</div>
							<div className="space-y-2">
								<label htmlFor="tag" className="formLabel">
									Tags
								</label>
								<input
									type="text"
									id="tag"
									defaultValue={selectedMember.tag}
									className="formInput"
									onChange={(e) =>
										setSelectedMember({
											...selectedMember,
											tag: e.target.value,
										})
									}
								/>
							</div>
						</div>
						<div className="space-y-2">
							<div className="space-y-2">
								<label htmlFor="email" className="formLabel">
									Email
								</label>
								<input
									id="email"
									type="email"
									defaultValue={selectedMember.email}
									className="formInput cursor-not-allowed"
									disabled
								/>
							</div>
							<div className="space-y-2">
								<label
									htmlFor={`role-${selectedMember.id}`}
									className="formLabel">
									Role
								</label>
								<select
									id={`role-${selectedMember.id}`}
									defaultValue={selectedMember.role}
									className="formSelect"
									onChange={(e) =>
										setSelectedMember({
											...selectedMember,
											role: e.target.value,
										})
									}>
									<option value="">Select role</option>
									<option value="Assistant Manager">Program Manager</option>
									<option value="Team Lead">Team Lead</option>
									<option value="Validator">Validator</option>
									<option value="Tester">Tester</option>
								</select>
							</div>

							<div className="space-y-2">
								<label htmlFor="courses" className="formLabel">
									Courses
								</label>
								<input
									type="text"
									id="courses"
									defaultValue={selectedMember.courses}
									className="formInput"
									onChange={(e) =>
										setSelectedMember({
											...selectedMember,
											courses: e.target.value,
										})
									}
								/>
							</div>
						</div>
						<div className="flex flex-col justify-between">
							<div className="space-y-2">
								<label htmlFor="bio" className="formLabel">
									Bio
								</label>
								<textarea
									id="bio"
									defaultValue={selectedMember.bio}
									className="resize-none formInput min-h-[120px]"
									onChange={(e) =>
										setSelectedMember({
											...selectedMember,
											bio: e.target.value,
										})
									}
								/>
							</div>
							<div className="space-y-2">
								<label htmlFor="extraActivities" className="formLabel">
									Extra Activities
								</label>
								<input
									type="text"
									id="extraActivities"
									defaultValue={selectedMember.extraActivites}
									className="formInput"
									onChange={(e) =>
										setSelectedMember({
											...selectedMember,
											extraActivites: e.target.value,
										})
									}
								/>
							</div>
						</div>
					</div>
					<div className="space-y-2">
						<h3 className="text-lg font-semibold">Issues</h3>
						<div className="grid grid-cols-5 gap-4">
							{Object.entries(selectedMember.issues).map(
								([issueType, count]) => (
									<div key={issueType}>
										<label htmlFor={issueType} className="formLabel">
											{issueType}
										</label>
										<input
											type="number"
											id={issueType}
											defaultValue={count}
											className="formInput"
											onChange={(e) =>
												setSelectedMember((prevMember) => ({
													...prevMember,
													issues: {
														...prevMember.issues,
														[issueType]: e.target.valueAsNumber,
													},
												}))
											}
										/>
									</div>
								)
							)}
						</div>
					</div>
					{/* Admin Status and previous score */}
					<div className="grid grid-cols-3 gap-6">
						<div className="space-y-2">
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
											...prevScore.score,
											previous: e.target.valueAsNumber,
										},
									})
								}
								className="formInput"
							/>
						</div>
						<div className="space-y-2">
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
					<div className="flex justify-end gap-4 mt-6">
						<button
							type="button"
							onClick={() => setIsEditModalOpen(false)}
							className="px-4 py-2 border rounded-md hover:bg-gray-50">
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
