import { createContext, useState, useEffect, useContext } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Custom hook for easier usage of context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component that wraps the app and provides the auth state
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isShutdown, setIsShutdown] = useState(false);

	// Load user from localStorage when the app initializes
	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	// Function to handle login and save user in localStorage
	const login = (username) => {
		const newUser = { username };
		setUser(newUser);
		localStorage.setItem("user", JSON.stringify(newUser));
	};

	// Function to handle logout and remove user from localStorage
	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	// Authentication value provided to context consumers
	const value = { user, login, logout, isShutdown, setIsShutdown };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
