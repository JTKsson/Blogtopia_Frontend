import { useState } from "react";
import { createPost } from "../../API/PostAPI";

export const CreatePost = () => {
	const [formData, setFormData] = useState({ title: "", postBody: "", categoryId: 0 });
	const [error, setError] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleClick = async () => {
		try {
			if (!formData.title || !formData.postBody || !formData.categoryId) {
				setError("Please make sure you added a title, content and category");
				return;
			}
			const result = await createPost(formData.title, formData.postBody, formData.categoryId);
			console.log(result);
			setError(null);
		} catch (error) {
			console.error(error);
			setError("Someting went wrong");
		}
	};

	const categories = [
		{ categoryName: "Fitness", categoryId: 1 },
		{ categoryName: "Fashion", categoryId: 2 },
		{ categoryName: "Cooking", categoryId: 3 },
		{ categoryName: "Gaming", categoryId: 4 },
	];

	return (
		<>
			{error && <p style={{ color: "red" }}>{error}</p>}
			<input
				type='text'
				name='title'
				placeholder='Title'
				value={formData.title}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='postBody'
				placeholder='Start your post...'
				value={formData.postBody}
				onChange={handleChange}
			/>
			<select name='categoryId' value={formData.categoryId} onChange={handleChange}>
				<option value=''>Select a category</option>
				{categories.map((category) => (
					<option key={category.categoryId} value={category.categoryId}>
						{category.categoryName}
					</option>
				))}
			</select>
			<button onClick={handleClick}>Create Post</button>
		</>
	);
};
