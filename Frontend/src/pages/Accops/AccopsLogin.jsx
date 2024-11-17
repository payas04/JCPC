import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AppHeader from "../../components/layouts/AppHeader";
import LoginComponent from "../../components/ui/LoginComponent";
import { useAuth } from "../../context/auth";

const AccopsLogin = () => {
	const [domainID, setDomainID] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { login, user } = useAuth();
	// const user = useSelector((state) => state.user.user);
	// const dispatch = useDispatch();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const userData = { domainID, password };
			const result = await login(userData);

			if (result.success) {
				navigate("/accops/dashboard");
			}
		} catch (error) {
			// alert(error);
			console.log(error);
		}
	};

	if (user) return <Navigate to={"/accops/dashboard"} />;

	return (
		<>
			<AppHeader />
			<LoginComponent
				domainID={domainID}
				setDomainID={setDomainID}
				password={password}
				setPassword={setPassword}
				handleLogin={handleLogin}
			/>
		</>
	);
};

export default AccopsLogin;
