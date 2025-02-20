import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Add a request interceptor to include JWT token in headers
axiosInstance.interceptors.request.use(
	(config) => {
		const authData = JSON.parse(localStorage.getItem("authData") || "{}");
		const token = authData.token;
		if (token) {
			config.headers.Authorization = `bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosInstance;
