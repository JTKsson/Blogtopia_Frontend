import axios from "axios";

const apiService = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const login = async (username: string, password: string) => {
	try {
		const response = await apiService.post("/Login", {
			username: username,
			password: password,
		});
		const { token, userId } = response.data;
		const authData = { token, userId };
		localStorage.setItem("authData", JSON.stringify(authData));
		return response.data;
	} catch (error) {
		throw error;
	}
};
