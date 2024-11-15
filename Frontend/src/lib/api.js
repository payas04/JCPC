import axios from "axios";
const BASE_URL = "http://localhost:5001";

export const getUsers = async () => {
	try {
		const response = await axios.get("http://localhost:5001/api/user", {
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const loginUser = async ({ data }) => {
	try {
		const response = await axios.post(BASE_URL + "/api/auth/user/login", data, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

export const logoutUser = async () => {
	try {
		const response = await axios.get(BASE_URL + "/api/auth/user/logout", {
			withCredentials: true,
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

export const getMyDetails = async () => {
	try {
		const response = await axios.get(BASE_URL + "/api/auth/user/me", {
			withCredentials: true,
		});
		return response;
	} catch (error) {
		console.log(error, "GetMyDetails error");
	}
};
