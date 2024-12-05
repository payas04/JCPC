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
	const formData = new FormData();
	formData.append("file", imageFile);
	formData.append(
		"upload_preset",
		import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
	);
	// formData.append("public_id", `${domainID}_profile_image`);
	try {
		const response = await axios.post(
			import.meta.env.VITE_CLOUDINARY_URL +
				`/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
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

export const csvUploadApi = async (usersData) => {
	try {
		console.log("Data being sent to backend:", usersData);
		const resposne = await axios.post(
			BASE_URL + "/api/user/csv-upload",
			usersData,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return resposne;
	} catch (error) {
		console.log(error);
	}
};
