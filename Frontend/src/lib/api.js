import axios from "axios";
const BASE_URL = "https://jcpc-api.onrender.com/";

export const getUsers = async () => {
	try {
		const response = await axios.get(BASE_URL + "api/user/");
		return response;
	} catch (error) {
		console.log(error);
	}
};
