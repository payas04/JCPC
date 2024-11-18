import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import AppHeader from "./AppHeader";
import { getUsers } from "../../lib/api";
import { useDispatch } from "react-redux";
import { setAllProfiles } from "../../store/profilesSlice";

const AccopsLayout = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getUsers().then((res) => {
			console.log(res.data);
			dispatch(setAllProfiles(res.data));
		});
	}, []);
	return (
		<div className="flex h-screen bg-gray-100 text-black">
			<AppHeader />
			<Sidebar />
			{/* <main className="flex-1 pt-12 mb-8"> */}
			<Outlet />
			{/* </main> */}
		</div>
	);
};

export default AccopsLayout;
