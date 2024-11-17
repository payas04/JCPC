import { createContext, useState, useEffect, useContext } from "react";
import { getMyDetails, loginUser, logoutUser } from "../lib/api";
import axios from "axios";
import toast from "react-hot-toast";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const [isShutdown, setIsShutdown] = useState(false);
	const [isChromeOpen, setChromeOpen] = useState(false);

	useEffect(() => {
		// const storedUser = localStorage.getItem("user");
		// if (storedUser) {
		// 	setUser(JSON.parse(storedUser));
		// }
		checkAuthStatus();
	}, []);

	const checkAuthStatus = async () => {
		try {
			const response = await axios.get(BASE_URL + "/api/auth/user/me", {
				withCredentials: true,
			});

			if (response.data.success) {
				setIsAuthenticated(true);
				setUser(response.data.user);
			}
		} catch (error) {
			setIsAuthenticated(false);
			setUser(null);
		} finally {
			setLoading(false);
		}
	};

	// Login function
	const login = async (credentials) => {
		try {
			const response = await axios.post(
				BASE_URL + "/api/auth/user/login",
				credentials,
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			console.log(response);

			if (response.data.success) {
				toast.success(`${response.data.message}`);
				setIsAuthenticated(true);
				setUser(response.data.user);
				return { success: true };
			}
		} catch (error) {
			toast.error(`${error.response?.data?.message}`);
			return {
				success: false,
				error: error.response?.data?.message || "Login failed",
				message: error,
			};
		}
	};

	// Logout function
	const logout = async () => {
		try {
			const response = await logoutUser();
			setIsAuthenticated(false);
			setUser(null);
			toast.success(`${response.data.message}`);
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	// const login = (username) => {
	// 	const newUser = { username };
	// 	setUser(newUser);
	// 	localStorage.setItem("user", JSON.stringify(newUser));
	// };

	// const logout = () => {
	// 	setUser(null);
	// 	localStorage.removeItem("user");
	// };

	const value = {
		isShutdown,
		setIsShutdown,
		isChromeOpen,
		setChromeOpen,
		isAuthenticated,
		user,
		loading,
		login,
		logout,
		checkAuthStatus,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
