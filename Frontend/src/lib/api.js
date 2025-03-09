import axios from "axios";
import toast from "react-hot-toast";
import { getProfileImageURL } from "./utils";
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
		return error;
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
	const formData = new FormData();
	formData.append("file", imageFile);
	const publicId = domainID;
	try {
		const generateSignature = await axios.post(
			BASE_URL + `/api/user/signature?public_id=${publicId}`,
			{
				withCredentials: true,
			}
		);
		const { signature, timestamp, upload_preset } = generateSignature.data;
		formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
		formData.append("upload_preset", upload_preset);
		formData.append("timestamp", timestamp);
		formData.append("signature", signature);
		formData.append("public_id", publicId);
		formData.append("overwrite", "true");
		const response = await axios.post(
			import.meta.env.VITE_CLOUDINARY_URL +
				`/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
			formData
		);
		toast.success("Image uploaded successfully!");
		const profileImage128 = getProfileImageURL(
			publicId,
			256,
			256,
			response.data.version
		);

		return profileImage128;
		// return response.data.secure_url;
	} catch (error) {
		console.error("Error uploading image:", error);
		alert("Error uploading image. Please try again.");
	}
};

export const csvUploadApi = async (usersData) => {
	try {
		const response = await axios.post(
			BASE_URL + "/api/user/csv-upload",
			usersData,
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);
		return response;
	} catch (error) {
		throw error;
	}
};
