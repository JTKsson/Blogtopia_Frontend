import axiosInstance from "../Services/axiosInstance";

export const getPosts = async () => {
	try {
		const response = await axiosInstance.get("/Post");
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const createPost = async (title: string, postBody: string, categoryId: number) => {
	try {
		const response = await axiosInstance.post("/create-post", {
			title: title,
			postBody: postBody,
			categoryId: categoryId,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const updatePost = async (
	postId: number,
	title: string,
	postBody: string,
	categoryId: number
) => {
	try {
		const response = await axiosInstance.put("/post", {
			postId: postId,
			title: title,
			postBody: postBody,
			categoryId: categoryId,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const removePost = async ({ id }: { id: number }) => {
	const authData = JSON.parse(localStorage.getItem("authData") || "{}");
	const userId = authData.userId;
	try {
		const response = await axiosInstance.delete(`/Post/${userId}/${id}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};
