import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setUser } from "../../store/userSlice";
import AppHeader from "../../components/layouts/AppHeader";
import Login from "../../components/ui/login";

const AccopsLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const user = useSelector((state) => state.user.user);
	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();
		const userData = { email, password };
		dispatch(setUser(userData));
	};

	if (user) return <Navigate to={"/accops/dashboard"} />;

	return (
		<>
			<AppHeader />
			<Login 
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				handleLogin={handleLogin}
			/>
		</>
	);
};

export default AccopsLogin;
