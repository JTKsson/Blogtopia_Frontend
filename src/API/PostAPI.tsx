import axios from "axios";

const API_BASE_URL = "http://localhost:5106/api";

const apoService = axios.create({
	baseURL: API_BASE_URL,
});

export const getPosts = async () => {
	try {
		const response = await apoService.get("/Post");
		return response.data;
	} catch (error) {
		throw error;
	}
};
