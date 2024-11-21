import { Switch } from "@mui/material";
import React from "react";

const NewMember = ({
	formData,
	setFormData,
	setIsNewUserModalOpen,
	handleCreateNewUser,
}) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-6 rounded-lg w-[500px]">
				<h2 className="text-xl font-bold mb-4">Create New Team Member</h2>
				<form
					onSubmit={(e) => {
						handleCreateNewUser(e);
					}}>
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
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="new-email"
								className="block text-sm font-medium mb-1">
								Email
							</label>
							<input
								id="new-email"
								type="email"
								autoComplete="email"
								placeholder="Enter Email"
								className="w-full p-2 border rounded-md"
								required
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
						</div>

						<div>
							<label
								htmlFor="new-domainID"
								className="block text-sm font-medium mb-1">
								DomainID
							</label>
							<input
								id="new-domainID"
								type="text"
								placeholder="Enter DomainID"
								className="w-full p-2 border rounded-md"
								required
								value={formData.domainID}
								onChange={(e) =>
									setFormData({ ...formData, domainID: e.target.value })
								}
							/>
						</div>
						<div>
							<label
								htmlFor="new-password"
								className="block text-sm font-medium mb-1">
								Password
							</label>
							<input
								id="new-password"
								type="password"
								autoComplete="current-password"
								placeholder="Enter DomainID"
								className="w-full p-2 border rounded-md"
								required
								value={formData.password}
								onChange={(e) =>
									setFormData({ ...formData, password: e.target.value })
								}
							/>
						</div>
						<div>
							<label
								htmlFor="new-role"
								className="block text-sm font-medium mb-1">
								Role
							</label>
							<select
								id="new-role"
								className="w-full p-2 border rounded-md"
								required
								value={formData.role}
								onChange={(e) =>
									setFormData({ ...formData, role: e.target.value })
								}>
								<option value="">Select role</option>
								<option value="Program Manager">Program Manager</option>
								<option value="Team Lead">Team Lead</option>
								<option value="Validator">Validator</option>
								<option value="Tester">Tester</option>
							</select>
						</div>
						<div className="flex gap-2 items-center">
							<label
								htmlFor="isAdmin"
								className="block text-sm font-medium mb-1">
								Admin Status
							</label>
							<Switch
								id="isAdmin"
								checked={formData.isAdmin}
								onChange={(e) =>
									setFormData({ ...formData, isAdmin: e.target.checked })
								}
							/>
						</div>
					</div>
					<div className="flex justify-end gap-4 mt-6">
						<button
							type="button"
							onClick={() => setIsNewUserModalOpen(false)}
							className="px-4 py-2 border rounded-md hover:bg-gray-50">
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
							Create User
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewMember;
