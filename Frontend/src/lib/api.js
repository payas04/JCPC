import axios from "axios";
import toast from "react-hot-toast";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getUsers = async () => {
	try {
		const response = await axios.get(BASE_URL + "/api/user", {
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

export const uploadImageApi = async (imageFile, domainID) => {
	try {
		const signatureResponse = await axios.post(
			BASE_URL + "/api/user/generate-signature",
			{ domainID }
		);

		const { signature, timestamp, apiKey, cloudName, folder } =
			signatureResponse.data;
		const formData = new FormData();
		formData.append("file", imageFile);
		formData.append("public_id", domainID);
		formData.append("api_key", apiKey);
		formData.append("timestamp", timestamp);
		formData.append("signature", signature);
		if (folder) {
			formData.append("folder", folder);
		}
		const response = await axios.post(
			`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
			formData
		);
		toast.success("Image uploaded successfully!");
		return response.data.secure_url;
	} catch (error) {
		console.error("Error uploading image:", error);
		alert("Error uploading image. Please try again.");
	} finally {
		// setUploading(false);
	}
};
