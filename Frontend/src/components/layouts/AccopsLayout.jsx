import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import AppHeader from "./AppHeader";

const AccopsLayout = () => {
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
