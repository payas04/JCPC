import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/auth";

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, loading } = useAuth();

	if (loading) {
		return <div>Loading...</div>;
	}

	return isAuthenticated ? children : <Navigate to="/accops/login" />;
};

export default ProtectedRoute;
