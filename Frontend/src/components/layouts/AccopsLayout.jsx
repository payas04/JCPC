import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { getUsers } from "../../lib/api";
import { useDispatch } from "react-redux";
import {
	fetchProfilesFailure,
	fetchProfilesStart,
	fetchProfilesSuccess,
} from "../../store/profilesSlice";

const AccopsLayout = () => {
	const dispatch = useDispatch();
	const [refreshTrigger, setRefreshTrigger] = useState(false);

	const fetchUsers = useCallback(async () => {
		dispatch(fetchProfilesStart());
		try {
			const response = await getUsers();
			dispatch(fetchProfilesSuccess(response.data));
		} catch (error) {
			dispatch(fetchProfilesFailure(error.message));
			console.log("Error fetching users:", error);
		}
	}, [dispatch]);
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers, refreshTrigger]);

	return (
		<div className="flex h-screen bg-gray-100 text-black">
			<Sidebar />
			<Outlet context={{ setRefreshTrigger }} />
		</div>
	);
};

export default AccopsLayout;
