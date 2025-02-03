import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { getUsers } from "../../lib/api";
import { useDispatch } from "react-redux";
import { setAllProfiles } from "../../store/profilesSlice";

const AccopsLayout = () => {
	const dispatch = useDispatch();
	const [refreshTrigger, setRefreshTrigger] = useState(false);

	useEffect(() => {
		fetchUsers();
	}, [dispatch, refreshTrigger]);

	const fetchUsers = async () => {
		try {
			const response = await getUsers();
			dispatch(setAllProfiles(response.data));
		} catch (error) {
			console.log("Error fetching users:", error);
		}
	};
	return (
		<div className="flex h-screen bg-gray-100 text-black">
			<Sidebar />
			<Outlet context={{ setRefreshTrigger }} />
		</div>
	);
};

export default AccopsLayout;
